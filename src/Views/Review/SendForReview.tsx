import React, {
    Dispatch, SetStateAction,
} from "react"
import {
    Button, Typography,
} from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { TagData } from "../../Models/TagData"
import { GetContainerReviewerService } from "../../api/ContainerReviewerService"
import { GetTagReviewerService } from "../../api/TagReviewerService"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[]
    userId: string
    myContainerReviews: Components.Schemas.ContainerReviewerDto[]
    setMyContainerReviews: Dispatch<SetStateAction<Components.Schemas.ContainerReviewerDto[]>>,
    myTagReviewers: Components.Schemas.TagReviewerDto[]
    setMyTagReviewers: Dispatch<SetStateAction<Components.Schemas.TagReviewerDto[]>>,
    containerReviews: Components.Schemas.ContainerReviewDto[]
    containers: Components.Schemas.ContainerDto[]
}

function SendForReview({
    tagData,
    userId,
    myContainerReviews,
    setMyContainerReviews,
    containerReviews,
    containers,
    myTagReviewers,
    setMyTagReviewers,
}: Props) {
    const handleButtonClick = async (tagNo: string, containerReviewId: string | undefined) => {
        if (containerReviewId === undefined) { return }
        const existingContainerReviewer = myContainerReviews.find((cr) => cr.containerReviewId === containerReviewId)
        if (existingContainerReviewer === undefined) {
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
            const updatedMyReviews = [...myContainerReviews, result]
            setMyContainerReviews(updatedMyReviews)
            if (result.tagReviewers?.length && result.tagReviewers.length > 0) {
                const updatedMyTagReviewers = [...myTagReviewers, ...result.tagReviewers]
                setMyTagReviewers(updatedMyTagReviewers)
            }
            return
        }

        const newTagReviewer: Components.Schemas.CreateTagReviewerDto = {
            reviewerId: userId,
            tagNo,
        }

        const dtoList = [newTagReviewer]

        const result = await (await GetTagReviewerService()).createTagDataReview(dtoList, existingContainerReviewer.id ?? "")
        const updatedMyTagReviewers = [...myTagReviewers, result[0]]
        setMyTagReviewers(updatedMyTagReviewers)
    }

    const disableAssignButton = (tagno: string): boolean => {
        const exists = myTagReviewers.find((r) => r.tagNo?.includes(tagno))
        return exists !== undefined
    }

    const getContainerReviewIdForTagNo = (tagNo: string) => {
        const container = containers?.find((c) => c.tagNos?.includes(tagNo))
        if (!container) { return null }
        const containerReview = containerReviews.find((cr) => cr.containerId === container.id)
        return containerReview
    }

    const buildTagDataList = () => {
        const tagNumbers = tagData.map((t) => t.tagNo)
        return (
            <>
                {tagNumbers.map((number) => {
                    if (!number) { return null }

                    const containerReview = getContainerReviewIdForTagNo(number)
                    return (
                        <Wrapper>
                            <Typography>{number}</Typography>
                            <Button
                                onClick={() => handleButtonClick(number, containerReview?.id)}
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
