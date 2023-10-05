import React, { useEffect, useState } from "react"
import {
 Checkbox, NativeSelect, Tabs, Typography,
} from "@equinor/eds-core-react"
import { styled } from "styled-components"
import { TagData } from "../../Models/TagData"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    tagData: TagData[]
}

function MyReviews({
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
                        <NativeSelect
                            id="default-select"
                            label="Label text"
                            meta="m2"
                        >
                            <option>New</option>
                            <option>Reviewed</option>
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
