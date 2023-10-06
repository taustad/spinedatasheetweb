import React, {
    ChangeEvent,
 Dispatch, SetStateAction, useEffect, useState,
} from "react"
import {
 Checkbox, NativeSelect, Tabs, Typography,
} from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { useCurrentUser } from "@equinor/fusion"
import { TagData } from "../../Models/TagData"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[],
    userId: string,
    myTags: Components.Schemas.TagDataReviewDto[]
    setMyTags: Dispatch<SetStateAction<Components.Schemas.TagDataReviewDto[]>>,
}

function MyReviews({
    tagData,
    userId,
    myTags,
    setMyTags,
}: Props) {
    console.log("Review view")

    const mapToEnum = (input: string): Components.Schemas.ReviewStatusDto => {
        switch (input) {
            case "Reviewed":
                return "Reviewed"
            case "Resubmit":
                return "Resubmit"
            case "Diff":
                return "Diff"
            case "Duplicate":
                return "Duplicate"
            case "ReviewedWithComment":
                return "ReviewedWithComment"
            case "NotReviewed":
                return "NotReviewed"
            case "Deleted":
                return "Deleted"
            default:
                return "New"
        }
    }

    const handleReviewStateChange = async (event: ChangeEvent<HTMLSelectElement>, review: Components.Schemas.TagDataReviewDto, index: number) => {
        if (!review?.id) { return }
        const dto: Components.Schemas.UpdateReviewerDto = {
            reviewStatus: mapToEnum(event.currentTarget.selectedOptions[0].value),
        }
        const result = await (await GetTagDataReviewService()).updateReviewer(review.id, userId, dto)
        const updatedReviews = [...myTags]
        const reviewToUpdated = updatedReviews.find((r) => r.id === review.id)
        const reviewerToUpdate = reviewToUpdated?.reviewer?.find((r) => r.reviewerId === userId)
        if (reviewerToUpdate) {
            reviewerToUpdate.status = dto.reviewStatus
        }
        console.log("UpdatedReviews: ", updatedReviews)
        setMyTags(updatedReviews)
    }

    const getCurrentValue = (review: Components.Schemas.TagDataReviewDto): string => {
        const myReview = review.reviewer?.find((r) => r.reviewerId === userId)
        if (!myReview) { return "New" }
        return myReview.status
    }

    const buildTagDataList = () => {
        console.log("building")
        return (
            <>
                {myTags.map((review, index) => (
                    <Wrapper>
                        <Typography>{review.tagNo}</Typography>
                        <NativeSelect
                            id="default-select"
                            label="Review status"
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => handleReviewStateChange(event, review, index)}
                            value={getCurrentValue(review)}
                        >
                            <option key="New" value="New">New</option>
                            <option key="Reviewed" value="Reviewed">Reviewed</option>
                            <option key="Resubmit">Resubmit</option>
                            <option key="Diff" value="Diff">Diff</option>
                            <option key="Duplicate" value="Duplicate">Duplicate</option>
                            <option key="ReviewedWithComment" value="ReviewedWithComment">ReviewedWithComment</option>
                            <option key="NotReviewed" value="NotReviewed">NotReviewed</option>
                            <option key="Deleted" value="Deleted">Deleted</option>
                        </NativeSelect>
                    </Wrapper>
                ))}
            </>
        )
    }

    return (
        <>
            <Typography>Send for review</Typography>
            {buildTagDataList()}
        </>
    )
}

export default MyReviews
