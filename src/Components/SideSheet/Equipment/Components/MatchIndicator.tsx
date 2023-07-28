import React, { FC } from "react"
import styled from "styled-components"
import { CircularProgress, Typography } from "@equinor/eds-core-react"

const Container = styled.div`
    position: relative;
    width: 150px;
    height: 150px;

    & > svg {
        width: 100%;
        height: 100%;
`

const MatchText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > * {
        color: #007079;
`

const MatchCircle = styled(CircularProgress)`
`

interface MatchIndicatorProps {
    percentage: number
}

const MatchIndicator: FC<MatchIndicatorProps> = ({ percentage }) => (
    <Container>
        <MatchCircle variant="determinate" value={percentage} />
        <MatchText>
            <Typography variant="h3">
                <strong>
                    {percentage}
                    %
                </strong>

            </Typography>
            <Typography variant="body_short">
                Match
            </Typography>
        </MatchText>
    </Container>
)

export default MatchIndicator