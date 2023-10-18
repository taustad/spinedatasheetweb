import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { Typography } from "@equinor/eds-core-react"
import SheetContainer from "./Components/SheetContainer"
import CommentsSideSheet from "./Comments/CommentSideSheet"
import ChangeLogSideSheet from "./ChangeLog/ChangeLogSideSheet"
import { ViewContext } from "../../Context/ViewContext"

const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    `

type props = {
    onClose: () => void
}

const TagSideSheet: React.FC<props> = ({
    onClose,

}) => {
    const { activeTagData, activeSheetTab, setActiveSheetTab } = useContext(ViewContext)
    const placeholder = (
        <Placeholder>
            <Typography variant="body_short">Work in progress...</Typography>
        </Placeholder>
    )

    // if user immediately goes from tagSideSheet to tagPropertySideSheet, the activeTab may be > 2. this resets it to 0 to avoid empty content
    useEffect(() => {
        if (activeSheetTab > 2) {
            setActiveSheetTab(0)
        }
    }, [])

    return (
        <SheetContainer
            key={activeTagData?.tagNo}
            onClose={onClose}
            tabs={[
                { title: "Requirements", content: placeholder },
                { title: "Comments", content: <CommentsSideSheet /> },
                { title: "Changelog", content: <ChangeLogSideSheet /> },
            ]}
        />
    )
}

export default TagSideSheet