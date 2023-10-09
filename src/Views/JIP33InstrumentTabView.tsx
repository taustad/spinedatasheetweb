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
import { Conversation } from "../Models/Conversation"
import { generateTR3111GeneralRowData } from "../Components/JIP33Table/TR3111GeneralRowData"

const TopBar = styled.div`
    z-index: 100;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const View = styled.div`
    display: flex;
    flex-direction: row;
`

const TableView = styled.div``

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

interface StyledTabPanelProps {
    sheetWidth: number
}

const StyledTabPanel = styled(Panel).attrs<{ sheetWidth: number }>((props) => ({
    style: {
        width: `calc(100vw - ${props.sheetWidth}px)`,
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

function JIP33InstrumentTabView({ }) {
    const { tagId } = useParams<Record<string, string | undefined>>()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    const [currentProperty, setCurrentProperty] = useState<string>("")
    const [activeTab, setActiveTab] = useState(0)
    const [sheetWidth, setSheetWidth] = useState(0)

    const currentContext = useCurrentContext()

    const {
        activeTagData, setActiveTagData, activeSheetTab, setActiveSheetTab, setConversations,
    } = useContext(ViewContext)

    const onCloseReviewSideSheet = useCallback(() => {
        setOpen(false)
        setSheetWidth(0)
    }, [setOpen])

    const onOpenReviewSideSheet = useCallback((activatedTab: React.SetStateAction<number>) => {
        setActiveSheetTab(activatedTab)
        setOpen(true)
        setSheetWidth(620)
        setCurrentProperty("")
    }, [setOpen])

    const getConversationsForTagReview = async (id: string) => {
        if (!currentContext.currentContext?.externalId || !activeTagData?.tagNo) { return }
        const newConversations = await (
            await GetConversationService()
        ).getConversationsForTag(currentContext.currentContext.externalId, activeTagData.tagNo, true)
        setConversations(newConversations)
    }

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

                    const tagDataReviewId = tagData?.review?.id
                    if (
                        tagDataReviewId !== null
                        && tagDataReviewId !== undefined
                    ) {
                        await getConversationsForTagReview(tagDataReviewId)
                    }

                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [])

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
                    <Typography variant="h3">
                        <BackButton />
                        {activeTagData.tagNo}
                        <Icon
                            data={comment_chat}
                            onClick={() => onOpenReviewSideSheet(4)}
                            color="#007079"
                        />
                    </Typography>
                    {!open && (
                        <Button variant="ghost_icon" onClick={() => onOpenReviewSideSheet(activeSheetTab)}>
                            <SheetIcon size={24} data={open_side_sheet} />
                        </Button>
                    )}
                </TopBar>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <List style={{ border: "1px solid white", position: "relative", bottom: "-0.5px" }}>
                        <Tab>NORSOK</Tab>
                        <Tab>JIP33</Tab>
                    </List>
                    <Content>
                        <Panels>
                            <StyledTabPanel sheetWidth={sheetWidth}>
                                <JIP33WithSideMenu
                                    sideMenuList={sideMenuListNORSOK}
                                    rowDataList={rowDataListNORSOK}
                                    setCurrentProperty={setCurrentProperty}
                                    setReviewSideSheetOpen={setOpen}
                                    setWidth={setSheetWidth}
                                    width={sheetWidth}
                                />
                            </StyledTabPanel>
                            <StyledTabPanel sheetWidth={sheetWidth}>
                                <JIP33WithSideMenu
                                    sideMenuList={sideMenuListJIP33}
                                    rowDataList={rowDataListJIP33}
                                    customTabList={customTabList}
                                    setCurrentProperty={setCurrentProperty}
                                    setReviewSideSheetOpen={setOpen}
                                    setWidth={setSheetWidth}
                                    width={sheetWidth}
                                />
                            </StyledTabPanel>
                        </Panels>
                    </Content>
                </Tabs>
            </TableView>
            <TagSideSheet
                onClose={onCloseReviewSideSheet}
                isOpen={open}
                currentProperty={currentProperty}
                width={sheetWidth}
                setWidth={setSheetWidth}
                activeTagData={activeTagData}
            />
        </View>
    )
}

export default JIP33InstrumentTabView
