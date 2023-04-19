import React, { FC } from "react"
import styled from "styled-components"
import StackedBar from "./StackedBar"

const WrapperColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
const Header: FC = () => {
    return (
        <WrapperColumn>
            <StackedBar
                data={[
                    {
                        title: "Reviewed",
                        percentage: 23,
                        count: 46,
                        barColor: "#007079",
                    },
                    {
                        title: "Reviewed w/com.",
                        percentage: 34,
                        count: 68,
                        barColor: "#73B1B5",
                    },
                    {
                        title: "Resubmit",
                        percentage: 11,
                        count: 22,
                        barColor: "#A8CED1",
                    },
                    {
                        title: "Not reviewed",
                        percentage: 32,
                        count: 64,
                        barColor: "#DCDCDC",
                    },
                ]}
            />
        </WrapperColumn>
    )
}

export default Header
