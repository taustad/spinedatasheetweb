import React, {
    useContext, useRef, useEffect,
} from "react"
import {
    Icon, Tabs, Typography, Button,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { tag as tagIcon, close, drag_handle } from "@equinor/eds-icons"
import { Resizable } from "re-resizable"
import InfoStrip from "./InfoStrip"
import { ViewContext } from "../../../Context/ViewContext"

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

type TabType = {
    title: string,
    content: JSX.Element,
};

type Props = {
    onClose: () => void
    currentProperty: any
    activeTagData: any
    tabs: TabType[],
}

const SheetContainer: React.FC<Props> = ({
    activeTagData,
    onClose,
    currentProperty,
    tabs,
}) => {
    const {
        activeSheetTab,
        activeConversation,
        setActiveSheetTab,
        SideSheetScrollPos,
        setSideSheetScrollPos,
        sideSheetOpen,
        sheetWidth,
        setSheetWidth,

    } = useContext(ViewContext)
    const scrollableRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (scrollableRef.current) {
            requestAnimationFrame(() => {
                scrollableRef.current!.scrollTop = scrollableRef.current!.scrollHeight
            })
        }
    }

    const scrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0
        }
    }

    const handleTabChange = (index: number) => {
        if (index !== activeSheetTab) setActiveSheetTab(index)

        if (index !== 4) scrollToTop(); else scrollToBottom()
    }

    function handleEscapeKey(event: globalThis.KeyboardEvent) {
        if (event.code === "Escape") onClose()
    }

    const handleScroll = () => {
        if (scrollableRef.current) {
            setSideSheetScrollPos(scrollableRef.current.scrollTop)
        }
    }

    // Scrolls to bottom when conversation changes
    useEffect(() => {
        if (activeSheetTab === 4) scrollToBottom()
    }, [activeConversation])

    // Scrolls to the position the user was at before closing the side sheet
    useEffect(() => {
        if (scrollableRef.current) scrollableRef.current.scrollTop = SideSheetScrollPos
    }, [])

    // Scrolls to top when the user opens a new tag
    useEffect(() => {
        if (SideSheetScrollPos === 0) scrollToTop()
    }, [SideSheetScrollPos])

    // Adds scroll listener to the scrollable div
    useEffect(() => {
        scrollableRef.current?.addEventListener("scroll", handleScroll)
        return () => {
            scrollableRef.current?.removeEventListener("scroll", handleScroll)
        }
    }, [scrollableRef, sideSheetOpen])

    // adds escape key listener when side sheet is open
    useEffect(() => {
        if (sideSheetOpen) {
            document.addEventListener("keydown", handleEscapeKey)
            return () => {
                document.removeEventListener("keydown", handleEscapeKey)
            }
        }
        return () => {}
    }, [sideSheetOpen])

    if (!sideSheetOpen) return null

    if (activeTagData === undefined
        || activeTagData.tagNo === undefined
        || activeTagData.description === undefined) { return (<div>Error loading tag</div>) }

    return (
        <Resizable
            style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                zIndex: 100,
            }}
            defaultSize={{
                width: sheetWidth,
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
                setSheetWidth(sheetWidth + d.width)
            }}
            handleComponent={{
                left: <Handle data={drag_handle} size={24} />,
            }}
        >
            <SheetContent>
                <SheetHeader>
                    <Banner>
                        <Typography variant="h4">
                            {
                                currentProperty
                                && <strong>{currentProperty.description}</strong>
                            }
                        </Typography>
                        <Button variant="ghost_icon" onClick={onClose}>
                            <Icon data={close} size={24} />
                        </Button>
                    </Banner>

                    <TagInfo>
                        <Icon data={tagIcon} color="black" size={18} />
                        <Typography variant="body_short">
                            <strong>{activeTagData.tagNo}</strong>
                            {" "}
                            {activeTagData.description}
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
                        {tabs.map((tab, index) => (
                            <Tabs.Tab key={index}>{tab.title}</Tabs.Tab>
                    ))}
                    </TabsHeader>
                    <SheetBody>
                        {tabs.map((tab, index) => (
                            <TabsPanel key={index}>
                                {activeSheetTab === index && tab.content}
                            </TabsPanel>
                    ))}
                    </SheetBody>
                </TabsContainer>
            </SheetContent>
        </Resizable>
    )
}

export default SheetContainer
