import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Instrument/GeneralRowData"
import { generateInstallationConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/InstallationConditionsRowData"
import { generateOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/OperatingConditionsRowData"
import { generateBodyElementSensorRowData } from "../Components/JIP33Table/RowData/Instrument/BodyElementSensorRowData"
import { generateTransmitterRowData } from "../Components/JIP33Table/RowData/Instrument/TransmitterRowData"
import { Icon, Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useCallback, useEffect, useState } from "react"
import { generateAccessoriesRowData } from "../Components/JIP33Table/RowData/Instrument/AccessoriesRowData"
import { generatePerformanceRowData } from "../Components/JIP33Table/RowData/Instrument/PerformanceRowData"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { TagData } from "../Models/TagData"
import { GetTagDataService } from "../api/TagDataService"
import { generateFlowRowData } from "../Components/JIP33Table/RowData/Instrument/FlowRowData"
import { generateTemperatureRowData } from "../Components/JIP33Table/RowData/Instrument/TemperatureRowData"
import { generatePressureRowData } from "../Components/JIP33Table/RowData/Instrument/PressureRowData"
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { ReviewComment } from "../Models/ReviewComment"
import { GetCommentService } from "../api/CommentService"
import ReviewCommentsSideSheet from "../Components/ReviewCommentsSideSheet"
import { comment_chat } from "@equinor/eds-icons"
import { equipmentConditionsRowData } from "../Components/NORSOKTable/RowData/EquipmentConditionsRowData"
import { generalRowData } from "../Components/NORSOKTable/RowData/GeneralRowData"
import { instrumentCharacteristicsRowData } from "../Components/NORSOKTable/RowData/InstrumentCharacteristicsRowData"
import { meterBodyRowData } from "../Components/NORSOKTable/RowData/MeterBodyRowData"
import { operatingConditionsMaximumFlowRowData } from "../Components/NORSOKTable/RowData/OperatingConditionsMaximumFlowRowData"
import { operatingConditionsMinimumFlowRowData } from "../Components/NORSOKTable/RowData/OperatingConditionsMinimumFlowRowData"
import { transmitterRowData } from "../Components/NORSOKTable/RowData/TransmitterRowData"


const TopBar = styled.div`
    padding-top: 0
    border-bottom: 1px solid LightGray
    z-index: 100
    padding-top: 20px
`

const Body = styled.div`
    height: 92%
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const StyledTabPanel = styled(Panel)`
    padding-top: 0px;
    border-top: 1px solid LightGray;
`

function JIP33InstrumentTabView({
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<TagData>()

    const { tagId } = useParams<Record<string, string | undefined>>()
    const [reviewComments, setReviewComments] = useState<ReviewComment[]>([])
    const [open, setOpen] = useState(false)
    const onCloseReviewSideSheet = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    const [currentProperty, setCurrentProperty] = useState<string>("")

    const [activeTab, setActiveTab] = useState(0)

    const getCommentsForTagReview = async (id: string) => {
        const comments: ReviewComment[] = await (await GetCommentService()).getCommentsForTagReview(id)
        setReviewComments(comments)
    }

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)
                    const tagData: TagData = await (await GetTagDataService()).getTagData(tagId)
                    console.log("tagData", tagData)
                    const tagDataReviewId = tagData.review?.id
                    if (tagDataReviewId !== null && tagDataReviewId !== undefined) {
                        await getCommentsForTagReview(tagDataReviewId)
                    }

                    setTag(tagData)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [])

    // useEffect(() => {
    //     if (tagId !== null && tagId !== undefined) {
    //         const intervalId = setInterval(async () => {
    //             const newComments = await (await GetCommentService()).getCommentsForTagReview(tagId)
    //             setReviewComments(newComments)
    //         }, 5000)

    //         return () => clearInterval(intervalId)
    //     }
    // }, [])

    if (error) {
        return <div>Error loading tag</div>
    }

    if (isLoading) {
        return <div>Loading tag...</div>
    }

    if (tag === undefined) {
        return <div>No tag selected</div>
    }

    const sideMenuListJIP33 = [
        "General", "Installation conditions", "Operating conditions",
        "Body/element/sensor", "Transmitter", "Performance", "Accessories",
        "Flow", "Temperature", "Pressure",
    ]

    const customTabList = [
        "Flow", "Temperature", "Pressure",
    ]

    const rowDataListJIP33 = [
        generateGeneralRowData(tag), generateInstallationConditionsRowData(tag),
        generateOperatingConditionsRowData(tag), generateBodyElementSensorRowData(tag),
        generateTransmitterRowData(tag), generatePerformanceRowData(tag),
        generateAccessoriesRowData(tag), generateFlowRowData(tag),
        generateTemperatureRowData(tag), generatePressureRowData(tag),
    ]

    const sideMenuListNORSOK = [
        "General", "Instrument characteristics", "Meter body", "Transmitter",
        "Equipment conditions", "Operating conditions - Minimum flow",
        "Operating conditions - Maximum flow",
    ]

    const rowDataListNORSOK = [
        generalRowData(tag), instrumentCharacteristicsRowData(tag), meterBodyRowData(tag),
        transmitterRowData(tag), equipmentConditionsRowData(tag), operatingConditionsMinimumFlowRowData(tag),
        operatingConditionsMaximumFlowRowData(tag),
    ]

    return (
        <>
            <ReviewCommentsSideSheet
                isOpen={open}
                onClose={onCloseReviewSideSheet}
                reviewComments={reviewComments}
                currentProperty={currentProperty}
                setReviewComments={setReviewComments}
            />
            <Body>
                <TopBar>
                    <Typography variant="h3">
                        <BackButton />
                        {tag.tagNo}
                        <Icon data={comment_chat} onClick={() => {
                            setOpen(true)
                            setCurrentProperty("")
                        }
                        } color="#007079" />
                    </Typography>
                </TopBar>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <List>
                        <Tab>NORSOK</Tab>
                        <Tab>JIP33</Tab>
                    </List>
                    <Panels>
                        <StyledTabPanel>
                            <JIP33WithSideMenu
                                sideMenuList={sideMenuListNORSOK}
                                rowDataList={rowDataListNORSOK}
                                reviewComments={reviewComments}
                                setCurrentProperty={setCurrentProperty}
                                setReviewSideSheetOpen={setOpen}
                            />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33WithSideMenu
                                sideMenuList={sideMenuListJIP33}
                                rowDataList={rowDataListJIP33}
                                customTabList={customTabList}
                                reviewComments={reviewComments}
                                setCurrentProperty={setCurrentProperty}
                                setReviewSideSheetOpen={setOpen}
                            />
                        </StyledTabPanel>
                    </Panels>
                </Tabs>
            </Body>
        </>
    )
}

export default JIP33InstrumentTabView
