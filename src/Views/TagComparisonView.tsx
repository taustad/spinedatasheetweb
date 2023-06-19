import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { BackButton } from "../Components/BackButton"
import { TagData } from "../Models/TagData"
import { GetDatasheetService } from "../api/DatasheetService"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"

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

function TagComparisonView({
}) {
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tags, setTags] = useState<TagData[]>([])


    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tags === undefined || tags.length === 0) {
                try {
                    setIsLoading(true)
                    const datasheets: TagData[] = await (await GetDatasheetService())
                        .getDatasheets()
                    setTags(datasheets)
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

    if (tags === undefined || tags.length === 0) {
        return <div>No tags found</div>
    }

    return (
        <>
            <WrapperTabs>
                <Typography variant="h3">
                    <BackButton />
                    Comparing tags: {tags.map(tag => tag.tagNo).join(", ")}
                </Typography>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                    <List>
                        <Tab>General</Tab>
                    </List>
                    <Panels>
                        <StyledTabPanel>
                            <TagComparisonTable tags={tags} />
                        </StyledTabPanel>
                    </Panels>
                </Tabs >
            </WrapperTabs >
        </>
    )
}

export default TagComparisonView