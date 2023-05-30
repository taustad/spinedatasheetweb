import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Instrument/GeneralRowData"
import { generateInstallationConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/InstallationConditionsRowData"
import { generateOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Instrument/OperatingConditionsRowData"
import { generateBodyElementSensorRowData } from "../Components/JIP33Table/RowData/Instrument/BodyElementSensorRowData"
import { generateTransmitterRowData } from "../Components/JIP33Table/RowData/Instrument/TransmitterRowData"
import { Button, Input, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useEffect, useState } from "react"
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
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { GetCommentService } from "../api/CommentService"
import { ReviewComment } from "../Models/ReviewComment"

const TopBar = styled.div`
    padding-top: 0;
    border-bottom: 1px solid LightGray;
    z-index: 100;
    padding-top: 20px;
`

const Body = styled.div`
    height: 92%;
`

function JIP33InstrumentTabView({
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<Datasheet>()

    const { tagId } = useParams<Record<string, string | undefined>>()
    const [reviewComments, setReviewComments] = useState<ReviewComment[]>([])
    const [newReviewComment, setNewReviewComment] = useState<ReviewComment>()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)
                    await getCommentsForTag(tagId)
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

    const getCommentsForTag = async (tagId: string) => {
        const comments: ReviewComment[] = await (await GetCommentService()).getCommentsForTag(tagId)
        setReviewComments(comments)
    }

    useEffect(() => {
        if (tagId !== null && tagId !== undefined) {
            const intervalId = setInterval(async () => {
                const newComments = await (await GetCommentService()).getCommentsForTag(tagId);
                setReviewComments(newComments);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, []);

    if (error) {
        return <div>Error loading tag</div>
    }

    if (isLoading) {
        return <div>Loading tag...</div>
    }

    if (tag === undefined) {
        return <div>No tag selected</div>
    }

    const sideMenuList = [
        "General", "Installation conditions", "Operating conditions",
        "Body/element/sensor", "Transmitter", "Performance", "Accessories",
        "Flow", "Temperature", "Pressure",
    ]

    const customTabList = [
        "Flow", "Temperature", "Pressure",
    ]

    const rowDataList = [
        generateGeneralRowData(tag), generateInstallationConditionsRowData(tag),
        generateOperatingConditionsRowData(tag), generateBodyElementSensorRowData(tag),
        generateTransmitterRowData(tag), generatePerformanceRowData(tag),
        generateAccessoriesRowData(tag), generateFlowRowData(tag),
        generateTemperatureRowData(tag), generatePressureRowData(tag),
    ]

    const handleSubmit = async () => {
        const comment = { ...newReviewComment }
        comment.tagDataId = tagId
        comment.commentLevel = 0
        comment.property = "codeRequirement"
        await (await GetCommentService()).createComment(comment)
    }

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const comment = { ...newReviewComment }
        comment.text = event.target.value
        setNewReviewComment(comment)
    }

    return (
        <Body>
            <p>Comments</p>
            <Input type="text" onChange={handleCommentChange} ></Input>
            <Button onClick={handleSubmit}>Submit</Button>
            <p>Comments:</p>
            {reviewComments.map((comment) => {
                return (
                    <div>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
            <TopBar>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
            </TopBar>
            <JIP33WithSideMenu
                sideMenuList={sideMenuList}
                rowDataList={rowDataList}
                customTabList={customTabList}
                reviewComments={reviewComments}
            />
        </Body>
    )
}

export default JIP33InstrumentTabView
