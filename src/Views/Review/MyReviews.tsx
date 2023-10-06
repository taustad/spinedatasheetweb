import React, {
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
    myTags: string[]
    setMyTags: Dispatch<SetStateAction<string[]>>,
}

function MyReviews({
    tagData,
    userId,
    myTags,
    setMyTags,
}: Props) {
    console.log("Review view")

    const handleReviewStateChange = async () => {
        const result = await (await GetTagDataReviewService()).updateReviewer
    }

    const buildTagDataList = () => {
        console.log("building")
        return (
            <>
                {myTags.map((number) => (
                    <Wrapper>
                        <Typography>{number}</Typography>
                        <NativeSelect
                            id="default-select"
                            label="Label text"
                            meta="m2"
                        >
                            <option>New</option>
                            <option>Reviewed</option>
                            <option>Resubmit</option>
                            <option>Diff</option>
                            <option>Duplicate</option>
                            <option>ReviewedWithComment</option>
                            <option>NotReviewed</option>
                            <option>Deleted</option>
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
