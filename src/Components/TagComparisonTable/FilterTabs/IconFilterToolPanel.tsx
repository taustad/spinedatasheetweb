import React from "react"
import styled from "styled-components"
import {
 IToolPanel,
} from "@ag-grid-community/core"

const Container = styled.div`
    padding: 1opx;
`

function IconFilterToolPanel({ }: IToolPanel) {
    return (
        <Container>
            <p>IconFilterToolPanel</p>
        </Container>
    )
}

export default IconFilterToolPanel
