import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Instrument/GeneralRowData"
import { generateInstallationConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/InstallationConditionsRowData"
import { generateOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/OperatingConditionsRowData"
import { generateBodyElementSensorRowData } from "../Components/JIP33Table/RowData/Instrument/BodyElementSensorRowData"
import { generateTransmitterRowData } from "../Components/JIP33Table/RowData/Instrument/TransmitterRowData"
import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import JIP33Table from "../Components/JIP33Table/JIP33Table"
import { generateAccessoriesRowData } from "../Components/JIP33Table/RowData/Instrument/AccessoriesRowData"
import { generatePerformanceRowData } from "../Components/JIP33Table/RowData/Instrument/PerformanceRowData"
// import JIP33LegendModal from "../Components/JIP33Table/JIP33LegendModal"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { Datasheet } from "../Models/Datasheet"
import { GetDatasheetService } from "../api/DatasheetService"
import { generateFlowRowData } from "../Components/JIP33Table/RowData/Instrument/FlowRowData"
import { generateTemperatureRowData } from "../Components/JIP33Table/RowData/Instrument/TemperatureRowData"
import { generatePressureRowData } from "../Components/JIP33Table/RowData/Instrument/PressureRowData"

const WrapperTabs = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const StyledTabPanel = styled(Panel)`
    padding-top: 0;
    border-top: 1px solid LightGray;
`

const StyledTab = styled(Tab)`
    background-color: #f8f8f8;
    border: 1px solid gray;
`

function JIP33TabView({
}) {
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<Datasheet>()

    const { tagId } = useParams<Record<string, string | undefined>>()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)
                    const datasheets: Datasheet = await (await GetDatasheetService())
                        .getDatasheet(tagId)
                    setTag(datasheets)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [])


    if (error) {
        return <div>Error loading tag</div>
    }

    if (isLoading) {
        return <div>Loading tag...</div>
    }

    if (tag === undefined) {
        return <div>No tag selected</div>
    }

    return (
        <>
            <WrapperTabs>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <List>
                        <Tab>General</Tab>
                        <Tab>Installation conditions</Tab>
                        <Tab>Operating conditions</Tab>
                        <Tab>Body/element/sensor</Tab>
                        <Tab>Transmitter</Tab>
                        <Tab>Performance</Tab>
                        <Tab>Accessories</Tab>
                        <StyledTab>Flow</StyledTab>
                        <StyledTab>Temperature</StyledTab>
                        <StyledTab>Pressure</StyledTab>
                    </List>
                    <Panels>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateGeneralRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateInstallationConditionsRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateOperatingConditionsRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateBodyElementSensorRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateTransmitterRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generatePerformanceRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateAccessoriesRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateFlowRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generateTemperatureRowData(tag)} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generatePressureRowData(tag)} />
                        </StyledTabPanel>
                    </Panels>
                </Tabs >
                {/*<JIP33LegendModal />*/}
            </WrapperTabs >
        </>
    )
}

export default JIP33TabView
