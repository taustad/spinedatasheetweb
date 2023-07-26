import React, { FC } from "react"
import styled from "styled-components"
import { ViewContext } from "../../../Context/ViewContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
`

const ChangeLogSideSheet: FC = () => {
    const { activeTagData } = React.useContext(ViewContext)

    if (!activeTagData) {
        return null
    }

    return (
        <Container>
            <h1>Change Log</h1>
            <p>Change log is not implemented yet.</p>
        </Container>
    )
}

export default ChangeLogSideSheet
