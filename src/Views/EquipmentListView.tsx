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
import { GetReviewService } from "../api/ReviewService"

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
    const [tags, setTags] = useState<TagData[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false)
    const [tagInReview, setTagInReview] = useState<string | undefined>(undefined)
    const [revisionInReview, setRevisionInReview] = useState<string | undefined>(undefined)

    const { projectId } = useParams<Record<string, string | undefined>>()
    const currentProject = useCurrentContext();

    const navigate = useNavigate()

    useEffect(() => {
        console.log("reviewModalOpen in useEffect", reviewModalOpen)
        console.log("tagInReview in useEffect", tagInReview)
        console.log("revisionInReview in useEffect", revisionInReview)
    }, [reviewModalOpen, tagInReview, revisionInReview])

    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    useEffect(() => {
        (async () => {
            await (await GetReviewService()).getReviews()

            if (externalId !== undefined) {
                setError(false)
                setIsLoading(false)
                try {
                    setIsLoading(true)
                    const datasheets: TagData[] = await (
                        await GetTagDataService()
                    ).getAllTagData()
                    setTags(datasheets)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [externalId])

    if (currentProject.currentContext === null || currentProject.currentContext === undefined) {
        return <div>No project selected</div>
    }

    if (currentProject?.currentContext !== null && currentProject.currentContext !== undefined
        && (projectId === null || projectId === undefined)) {
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

    if (tags.length === 0) {
        return <div>No tags found for this project</div>
    }

    return (
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
                            tags={tags}
                            setReviewModalOpen={setReviewModalOpen}
                            setTagInReview={setTagInReview}
                            setRevisionInReview={setRevisionInReview}
                        />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <TagComparisonTable tags={tags} />
                    </StyledTabPanel>
                </Panels>
            </Tabs>
            {reviewModalOpen && <EquipmentListReview
                tags={tags}
                setReviewModalOpen={setReviewModalOpen}
                setTagInReview={setTagInReview}
                tagInReview={tagInReview}
                setRevisionInReview={setRevisionInReview}
                revisionInReview={revisionInReview}
            />}
        </Wrapper>
    )
}
export default EquipmentListView
