import React, { useContext, useEffect, useState } from "react"
import { Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import SendForReview from "./SendForReview"
import { TagData } from "../../Models/TagData"
import { GetTagDataService } from "../../api/TagDataService"
import MyReviews from "./MyReviews"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"
import { GetContainerReviewService } from "../../api/ContainerReviewService"
import { ViewContext } from "../../Context/ViewContext"
import { GetContainerService } from "../../api/ContainerService"
import { GetContainerReviewerService } from "../../api/ContainerReviewerService"

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

function ReviewView() {
    console.log("ReviewView")
    const [activeTab, setActiveTab] = useState(0)
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [myReviews, setMyReviews] = useState<any[]>([])

    const [containers, setContainers] = useState([])

    const { projectId } = useParams<Record<string, string>>()

    const { setContainerReviews, containerReviews } = useContext(ViewContext)
    const currentProject = useCurrentContext()

    const currentUser: any = useCurrentUser()
    const [currentUserId, setCurrentUserId] = useState<string>("")

    useEffect(() => {
        if (currentUser) {
            const userId = currentUser._info.localAccountId
            setCurrentUserId(userId)
        }
    }, [currentUser])

    useEffect(() => {
        (async () => {
            const containerReviewsResult = await (await GetContainerReviewService()).getContainerReviews()
            console.log("ContainerReviews: ", containerReviewsResult)
            setContainerReviews(containerReviewsResult.data)

            console.log("current user id : ", currentUser?._info.localAccountId)

            const containerResults = await (await GetContainerService()).getContainers()
            console.log("Containers: ", containerResults)
            setContainers(containerResults)

            const myReviewsResult = await (await GetContainerReviewerService()).getContainerReviewers(currentUser._info.localAccountId)
            console.log("myReviewsresult: ", myReviewsResult)
            setMyReviews(myReviewsResult.data)
            // if (currentUser) {
            //     const userId = currentUser._info.localAccountId
            //     setCurrentUserId(userId)

            //     const result = await (await GetTagDataReviewService()).getTagDataReviews(userId)
            //     const reviewsAssignedToMe: any[] = result.data

            //     setMyReviews(reviewsAssignedToMe)
            // }
        })()
    }, [])

    useEffect(() => {
        console.log("Containers in useEffect: ", containers)
    }, [containers])

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

    console.log("containerReviews before return: ", containerReviews)

    return (
        <>
            <p>Containers</p>
            {containerReviews && containerReviews.map((cr) => (
                <>
                    <p>
                        containerId
                        <br />
                        {cr.containerId}
                    </p>
                    <p>
                        containerReviewId
                        <br />
                        {cr.id}
                    </p>
                    <p>
                        State:
                        <br />
                        {cr.state}
                    </p>
                </>
            ))}
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
                            myReviews={myReviews}
                            setMyReviews={setMyReviews}
                            containerReviews={containerReviews}
                            containers={containers}
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
        </>
    )
}

export default ReviewView
