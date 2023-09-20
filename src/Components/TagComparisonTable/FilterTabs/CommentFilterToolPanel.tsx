import React from "react"
import styled from "styled-components"
import {
 IToolPanel,
} from "@ag-grid-community/core"

const Container = styled.div`
    padding: 10px;
`

function CommentFilterToolPanel({ }: IToolPanel) {
    return (
        <Container>
            <p>CommentFilterToolPanel</p>
        </Container>
    )
}

export default CommentFilterToolPanel
