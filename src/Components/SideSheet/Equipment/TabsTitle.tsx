import React, { FC } from "react"
import styled from "styled-components"
import { Typography } from "@equinor/eds-core-react"

const Title = styled(Typography)`
    margin-bottom: 15px !important;
`

const TabsTitle: FC = ({ children }) => (
    <Title variant="h4">{children}</Title>
)

export default TabsTitle
