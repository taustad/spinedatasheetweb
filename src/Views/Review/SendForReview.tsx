import React, {
 Dispatch, SetStateAction, useEffect, useState,
} from "react"
import {
 Button, Checkbox, Tabs, Typography,
} from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { TagData } from "../../Models/TagData"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"
import { GetContainerReviewerService } from "../../api/ContainerReviewerService"
import MyReviews from "./MyReviews"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[]
    userId: string
    myReviews: any[]
    setMyReviews: Dispatch<SetStateAction<any[]>>,
    containerReviews: any[]
    containers: any[]
}

function SendForReview({
    tagData,
    userId,
    myReviews,
    setMyReviews,
    containerReviews,
    containers,
}: Props) {
    const handleButtonClick = async (tagNo: string, containerReviewId: string) => {
        const newContainerReview: Components.Schemas.CreateContainerReviewerDto = {
            userId,
            tagReviewers: [
                {
                    reviewerId: userId,
                    tagNo,
                },
            ],
        }

        const result = await (await GetContainerReviewerService()).createContainerReviewer(newContainerReview, containerReviewId)
        const updatedMyReviews = myReviews.concat(result)
        setMyReviews(updatedMyReviews)

        // const newReviewer: Components.Schemas.CreateTagReviewerDto = {
        //     reviewerId: userId,
        // }
        // const newReview: any = {
        //     tagNo: tagno,
        //     status: "New",
        //     reviewers: [newReviewer],
        // }

        // const result = await (await GetTagDataReviewService()).createTagDataReview(newReview)
        // const newAssignedTags = myTags.concat(result)

        // setMyTags(newAssignedTags)
    }

    const disableAssignButton = (tagno: string) => myReviews.find((r) => r.tagNo === tagno) !== undefined

    const getContainerReviewIdForTagNo = (tagNo: string) => {
        console.log("Containers in method: ", containers)

        const container = containers?.find((c) => c.tagNos.includes(tagNo))
        if (!container) { return null }
        const containerReview = containerReviews.find((cr) => cr.containerId === container.id)
        return containerReview
    }

    getContainerReviewIdForTagNo("TAG-001")
    getContainerReviewIdForTagNo("TAG-444")
    getContainerReviewIdForTagNo("ASD")

    const buildTagDataList = () => {
        const tagNumbers = tagData.map((t) => t.tagNo)
        return (
            <>
                {tagNumbers.map((number) => {
                    if (!number) { return null }

                    const containerReview = getContainerReviewIdForTagNo(number)
                    console.log("Contaienr in buildTagDataList: ", containerReview)

                    return (
                        <Wrapper>
                            <Typography>{number}</Typography>
                            <Button
                                onClick={() => handleButtonClick(number, containerReview.id)}
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
