import {
    Button, Dialog, Typography, Radio,
} from "@equinor/eds-core-react"
import React, {
    ChangeEvent,
    Dispatch, SetStateAction, useContext, useEffect, useState,
} from "react"
import styled from "styled-components"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"
import { GetRevisionReviewService } from "../../api/RevisionReviewService"
import { GetTagDataService } from "../../api/TagDataService"
import { ViewContext } from "../../Context/ViewContext"

const ReviewDialog = styled(Dialog)`
    min-width: 500px;
`

const ReviewPrompt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e7e8;
    margin: 20px 0;
    padding: 0 10px 20px 10px;
`

const RadioUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const ReviewSubmition = styled(Dialog.Actions)`
    display: flex;
    justify-content: flex-end;
`

interface Props {
    tagNoInReview: string | undefined,
    revisionInReview?: string | undefined,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

function EquipmentListReview({
    tagNoInReview,
    revisionInReview,
    isOpen,
    setIsOpen,
}: Props) {
    const { setActiveTagData } = useContext(ViewContext)
    const [tagReview, setTagReview] = useState<string | undefined>(undefined)
    const [packageReview, setPackageReview] = useState<string | undefined>(undefined)

    const onTagChange = (event: ChangeEvent<HTMLInputElement>) => setTagReview(event.target.value)
    const onPackageChange = (event: ChangeEvent<HTMLInputElement>) => setPackageReview(event.target.value)

    const updateTagData = async () => {
        if (!tagNoInReview) return
        const tagData = await (await GetTagDataService()).getTagData(tagNoInReview)
        setActiveTagData(tagData)
    }

    const buildTagReview = (): Components.Schemas.CreateTagDataReviewDto => {
        const newReview: Components.Schemas.CreateTagDataReviewDto = {
            tagNo: tagNoInReview ?? "",
            status: "New",
        }
        return newReview
    }

    const buildPackageReview = (): Components.Schemas.CreateContainerReviewDto => {
        const newReview: Components.Schemas.CreateContainerReviewDto = {
            revisionContainerId: revisionInReview ?? "",
            status: "New",
        }
        return newReview
    }

    const approveTag = async () => {
        const review = buildTagReview()
        review.status = "Reviewed"
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        await updateTagData()
    }

    const rejectTag = async () => {
        const review = buildTagReview()
        review.status = "Resubmit"
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        await updateTagData()
    }

    const approvePackage = async () => {
        const review = buildPackageReview()
        review.status = "Reviewed"
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        await updateTagData()
    }

    const rejectPackage = async () => {
        const review = buildPackageReview()
        review.status = "Resubmit"
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        await updateTagData()
    }

    const handleSubmit = () => {
        if (tagReview === "approved") {
            approveTag()
        }
        if (tagReview === "rejected") {
            rejectTag()
        }
        if (packageReview === "approved") {
            approvePackage()
        }
        if (packageReview === "rejected") {
            rejectPackage()
        }
        setTagReview(undefined)
        setPackageReview(undefined)
        setIsOpen(false)
    }

    const handleClose = () => {
        setTagReview(undefined)
        setPackageReview(undefined)
        setIsOpen(false)
    }

    return (
        <ReviewDialog open={isOpen} isDismissable onClose={handleClose}>
            <Dialog.Header>
                <Dialog.Title>
                    Submit review
                </Dialog.Title>
            </Dialog.Header>
            <Dialog.Content>
                <ReviewPrompt>
                    <div>
                        <Typography variant="h6">
                            Tag review
                        </Typography>
                        <Typography variant="meta">
                            Tag id:
                            {" "}
                            {tagNoInReview}
                        </Typography>
                    </div>
                    <RadioUl>
                        <li>
                            <Radio
                                id="approvedTag"
                                label="Approve"
                                value="approved"
                                name="ApproveTag"
                                onChange={onTagChange}
                                checked={tagReview === "approved"}
                            />
                        </li>
                        <li>
                            <Radio
                                id="rejectedTag"
                                label="Reject"
                                value="rejected"
                                name="RejectTag"
                                onChange={onTagChange}
                                checked={tagReview === "rejected"}
                            />
                        </li>
                    </RadioUl>
                </ReviewPrompt>

                {revisionInReview
                    && (
                        <ReviewPrompt>
                            <div>
                                <Typography variant="h6">
                                    Package review
                                </Typography>
                                <Typography variant="meta">
                                    Package id
                                    {" "}
                                    {revisionInReview}
                                </Typography>
                            </div>

                            <RadioUl>
                                <li>
                                    <Radio
                                        id="approvedPackage"
                                        label="Approve"
                                        value="approved"
                                        name="ApprovePackage"
                                        onChange={onPackageChange}
                                        checked={packageReview === "approved"}
                                    />
                                </li>
                                <li>
                                    <Radio
                                        id="rejectedPackage"
                                        label="Reject"
                                        value="rejected"
                                        name="RejectPackage"
                                        onChange={onPackageChange}
                                        checked={packageReview === "rejected"}
                                    />
                                </li>
                            </RadioUl>
                        </ReviewPrompt>
                    )}
            </Dialog.Content>
            <ReviewSubmition>
                <Button variant="ghost" onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </ReviewSubmition>
        </ReviewDialog>
    )
}

export default EquipmentListReview
