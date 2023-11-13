import React, { FC } from "react"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"

const Title = styled(Typography)`
    margin-top: 15px !important;
`

const CardContainer = styled.div`
    padding: 15px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`

type Props = {
    children?: React.ReactNode
    title?: string
}

const Card: FC<Props> = ({ children, title }) => (
    <CardContainer>
        {title && (<Title variant="h5">{title}</Title>)}
        {children}
    </CardContainer>
)

export default Card
