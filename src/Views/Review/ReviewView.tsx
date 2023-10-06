import React, { useEffect, useState } from "react"
import { Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import SendForReview from "./SendForReview"
import { TagData } from "../../Models/TagData"
import { GetTagDataService } from "../../api/TagDataService"
import MyReviews from "./MyReviews"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

function ReviewView() {
    const [activeTab, setActiveTab] = useState(0)
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [myReviews, setMyReviews] = useState<Components.Schemas.TagDataReviewDto[]>([])

    const { projectId } = useParams<Record<string, string>>()
    const currentProject = useCurrentContext()

    const currentUser: any = useCurrentUser()
    const [currentUserId, setCurrentUserId] = useState<string>("")

    useEffect(() => {
        if (currentUser) {
            const userId = currentUser._info.localAccountId
            setCurrentUserId(userId)
            console.log("userId: ", userId)
        }
    }, [currentUser])

    useEffect(() => {
        (async () => {
            if (currentUser) {
                const userId = currentUser._info.localAccountId
                setCurrentUserId(userId)
                console.log("userId: ", userId)

                const result = await (await GetTagDataReviewService()).getTagDataReviews(userId)
                const reviewsAssignedToMe: Components.Schemas.TagDataReviewDto[] = result.data

                setMyReviews(reviewsAssignedToMe)
            }
        })()
    }, [currentUser])

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
                <Panel>
                    <SendForReview
                        tagData={tagData}
                        userId={currentUserId}
                        myTags={myReviews}
                        setMyTags={setMyReviews}
                    />
                </Panel>
                <Panel>
                    <MyReviews
                        tagData={tagData}
                        userId={currentUserId}
                        myTags={myReviews}
                        setMyTags={setMyReviews}
                    />
                </Panel>
            </Panels>
        </Tabs>
    )
}

export default ReviewView
