import React, { useState, Dispatch, SetStateAction } from "react"
import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import ReviewCommentsSideSheet from "./ReviewCommentsSideSheet"
import { ReviewComment } from "../../Models/ReviewComment"


const SheetContent = styled.div`
    box-sizing: border-box;
    width: 30vw;
    border-left: 1px solid LightGray;
    height: calc(100vh - 82px); // should be correct
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TabsContainer = styled(Tabs)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow-y: auto;
`

const TabsPanel = styled(Tabs.Panel)`
    padding: 0;
`

const TabsHeader = styled(Tabs.List)`
    padding: 0;
    overflow-x: visible;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid LightGray;
`

type Props = {
    isOpen: boolean
    onClose: () => void
    currentProperty: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const SideSheetContainer: React.FC<Props> = ({
    onClose,
    isOpen,
    reviewComments,
    currentProperty,
    setReviewComments,
}) => {
    const [width, setWidth] = useState<number>(30)
    const [activeTab, setActiveTab] = useState(0)

    const handleChange = (index: number) => {
        console.log(index)
        setActiveTab(index)
    }
    return (
        <SheetContent className="sideSheetContent">
            <TabsContainer
                className="TabsContainer"
                activeTab={activeTab}
                onChange={handleChange}
            >
                <TabsHeader>
                    <Tabs.Tab>Comments</Tabs.Tab>
                    <Tabs.Tab>Tab 2</Tabs.Tab>
                </TabsHeader>
                <Tabs.Panels>
                    <TabsPanel className="commentSection">
                        {activeTab === 0 && (
                            <ReviewCommentsSideSheet
                                reviewComments={reviewComments}
                                currentProperty={currentProperty}
                                setReviewComments={setReviewComments}
                            />
                        )}
                    </TabsPanel>
                    <TabsPanel>{activeTab === 1 && <h1>hi</h1>}</TabsPanel>
                </Tabs.Panels>
            </TabsContainer>
        </SheetContent>
    )
}

export default SideSheetContainer
