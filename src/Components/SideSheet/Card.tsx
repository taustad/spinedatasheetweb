import React, { FC } from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    padding: 15px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin-bottom: 15px;
`

type Props = {
    children?: React.ReactNode
}

const Card: FC<Props> = ({ children }) => <CardContainer>{children}</CardContainer>

export default Card
