import React, {
 Dispatch, SetStateAction, useEffect, useState,
} from "react"
import {
 Button, Checkbox, Tabs, Typography,
} from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { TagData } from "../../Models/TagData"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[]
    userId: string
    myTags: any[]
    setMyTags: Dispatch<SetStateAction<any[]>>,
}

function SendForReview({
    tagData,
    userId,
    myTags,
    setMyTags,
}: Props) {
    const handleButtonClick = async (tagno: string) => {
        const newReviewer: Components.Schemas.CreateReviewerDto = {
            reviewerId: userId,
        }
        const newReview: any = {
            tagNo: tagno,
            status: "New",
            reviewers: [newReviewer],
        }

        const result = await (await GetTagDataReviewService()).createTagDataReview(newReview)
        const newAssignedTags = myTags.concat(result)

        setMyTags(newAssignedTags)
    }

    const disableAssignButton = (tagno: string) => myTags.find((r) => r.tagNo === tagno) !== undefined

    const buildTagDataList = () => {
        const tagNumbers = tagData.map((t) => t.tagNo)
        return (
            <>
                {tagNumbers.map((number) => {
                    if (!number) { return null }
                    return (
                        <Wrapper>
                            <Typography>{number}</Typography>
                            <Button
                                onClick={() => handleButtonClick(number)}
                                disabled={disableAssignButton(number)}
                            >
                                Assign
                            </Button>
                        </Wrapper>
                    )
                })}
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

export default SendForReview
