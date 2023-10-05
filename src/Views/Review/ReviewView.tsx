import React, { useEffect, useState } from "react"
import { Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { useParams } from "react-router-dom"
import SendForReview from "./SendForReview"
import { TagData } from "../../Models/TagData"
import { GetTagDataService } from "../../api/TagDataService"
import MyReviews from "./MyReviews"

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

function ReviewView() {
    const [activeTab, setActiveTab] = useState(0)
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const { projectId } = useParams<Record<string, string | undefined>>()
    const currentProject = useCurrentContext()

    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    useEffect(() => {
        let isCancelled = false;

        (async () => {
            if (externalId !== undefined) {
                setError(false)
                setIsLoading(false)
                try {
                    setIsLoading(true)

                    const allTagData = await (
                        await GetTagDataService()
                    ).getAllTagData()

                    if (!isCancelled) {
                        setTagData(allTagData)
                        setIsLoading(false)
                    }
                } catch {
                    if (!isCancelled) {
                        console.error("Error loading tags")
                        setError(true)
                    }
                }
            }
        })()

        return () => {
            isCancelled = true
        }
    }, [externalId])

    if (!tagData) { return null }

    return (
        <Tabs
            activeTab={activeTab}
            onChange={setActiveTab}
        >
            <List>
                <Tab>Send for review</Tab>
                <Tab>My reviews</Tab>
            </List>
            <Panels>
                <Panel><SendForReview tagData={tagData} /></Panel>
                <Panel><MyReviews tagData={tagData} /></Panel>
            </Panels>
        </Tabs>
    )
}

export default ReviewView
