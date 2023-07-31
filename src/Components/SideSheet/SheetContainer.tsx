import React, {
 useState, Dispatch, SetStateAction,
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
import CommentsSideSheet from "./Comments/CommentsSideSheet"
import AreaSideSheet from "./Area/AreaSideSheet"
import ChangeLogSideSheet from "./ChangeLog/ChangeLogSideSheet"
import EquipmentSideSheet from "./Equipment/EquipmentSideSheet"
import ActivitySideSheet from "./Activity/ActivitySideSheet"

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

type Props = {
    isOpen: boolean
    onClose: () => void
    currentProperty: any
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
    setReviewComments,
    tag,
    width,
    setWidth,
}) => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabChange = (index: number) => {
        console.log(index)
        setActiveTab(index)
    }

    if (!currentProperty || !isOpen) {
        return null
    }

    const placeholder = (
        <div style={{ height: "100%", width: "100%" }}>
            <Typography variant="body_short">Work in progress...</Typography>
        </div>
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
            maxWidth={1500}
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
                    className="TabsContainer"
                    activeTab={activeTab}
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
                        <TabsPanel>{activeTab === 0 && <ActivitySideSheet />}</TabsPanel>
                        <TabsPanel>{activeTab === 1 && <EquipmentSideSheet />}</TabsPanel>
                        <TabsPanel>{activeTab === 2 && <AreaSideSheet />}</TabsPanel>
                        <TabsPanel>{activeTab === 3 && placeholder}</TabsPanel>
                        <TabsPanel>
                            {activeTab === 4 && (
                                <CommentsSideSheet
                                    reviewComments={reviewComments}
                                    currentProperty={currentProperty.property}
                                    setReviewComments={setReviewComments}
                                />
                            )}
                        </TabsPanel>
                        <TabsPanel>{activeTab === 5 && <ChangeLogSideSheet />}</TabsPanel>
                    </SheetBody>
                </TabsContainer>
            </SheetContent>
        </Resizable>
    )
}

export default SheetContainer
