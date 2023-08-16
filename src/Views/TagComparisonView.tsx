import { Tabs, Typography } from "@equinor/eds-core-react"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BackButton } from "../Components/BackButton"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"
import { InstrumentTagData } from "../Models/InstrumentTagData"
import { GetTagDataService } from "../api/TagDataService"
import Dialogue from "../Components/Dialogue"

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

function TagComparisonView({}) {
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tags, setTags] = useState<InstrumentTagData[]>([])

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tags === undefined || tags.length === 0) {
                try {
                    setIsLoading(true)
                    const datasheets: InstrumentTagData[] = await (
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
    }, [])

    if (error) {
        return <Dialogue type="error" message="Error loading tag" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tag..." />
    }

    if (tags === undefined || tags.length === 0) {
        return <Dialogue type="error" message="No tag selected" />
    }

    return (
        <WrapperTabs>
            <Typography variant="h3">
                <BackButton />
                Comparing tags:
                {" "}
                {tags.map((tag) => tag.tagNo).join(", ")}
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
            </Tabs>
        </WrapperTabs>
    )
}

export default TagComparisonView
