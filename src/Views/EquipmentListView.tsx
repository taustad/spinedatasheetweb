import { Progress, Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { GetTagDataService } from "../api/TagDataService"
import EquipmentListTable from "../Components/EquipmentListView/EquipmentListTable"
import { TagData } from "../Models/TagData"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"
import Header from "../Components/Header/Header"
import { useNavigate, useParams } from "react-router-dom"
import EquipmentListReview from "../Components/EquipmentListView/EquipmentListReview"
import { GetTagDataReviewService } from "../api/TagDataReviewService"
import { useAppContext } from "../Context/AppContext"
import { GetProjectService } from "../api/ProjectService"
import { ViewContextProvider } from "../Context/ViewContext"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs
const StyledTabPanel = styled(Panel)`
    padding-top: 0;
    border-top: 1px solid LightGray;
`

function EquipmentListView() {
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false)
    const [tagInReview, setTagInReview] = useState<string | undefined>(undefined)
    const [revisionInReview, setRevisionInReview] = useState<string | undefined>(undefined)

    const { tagData, setTagData } = useAppContext()

    const { projectId } = useParams<Record<string, string | undefined>>()
    const currentProject = useCurrentContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    useEffect(() => {
        (async () => {
            if (externalId !== undefined) {
                setError(false)
                setIsLoading(false)
                try {
                    setIsLoading(true)
                    const datasheets: TagData[] = await (
                        await GetTagDataService()
                    ).getAllTagData()
                    if (setTagData !== undefined) {
                        setTagData(datasheets)
                    }
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [externalId])

    if (
        currentProject.currentContext === null ||
        currentProject.currentContext === undefined
    ) {
        return <div>No project selected</div>
    }

    if (
        currentProject?.currentContext !== null &&
        currentProject.currentContext !== undefined &&
        (projectId === null || projectId === undefined)
    ) {
        navigate(`/${currentProject.currentContext.id}`)
    }

    if (error) {
        return <div>Error loading tags</div>
    }

    if (isLoading) {
        return (
            <>
                <Progress.Circular size={16} color="primary" />
                <div>Loading tags...</div>
            </>
        )
    }

    if (tagData === undefined || tagData.length === 0) {
        return <div>No tags found for this project</div>
    }

    return (
        <>
            <ViewContextProvider>
                <Wrapper>
                    <Header />
                    <Tabs
                        style={{ width: "100%" }}
                        activeTab={activeTab}
                        onChange={setActiveTab}
                    >
                        <List>
                            <Tab>Tag info</Tab>
                            <Tab>Tag comparison</Tab>
                        </List>
                        <Panels>
                            <StyledTabPanel>
                                <EquipmentListTable
                                    tags={tagData}
                                    setReviewModalOpen={setReviewModalOpen}
                                    setTagInReview={setTagInReview}
                                    setRevisionInReview={setRevisionInReview}
                                />
                            </StyledTabPanel>
                            <StyledTabPanel>
                                <TagComparisonTable tags={tagData} />
                            </StyledTabPanel>
                        </Panels>
                    </Tabs>
                    {reviewModalOpen && <EquipmentListReview
                        tags={tagData}
                        setReviewModalOpen={setReviewModalOpen}
                        setTagInReview={setTagInReview}
                        tagInReview={tagInReview}
                        setRevisionInReview={setRevisionInReview}
                        revisionInReview={revisionInReview}
                    />}
                </Wrapper>
            </ViewContextProvider>
        </>
    )
}
export default EquipmentListView
