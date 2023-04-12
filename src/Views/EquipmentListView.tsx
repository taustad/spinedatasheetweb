import { Progress, Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { GetDatasheetService } from "../api/DatasheetService"
import TotalReviewStatus from "../Components/Charts/TotalReviewStatus"
import TotalTagRequirement from "../Components/Charts/TotalTagRequirement"
import EquipmentListTable from "../Components/EquipmentListTable"
import { Datasheet } from "../Models/Datasheet"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
    padding: 20px;
`

const WrapperColumn = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: row;
    padding: 20px;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const StyledTabPanel = styled(Panel)`
    padding-top: 0px;
    border-top: 1px solid LightGray;
`

function EquipmentListView() {
    const [activeTab, setActiveTab] = useState(0)

    const [tags, setTags] = useState<Datasheet[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const { projectId } = useParams<Record<string, string | undefined>>()

    const currentProject = useCurrentContext()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (currentProject !== null && currentProject.externalId !== null) {
                try {
                    setIsLoading(true)
                    const datasheets: Datasheet[] = await (await GetDatasheetService())
                        .getDatasheets()
                    setTags(datasheets)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [currentProject, projectId])

    if (currentProject === null && (projectId === null || projectId === undefined)) {
        return <div>No project selected</div>
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
            <WrapperColumn>
                <TotalTagRequirement></TotalTagRequirement>
                <TotalReviewStatus></TotalReviewStatus>
            </WrapperColumn>
            <Tabs activeTab={activeTab} onChange={setActiveTab}>
                <List>
                    <Tab>Tag info</Tab>
                    <Tab>Tag comparison</Tab>
                </List>
                <Panels>
                    <StyledTabPanel>
                        <EquipmentListTable tags={tags} />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <TagComparisonTable tags={tags} />
                    </StyledTabPanel>
                </Panels>
            </Tabs >
        </Wrapper>
    )
}
export default EquipmentListView
