import React, { FC, useState, ReactElement } from "react"
import styled from "styled-components"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt } from "@equinor/eds-icons"
import LocalNavigation from "../Components/LocalNavigation"
import TabsTitle from "../Components/TabsTitle"
import Live from "./Tabs/Live"
import Historical from "./Tabs/Historical"
import Simulation from "./Tabs/Simulation"
import OperatingConditions from "./Tabs/OperatingConditions"

const Container = styled.div`
    padding: 15px;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ButtonRow = styled.div`
    margin-bottom: 8px;
`

const ActivitySideSheet: FC = () => {
    const [activeTab, setActiveTab] = useState(0)
    const Navigationbuttons = ["Live", "Historical", "Simulation", "Operating conditions"]
        const tabContent: { [index: number]: ReactElement } = {
        0: <Live />,
        1: <Historical />,
        2: <Simulation />,
        3: <OperatingConditions />,
    }
    return (
        <Container>
            <Header>
                <TabsTitle>Activity</TabsTitle>
                <ButtonRow>
                    <Tooltip title="Search">
                        <Button variant="ghost_icon">
                            <Icon data={search} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Filter">
                        <Button variant="ghost_icon">
                            <Icon data={filter_alt} />
                        </Button>
                    </Tooltip>
                </ButtonRow>
            </Header>
            <LocalNavigation buttons={Navigationbuttons} activeTab={activeTab} setActiveTab={setActiveTab} />
            {tabContent[activeTab] || tabContent[0]}
        </Container>
    )
}

export default ActivitySideSheet