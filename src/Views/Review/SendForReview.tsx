import React, { useEffect, useState } from "react"
import { Checkbox, Tabs, Typography } from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { TagData } from "../../Models/TagData"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[]
}

function SendForReview({
    tagData,
}: Props) {
    console.log("Review view")

    const buildTagDataList = () => {
        const tagNumbers = tagData.map((t) => t.tagNo)
        return (
            <>
                {tagNumbers.map((number) => (
                    <Wrapper>
                        <Typography>{number}</Typography>
                        <Checkbox />
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

export default SendForReview
