import React, {
    useContext, useEffect, useRef, useState,
} from "react"
import {
    Button, Dialog, Icon, Typography,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { chevron_down, chevron_up } from "@equinor/eds-icons"
import { useCurrentUser } from "@equinor/fusion"
import { useParams } from "react-router-dom"
import { GetContainerReviewerService } from "../../api/ContainerReviewerService"
import { ViewContext } from "../../Context/ViewContext"
import { GetContainerReviewService } from "../../api/ContainerReviewService"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const DropButton = styled(Button)`
    width: 30px;
`
const Confirmation = styled(Dialog)`
    width: 400px;
`

const DropDownButton = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #007078;
    border-radius: 4px;
    position: relative;
`

const AbandonButton = styled(Button)`
    background-color: #34444F;
    position: absolute;
    width: 100%;
    top: 36px;
    left: 0;
    & span {
        justify-content: flex-start;
    }
`

const ReviewButton = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [dialogMessage, setDialogMessage] = useState("")
    const [actionType, setActionType] = useState("")
    const dropButtonRef = useRef(null)
    const [currentContainerReviewer, setCurrentContainerReviewer] = useState<Components.Schemas.ContainerReviewerDto>()

    const { containerId } = useParams<Record<string, string>>()

    const openDialog = (message: string, action: string) => {
        setDialogMessage(message)
        setActionType(action)
        setDialogOpen(true)
    }

    const {
        containerReviewers, setContainerReviewers, setContainerReviews, containerReviews,
    } = useContext(ViewContext)

    const currentUser: any = useCurrentUser()

    useEffect(() => {
        (async () => {
            const myReviewsResult = await (await GetContainerReviewerService()).getContainerReviewers(currentUser._info.localAccountId)
            setContainerReviewers(myReviewsResult.data)

            const containerReviewsResult = await (await GetContainerReviewService()).getContainerReviews()
            setContainerReviews(containerReviewsResult.data)

            const currentContainerReview = containerReviewsResult.data.find(
                (r: Components.Schemas.ContainerReviewDto) => r.containerId === containerId,
            )

            const current: Components.Schemas.ContainerReviewerDto = myReviewsResult.data
                .find((r: Components.Schemas.ContainerReviewerDto) => r.containerReviewId === currentContainerReview.id)

            setCurrentContainerReviewer(current)
        })()
    }, [])

    const handleConfirm = async () => {
        const containerReviewerService = await GetContainerReviewerService()
        if (currentContainerReviewer !== undefined && currentContainerReviewer.containerReviewId && currentContainerReviewer.id) {
            const updateReviewer = async (state: Components.Schemas.ContainerReviewerStateEnumDto) => {
                const result = await containerReviewerService.updateReviewer(
                    { state },
                    currentContainerReviewer.containerReviewId!,
                    currentContainerReviewer.id!,
                )
                setCurrentContainerReviewer(result)

                const updatedContainerReviewers = containerReviewers.map((cr, i) => {
                    if (i === 0) {
                        return { ...cr, state }
                    }
                    return cr
                })

                setContainerReviewers(updatedContainerReviewers)
            }

            if (actionType === "complete") {
                await updateReviewer("Complete")
            } else if (actionType === "abandon") {
                await updateReviewer("Abandoned")
            }
        } else {
            console.info("No active container reviewers")
        }

        setDialogOpen(false)
        setDropdownOpen(false)
    }

    const handleCancel = () => {
        setDialogOpen(false)
        setDropdownOpen(false)
    }

    const getButtonReplacementText = () => {
        if (!currentContainerReviewer) {
            return "No review assigned"
        }
        if (currentContainerReviewer.state === "Complete") {
            return "Review complete"
        }
        return "Review abandoned"
    }

    return (
        <div>
            {!currentContainerReviewer || currentContainerReviewer.state !== "Open" ? <Typography>{getButtonReplacementText()}</Typography> : (
                <DropDownButton>
                    <Wrapper>
                        <Button
                            onClick={() => openDialog("Are you sure you want to finish the review?", "complete")}
                        >
                            Finish Review
                        </Button>
                        <DropButton
                            ref={dropButtonRef}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {
                                dropdownOpen ? (
                                    <Icon data={chevron_up} />
                                ) : (
                                    <Icon data={chevron_down} />
                                )
                            }
                        </DropButton>
                    </Wrapper>
                    {dropdownOpen && (
                        <AbandonButton
                            onClick={() => openDialog("Are you sure you want to abandon the review?", "abandon")}
                        >
                            Abandon review
                        </AbandonButton>
                    )}

                    <Confirmation open={isDialogOpen} onClose={() => setDialogOpen(false)}>
                        <Dialog.Header>
                            <Dialog.Title>
                                {actionType === "complete" ? "Complete Review" : "Abandon Review"}
                            </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Content>
                            {dialogMessage}
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
                            <Button onClick={handleConfirm}>Confirm</Button>
                        </Dialog.Actions>
                    </Confirmation>
                </DropDownButton>
            )}
        </div>
    )
}

export default ReviewButton
