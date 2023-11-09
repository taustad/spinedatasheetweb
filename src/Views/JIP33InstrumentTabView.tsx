import {
    Icon, Tabs, Typography, Button,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import React, {
    useCallback, useContext, useEffect, useState,
} from "react"
import { useParams } from "react-router-dom"
import { comment_chat, open_side_sheet } from "@equinor/eds-icons"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Instrument/GeneralRowData"
import { generateInstallationConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/InstallationConditionsRowData"
import { generateOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/OperatingConditionsRowData"
import { generateBodyElementSensorRowData } from "../Components/JIP33Table/RowData/Instrument/BodyElementSensorRowData"
import { generateTransmitterRowData } from "../Components/JIP33Table/RowData/Instrument/TransmitterRowData"
import { generateAccessoriesRowData } from "../Components/JIP33Table/RowData/Instrument/AccessoriesRowData"
import { generatePerformanceRowData } from "../Components/JIP33Table/RowData/Instrument/PerformanceRowData"
import { BackButton } from "../Components/Buttons/BackButton"
import { GetTagDataService } from "../api/TagDataService"
import { generateFlowRowData } from "../Components/JIP33Table/RowData/Instrument/FlowRowData"
import { generateTemperatureRowData } from "../Components/JIP33Table/RowData/Instrument/TemperatureRowData"
import { generatePressureRowData } from "../Components/JIP33Table/RowData/Instrument/PressureRowData"
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { GetConversationService } from "../api/ConversationService"
import { equipmentConditionsRowData } from "../Components/NORSOKTable/RowData/EquipmentConditionsRowData"
import { generalRowData } from "../Components/NORSOKTable/RowData/GeneralRowData"
import { instrumentCharacteristicsRowData } from "../Components/NORSOKTable/RowData/InstrumentCharacteristicsRowData"
import { meterBodyRowData } from "../Components/NORSOKTable/RowData/MeterBodyRowData"
import { operatingConditionsMaximumFlowRowData } from "../Components/NORSOKTable/RowData/OperatingConditionsMaximumFlowRowData"
import { operatingConditionsMinimumFlowRowData } from "../Components/NORSOKTable/RowData/OperatingConditionsMinimumFlowRowData"
import { transmitterRowData } from "../Components/NORSOKTable/RowData/TransmitterRowData"
import Dialogue from "../Components/Dialogue"
import TagSideSheet from "../Components/SideSheet/TagSideSheet"
import { ViewContext } from "../Context/ViewContext"
import { generateTR3111GeneralRowData } from "../Components/JIP33Table/TR3111GeneralRowData"

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const TopBar = styled.div`
    z-index: 100;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const View = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
`

const HeaderList = styled(List)`
    margin: 0 15px;
`

const TableView = styled.div``

const StyledTabPanel = styled(Panel).attrs<{ $sheetWidth: number }>((props) => ({
    style: {
        width: `calc(100vw - ${props.$sheetWidth}px)`,
    },
}))`
    padding: 0px;
    border-top: 1px solid LightGray;
    height: calc(100vh - 225px);
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
`

const SheetIcon = styled(Icon)`
    transform: rotate(180deg);
`

const GoBack = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    margin-left: 5px;
`

function JIP33InstrumentTabView({ }) {
    const { tagId } = useParams<Record<string, string | undefined>>()
    const currentContext = useCurrentContext()
    const {
            activeTagData,
            setActiveTagData,
            activeSheetTab,
            setActiveSheetTab,
            setConversations,
            sideSheetOpen,
            setSideSheetOpen,
            sheetWidth,
        } = useContext(ViewContext)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)

    const onCloseReviewSideSheet = useCallback(() => {
        setSideSheetOpen(false)
    }, [setSideSheetOpen])

    const onOpenReviewSideSheet = useCallback((activatedTab: React.SetStateAction<number>) => {
        setActiveSheetTab(activatedTab)
        setSideSheetOpen(true)
    }, [setSideSheetOpen])

    const getConversationsForTagReview = async (tagNo: string) => {
        if (!currentContext.currentContext?.externalId) { return }
        const newConversations = await (
            await GetConversationService()
        ).getConversations(currentContext.currentContext.externalId, tagNo, true)
        setConversations(newConversations)
    }

    // Get tag data and conversations for with current tagId
    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)

                    const tagData = await (
                        await GetTagDataService()
                    ).getTagData(tagId)
                    setActiveTagData(tagData)

                    await getConversationsForTagReview(tagId)

                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [tagId])

    if (error) {
        return <Dialogue type="error" message="Error loading tag" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tag..." />
    }

    if (activeTagData === undefined) {
        return <Dialogue type="error" message="No tag selected" />
    }

    const sideMenuListJIP33 = [
        "General",
        "Installation conditions",
        "Operating conditions",
        "Body/element/sensor",
        "Transmitter",
        "Performance",
        "Accessories",
        "Flow",
        "Temperature",
        "Pressure",
    ]

    const customTabList = ["Flow", "Temperature", "Pressure"]

    const rowDataListJIP33 = [
        generateGeneralRowData(activeTagData).concat(generateTR3111GeneralRowData(activeTagData)),
        generateInstallationConditionsRowData(activeTagData),
        generateOperatingConditionsRowData(activeTagData),
        generateBodyElementSensorRowData(activeTagData),
        generateTransmitterRowData(activeTagData),
        generatePerformanceRowData(activeTagData),
        generateAccessoriesRowData(activeTagData),
        generateFlowRowData(activeTagData),
        generateTemperatureRowData(activeTagData),
        generatePressureRowData(activeTagData),
    ]

    const sideMenuListNORSOK = [
        "General",
        "Instrument characteristics",
        "Meter body",
        "Transmitter",
        "Equipment conditions",
        "Operating conditions - Maximum flow",
    ]

    const rowDataListNORSOK = [
        generalRowData(activeTagData).concat(generateTR3111GeneralRowData(activeTagData)),
        instrumentCharacteristicsRowData(activeTagData),
        meterBodyRowData(activeTagData),
        transmitterRowData(activeTagData),
        equipmentConditionsRowData(activeTagData),
        operatingConditionsMinimumFlowRowData(activeTagData),
        operatingConditionsMaximumFlowRowData(activeTagData),
    ]

    return (
        <View id="View">
            <TableView>
                <TopBar>
                    <GoBack>
                        <BackButton />
                        <Typography variant="h3">
                            {activeTagData.tagNo}
                        </Typography>
                        <Icon
                            data={comment_chat}
                            onClick={() => onOpenReviewSideSheet(4)}
                            color="#007079"
                        />
                    </GoBack>

                    {!sideSheetOpen && (
                        <Button variant="ghost_icon" onClick={() => onOpenReviewSideSheet(activeSheetTab)}>
                            <SheetIcon size={24} data={open_side_sheet} />
                        </Button>
                    )}
                </TopBar>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <HeaderList>
                        <Tab>NORSOK</Tab>
                        <Tab>JIP33</Tab>
                    </HeaderList>
                    <Content>
                        <Panels>
                            <StyledTabPanel $sheetWidth={sheetWidth}>
                                <JIP33WithSideMenu
                                    sideMenuList={sideMenuListNORSOK}
                                    rowDataList={rowDataListNORSOK}
                                />
                            </StyledTabPanel>
                            <StyledTabPanel $sheetWidth={sheetWidth}>
                                <JIP33WithSideMenu
                                    sideMenuList={sideMenuListJIP33}
                                    rowDataList={rowDataListJIP33}
                                    customTabList={customTabList}
                                />
                            </StyledTabPanel>
                        </Panels>
                    </Content>
                </Tabs>
            </TableView>
            <TagSideSheet
                onClose={onCloseReviewSideSheet}
            />
        </View>
    )
}

export default JIP33InstrumentTabView
