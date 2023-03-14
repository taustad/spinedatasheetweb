import { generalRowData } from "../Components/JIP33Table/RowData/GeneralRowData"
import { installationConditionsRowData } from "../Components/JIP33Table/RowData/InstallationConditionsRowData"
import { operatingConditionsRowData } from "../Components/JIP33Table/RowData/OperatingConditionsRowData"
import { bodyElementSensorRowData } from "../Components/JIP33Table/RowData/BodyElementSensorRowData"
import { transmitterRowData } from "../Components/JIP33Table/RowData/TransmitterRowData"
import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useState } from "react"
import JIP33Table from "../Components/JIP33Table/JIP33Table"

const WrapperTabs = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
    padding: 20px;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const StyledTabPanel = styled(Panel)`
    padding-top: 0px;
    border-top: 1px solid LightGray;
`

function JIP33TabView({
}) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <WrapperTabs>
                <Typography variant="h3">JIP33 table</Typography>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <List>
                        <Tab>General</Tab>
                        <Tab>Installation conditions</Tab>
                        <Tab>Operating conditions</Tab>
                        <Tab>Body/element/sensor</Tab>
                        <Tab>Transmitter</Tab>
                    </List>
                    <Panels>
                        <StyledTabPanel>
                            <JIP33Table rowData={generalRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={installationConditionsRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={operatingConditionsRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={bodyElementSensorRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={transmitterRowData} />
                        </StyledTabPanel>
                    </Panels>
                </Tabs >
            </WrapperTabs >
        </>
    )
}

export default JIP33TabView