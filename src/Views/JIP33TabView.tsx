import { generalRowData } from "../Components/JIP33Table/RowData/GeneralRowData"
import { installationConditionsRowData } from "../Components/JIP33Table/RowData/InstallationConditionsRowData"
import { operatingConditionsRowData } from "../Components/JIP33Table/RowData/OperatingConditionsRowData"
import { bodyElementSensorRowData } from "../Components/JIP33Table/RowData/BodyElementSensorRowData"
import { transmitterRowData } from "../Components/JIP33Table/RowData/TransmitterRowData"
import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import JIP33Table from "../Components/JIP33Table/JIP33Table"
import { accessoriesRowData } from "../Components/JIP33Table/RowData/AccessoriesRowData"
import { performanceRowData } from "../Components/JIP33Table/RowData/PerformanceRowData"
import JIP33LegendModal from "../Components/JIP33Table/JIP33LegendModal"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { Datasheet } from "../Models/Datasheet"
import { GetDatasheetService } from "../api/DatasheetService"

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
                    console.log("Datasheet retrieved from server: ", datasheets)
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
                        <StyledTabPanel>
                            <JIP33Table rowData={performanceRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={accessoriesRowData} />
                        </StyledTabPanel>
                    </Panels>
                </Tabs >
                <JIP33LegendModal />
            </WrapperTabs >
        </>
    )
}

export default JIP33TabView