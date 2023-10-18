import { Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import { GetTagDataService } from "../api/TagDataService"
import EquipmentListTable from "../Components/EquipmentListView/EquipmentListTable"
import { TagData } from "../Models/TagData"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"
import Header from "../Components/Header/Header"
import EquipmentListReview from "../Components/EquipmentListView/EquipmentListReview"
import Dialogue from "../Components/Dialogue"
import { ViewContext } from "../Context/ViewContext"
import { GetTagDataReviewService } from "../api/TagDataReviewService"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 15px;
`

const StyledTabs = styled(Tabs)`
    width: 100%;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs
const StyledTabPanel = styled(Panel)`
    padding: 0;
    border-top: 1px solid LightGray;
`

function EquipmentListView() {
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false)
    const [tagInReview, setTagInReview] = useState<string | undefined>(
        undefined,
    )
    const [revisionInReview, setRevisionInReview] = useState<
        string | undefined
    >(undefined)
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)

    const { projectId } = useParams<Record<string, string | undefined>>()
    const currentProject = useCurrentContext()

    const navigate = useNavigate()
    const currentUser: any = useCurrentUser()

    const {
        myReviews, setMyReviews, currentUserId, setCurrentUserId,
    } = useContext(ViewContext)

    useEffect(() => {
        if (currentUser?._info?.localAccountId) {
            setCurrentUserId(currentUser?._info?.localAccountId)
        }
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

                    if (currentUser) {
                        const myReviewsFromServer = await (await GetTagDataReviewService()).getTagDataReviews(currentUser._info.localAccountId)
                        setMyReviews(myReviewsFromServer.data)
                    }

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

    useEffect(() => {
        if (
            currentProject?.currentContext !== null
            && currentProject.currentContext !== undefined
            && (projectId === null || projectId === undefined)
        ) {
            navigate(`/${currentProject.currentContext.id}`)
        }
    }, [currentProject, projectId, navigate])

    if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    if (error) {
        return <Dialogue type="error" message="Error loading tags" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tags..." />
    }

    if (!tagData || tagData.length === 0) {
        return <Dialogue type="error" message="No tags found in this project" />
    }

    return (
        <Wrapper>
            <Header />
            <StyledTabs
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
            </StyledTabs>

            <EquipmentListReview
                isOpen={reviewModalOpen}
                setIsOpen={setReviewModalOpen}
                tags={tagData}
                setReviewModalOpen={setReviewModalOpen}
                setTagInReview={setTagInReview}
                tagNoInReview={tagInReview}
                setRevisionInReview={setRevisionInReview}
                revisionInReview={revisionInReview}
            />

        </Wrapper>
    )
}

export default EquipmentListView
