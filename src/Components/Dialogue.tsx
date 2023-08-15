import React from "react"
import styled from "styled-components"
import { Typography, Progress, Icon } from "@equinor/eds-core-react"
import { error_filled } from "@equinor/eds-icons"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Message = styled.div`
    margin-top: 20px;
`

interface Props {
    message: string
    type: "loading" | "error"
}

const Dialogue = ({ message, type }: Props) => (
    <Wrapper>
        {type === "loading" && <Progress.Circular size={40} color="primary" />}
        {type === "error" && <Icon data={error_filled} size={40} color="#ff1243" />}
        <Message>
            <Typography variant="h2">{message}</Typography>
        </Message>
    </Wrapper>
    )

export default Dialogue