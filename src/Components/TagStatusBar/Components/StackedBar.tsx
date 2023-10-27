import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Typography } from "@equinor/eds-core-react"
import ProgressBar from "./ProgressBar"

interface StackedBarProps {
    data: {
        title: string
        percentage: number
        count: number
        barColor: string
    }[]
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;

    p {
        margin-top: 5px;
        opacity: 0.5

    }
`

const StackedBarContainer = styled.div`
    width: 200px;
    border-radius: 25px;
    height: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    background-color: rgb(235 235 235);
    overflow: hidden;
    margin-top: 5px;
`

const StackedBar: React.FC<StackedBarProps> = ({ data }) => {
    const [totalPercentage, setTotalPercentage] = useState<number>(0)

    // find percentage of all data items except the one with the title Not reviewed
    useEffect(() => {
        setTotalPercentage(
            data
                .filter((item) => item.title !== "Not reviewed")
                .reduce((acc, item) => acc + item.percentage, 0),
        )
    }, [data, totalPercentage])

    if (totalPercentage > 100) return <div>Error: input total % is greater than 100</div>

    return (
        <Wrapper>
            <Typography variant="h4">Tag review status</Typography>

            <StackedBarContainer>
                {data.map((item) => (
                    <ProgressBar
                        key={item.title}
                        percentage={item.percentage}
                        barColor={item.barColor}
                        title={item.title}
                        count={item.count}
                    />
                ))}
            </StackedBarContainer>
            <Typography variant="body_short" style={{ fontSize: "small" }}>
                Reviewed:
                {" "}
                {totalPercentage}
                %
            </Typography>

        </Wrapper>

    )
}

export default StackedBar
