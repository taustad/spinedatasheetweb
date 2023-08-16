import React, {
Dispatch, SetStateAction, useContext, useRef, useEffect,
} from "react"
import {
 Icon, Tabs, Typography, Button,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { tag as tagIcon, close, drag_handle } from "@equinor/eds-icons"
import { Resizable } from "re-resizable"
import { TagData } from "../../Models/TagData"
import { ReviewComment } from "../../Models/ReviewComment"
import InfoStrip from "./Components/InfoStrip"
import CommentsSideSheet from "./Comments/CommentSideSheet"
import AreaSideSheet from "./Area/AreaSideSheet"
import ChangeLogSideSheet from "./ChangeLog/ChangeLogSideSheet"
import EquipmentSideSheet from "./Equipment/EquipmentSideSheet"
import ActivitySideSheet from "./Activity/ActivitySideSheet"
import { ViewContext } from "../../Context/ViewContext"

const SheetContent = styled.div`
    box-sizing: border-box;
    border-left: 1px solid LightGray;
    height: calc(100vh - 82px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f7f7f7;
`
const SheetBody = styled(Tabs.Panels)`
    flex: 1;
`

const TabsContainer = styled(Tabs)`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
`

const TabsPanel = styled(Tabs.Panel)`
    padding: 0;
    height: 100%;
`

const TabsHeader = styled(Tabs.List)`
    padding: 0;
    overflow-x: visible;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid LightGray;
    z-index: 10;
`

const SheetHeader = styled.div`
    padding: 15px;
    background-color: white;
    h4 {
        margin-bottom: 5px;
    }
`

const TagInfo = styled.div`
    display: flex;
    flex-direction: row;

    strong {
        padding-left: 5px;
    }
`

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Handle = styled(Icon)`
    position: absolute;
    left: 0;
    transform: rotate(90deg);
    top: 50%;
`

const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    `

type Props = {
    isOpen: boolean
    onClose: () => void
    currentProperty: any
    setCurrentProperty: Dispatch<SetStateAction<any>>
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
    tag: TagData
    width: number
    setWidth: (width: number) => void
}

const SheetContainer: React.FC<Props> = ({
    onClose,
    isOpen,
    reviewComments,
    currentProperty,
    setCurrentProperty,
    setReviewComments,
    tag,
    width,
    setWidth,
}) => {
    const { activeSheetTab, setActiveSheetTab } = useContext(ViewContext)
    const scrollableRef = useRef<HTMLDivElement>(null)

    const handleTabChange = (index: number) => setActiveSheetTab(index)

    const scrollToBottom = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [reviewComments])

    if (!isOpen) return null

    const placeholder = (
        <Placeholder>
            <Typography variant="body_short">Work in progress...</Typography>
        </Placeholder>
    )

    return (
        <Resizable
            style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
            }}
            defaultSize={{
                width,
                height: "100%",
            }}
            minWidth={620}
            maxWidth={window.innerWidth}
            enable={{
                top: false,
                right: false,
                bottom: false,
                left: true,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            }}
            onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width)
            }}
            handleComponent={{
                left: <Handle data={drag_handle} size={24} />,
            }}
        >
            <SheetContent>
                <SheetHeader>
                    <Banner>
                        <Typography variant="h4">
                            <strong>{currentProperty.description}</strong>
                        </Typography>
                        <Button variant="ghost_icon" onClick={onClose}>
                            <Icon data={close} size={24} />
                        </Button>
                    </Banner>

                    <TagInfo>
                        <Icon data={tagIcon} color="black" size={18} />
                        <Typography variant="body_short">
                            <strong>{tag.tagNo}</strong>
                            {" "}
                            {tag.description}
                        </Typography>
                    </TagInfo>
                </SheetHeader>
                <InfoStrip />
                <TabsContainer
                    ref={scrollableRef}
                    className="TabsContainer"
                    activeTab={activeSheetTab}
                    onChange={handleTabChange}
                    scrollable
                >
                    <TabsHeader>
                        <Tabs.Tab>Activity</Tabs.Tab>
                        <Tabs.Tab>Equipment</Tabs.Tab>
                        <Tabs.Tab>Area</Tabs.Tab>
                        <Tabs.Tab>Connections</Tabs.Tab>
                        <Tabs.Tab>Comments</Tabs.Tab>
                        <Tabs.Tab>Changelog</Tabs.Tab>
                    </TabsHeader>
                    <SheetBody>
                        <TabsPanel>{activeSheetTab === 0 && <ActivitySideSheet />}</TabsPanel>
                        <TabsPanel>{activeSheetTab === 1 && <EquipmentSideSheet />}</TabsPanel>
                        <TabsPanel>{activeSheetTab === 2 && <AreaSideSheet />}</TabsPanel>
                        <TabsPanel>{activeSheetTab === 3 && placeholder}</TabsPanel>
                        <TabsPanel>
                            {activeSheetTab === 4 && (
                                <CommentsSideSheet
                                    scrollToBottom={scrollToBottom}
                                    reviewComments={reviewComments}
                                    currentProperty={currentProperty.property}
                                    setCurrentProperty={setCurrentProperty}
                                    setReviewComments={setReviewComments}
                                />
                            )}
                        </TabsPanel>
                        <TabsPanel>{activeSheetTab === 5 && <ChangeLogSideSheet />}</TabsPanel>
                    </SheetBody>
                </TabsContainer>
            </SheetContent>
        </Resizable>
    )
}

export default SheetContainer
