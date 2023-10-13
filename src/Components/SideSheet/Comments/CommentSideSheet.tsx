import React, {
    FC, useState, useEffect, useContext,
} from "react"
import styled from "styled-components"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt } from "@equinor/eds-icons"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import CommentView from "./Components/CommentView"
import LocalNavigation from "../Components/LocalNavigation"
import TabsTitle from "../Components/TabsTitle"
import ConversationCard from "./Components/ConversationCard"
import { ViewContext } from "../../../Context/ViewContext"
import { GetConversationService } from "../../../api/ConversationService"
import { Message } from "../../../Models/Message"
import { User } from "../../../Models/User"

const Overview = styled.div`
    padding: 15px;
`
const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const ButtonRow = styled.div`
    margin-bottom: 8px;
    display: flex;
    align-items: center;
`

const TopButton = styled(Button)`
    margin-left: 5px;
`

interface DisplayConversation {
    property: string,
    value: string,
    status: Components.Schemas.ConversationStatusDto,
    conversationId: string
    messages: Message[]
    participants: User[]
}

const CommentSideSheet: FC = () => {
    const {
        setConversations,
        activeTagData,
        conversations,
        setSideSheetScrollPos,
        currentProperty,
        } = useContext(ViewContext)
    const [activeTab, setActiveTab] = useState(() => parseInt(localStorage.getItem("ActiveCommentTab") || "0", 10))
    const [conversationsData, setConversationsData] = useState<{[key in Components.Schemas.ConversationStatusDto] : DisplayConversation[]}>()
    const Navigationbuttons = [
        "All",
        "Open",
        "To be implemented",
        "Closed",
        "Implemented",
    ]

    // Save active tab to local storage and reset scroll position to top when tab is changed
    useEffect(() => {
        const storedTab = parseInt(localStorage.getItem("ActiveCommentTab") || "0", 10)
        if (activeTab !== storedTab) {
            setSideSheetScrollPos(0)
            localStorage.setItem("ActiveCommentTab", activeTab.toString())
        }
    }, [activeTab])

    const currentContext = useCurrentContext()

    const getPropertyValue = (property: string, obj: any): any => {
        if (obj == null) { return null }
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            return obj[property]
        }

        for (let i = 0; i < Object.keys(obj).length; i += 1) {
            const key = Object.keys(obj)[i]
            if (typeof obj[key] === "object") {
                const value: any = getPropertyValue(property, obj[key])
                if (value) { return value }
            }
        }
        return null
    }

    const buildConversations = () => {
        if (!conversations) { return }

        const newConversations: {[key in Components.Schemas.ConversationStatusDto] : DisplayConversation[]} = {
            Open: [],
            To_be_implemented: [],
            Closed: [],
            Implemented: [],
        }

        conversations.forEach((conversation) => {
            if (!conversation.property) { return }
            const value = getPropertyValue(conversation.property, activeTagData)
            const newConversation: DisplayConversation = {
                property: conversation.property,
                value: value ?? "",
                status: conversation.conversationStatus ?? "Open",
                conversationId: conversation.id ?? "",
                messages: conversation.messages ?? [],
                participants: conversation.participants ?? [],
            }
            newConversations[conversation.conversationStatus ?? "Open"].push(newConversation)
        })

        setConversationsData(newConversations)
    }

    const mapTabToConversations = (tab: number): DisplayConversation[] | undefined => {
        switch (tab) {
            case 1:
                return conversationsData?.Open
            case 2:
                return conversationsData?.To_be_implemented
            case 3:
                return conversationsData?.Closed
            case 4:
                return conversationsData?.Implemented
            default:
                return Object.values(conversationsData ?? {}).flat()
        }
    }

    // Build conversations when conversations are updated
    useEffect(() => {
        buildConversations()
    }, [conversations])

    // Get conversations for active tag
    useEffect(() => {
        (async () => {
            try {
                if (!activeTagData?.tagNo || !currentContext.currentContext?.externalId) { return }
                const newConversations = await (await GetConversationService()).getConversations(
                    currentContext.currentContext?.externalId,
                    activeTagData.tagNo,
                    true,
                    )
                    console.log("newConversations: ", newConversations)
                setConversations(newConversations)
            } catch (error) {
                console.error("Error getting messages for conversation: ", error)
            }
        })()
    }, [])

    return (
        <Container>
            {currentProperty && currentProperty !== "" ? (
                <CommentView
                    currentProperty={currentProperty}
                />
            ) : (
                <>
                    <Overview>
                        <Header>
                            <TabsTitle>Comments</TabsTitle>
                            <ButtonRow>
                                <TopButton variant="outlined"> Add Comment on tag </TopButton>
                                <Tooltip title="Search">
                                    <TopButton variant="ghost_icon">
                                        <Icon data={search} />
                                    </TopButton>
                                </Tooltip>
                                <Tooltip title="Filter">
                                    <TopButton variant="ghost_icon">
                                        <Icon data={filter_alt} />
                                    </TopButton>
                                </Tooltip>
                            </ButtonRow>
                        </Header>
                        <LocalNavigation
                            buttons={Navigationbuttons}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </Overview>
                    {mapTabToConversations(activeTab)?.map((conversation: DisplayConversation) => (
                        <ConversationCard
                            key={conversation.property + conversation.conversationId}
                            conversation={conversation}
                        />
                    ))}
                </>
            )}
        </Container>
    )
}

export default CommentSideSheet
