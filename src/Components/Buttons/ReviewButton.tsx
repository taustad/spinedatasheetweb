import React, {
    useContext, useEffect, useRef, useState,
} from "react"
import {
    Button, Dialog, Icon, Typography,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { chevron_down, chevron_up } from "@equinor/eds-icons"
import { useCurrentUser } from "@equinor/fusion"
import { GetContainerReviewerService } from "../../api/ContainerReviewerService"
import { ViewContext } from "../../Context/ViewContext"

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
    const [disableButton, setDisableButton] = useState<boolean>(false)

    const openDialog = (message: string, action: string) => {
        setDialogMessage(message)
        setActionType(action)
        setDialogOpen(true)
    }

    const { containerReviewers, setContainerReviewers } = useContext(ViewContext)

    const currentUser: any = useCurrentUser()

    useEffect(() => {
        (async () => {
            const myReviewsResult = await (await GetContainerReviewerService()).getContainerReviewers(currentUser._info.localAccountId)
            setContainerReviewers(myReviewsResult.data)
            if (myReviewsResult.data.length === 0) {
                setDisableButton(true)
            } else if (myReviewsResult.data[0].state !== "Open") {
                setDisableButton(true)
            }
        })()
    }, [])

    const handleConfirm = async () => {
        const containerReviewerService = await GetContainerReviewerService()
        if (containerReviewers.length > 0 && containerReviewers[0].id && containerReviewers[0].containerReviewId) {
            if (actionType === "complete") {
                containerReviewerService.updateReviewer({ state: "Complete" }, containerReviewers[0].containerReviewId, containerReviewers[0].id)
            } else if (actionType === "abandon") {
                containerReviewerService.updateReviewer({ state: "Abandoned" }, containerReviewers[0].containerReviewId, containerReviewers[0].id)
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
        if (containerReviewers.length === 0) {
            return "No review assigned"
        }
        const reviewer = containerReviewers[0]
        if (reviewer.state === "Open") {
            return "Review complete"
        }
        return "Review abandoned"
    }

    return (
        <div>
            {disableButton ? <Typography>{getButtonReplacementText()}</Typography> : (
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
