import React, {
    FC, useState, useEffect, useContext,
} from "react"
import styled from "styled-components"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt } from "@equinor/eds-icons"
import CommentView from "./Components/CommentView"
import LocalNavigation from "../Components/LocalNavigation"
import TabsTitle from "../Components/TabsTitle"
import ConversationCard from "./Components/ConversationCard"
import { ViewContext } from "../../../Context/ViewContext"
import { GetConversationService } from "../../../api/ConversationService"

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

type Props = {
    currentProperty?: string;
    scrollToBottom: () => void;
};

interface DisplayConversation {
    title: string,
    value: string,
    status: Components.Schemas.ConversationStatusDto,
    conversationId: string
}

const CommentSideSheet: FC<Props> = ({
    currentProperty,
    scrollToBottom,
}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [conversationsData, setConversationsData] = useState<{[key in Components.Schemas.ConversationStatusDto] : DisplayConversation[]}>()
    const Navigationbuttons = [
        "All",
        "Open",
        "To be implemented",
        "Closed",
        "Implemented",
    ]

    const {
        activeConversation, setConversations, activeTagData, conversations,
    } = useContext(ViewContext)

    useEffect(() => {
        scrollToBottom()
    }, [currentProperty, activeConversation])

    const getPropertyValue = (property: string, obj: any) => {
        if (obj == null) return null
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(property)) return obj[property]

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < Object.keys(obj).length; i++) {
            const key = Object.keys(obj)[i]
            if (typeof obj[key] === "object") {
                const value: any = getPropertyValue(obj[key], property)
                if (value) return value
            }
        }

        return null
    }

    const buildConversations = () => {
        console.log("Building conversations")
        const newConversations: {[key in Components.Schemas.ConversationStatusDto] : DisplayConversation[]} = {
            Open: [],
            To_be_implemented: [],
            Closed: [],
            Implemented: [],
        }
        if (conversations) {
            conversations.forEach((conversation) => {
                if (!conversation.property) return
                const value = getPropertyValue(conversation.property, activeTagData)
                console.log("Property: ", conversation.property, " value: ", value, " conversation: ", conversation)
                const newConversation: DisplayConversation = {
                    title: conversation.property,
                    value: value ?? "",
                    status: conversation.conversationStatus ?? "Open",
                    conversationId: conversation.id ?? "",
                }
                newConversations[conversation.conversationStatus ?? "Open"].push(newConversation)
            })
        }
        console.log("New conversations: ", newConversations)
        setConversationsData(newConversations)
    }

    const mapTabToConversations = (tab: number):{
        title: string,
        value: string,
        status:Components.Schemas.ConversationStatusDto,
        conversationId: string
    }[] | undefined => {
        switch (tab) {
            case 0:
                return Object.values(conversationsData ?? {}).flat()
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

    useEffect(() => {
        console.log("Conversations changed: ", conversations)
        buildConversations()
    }, [conversations])

    useEffect(() => {
        (async () => {
            try {
                if (!activeTagData?.review) return
                console.log("Getting conversations for tag review: ", activeTagData?.review.id)
                const newConversations = await (await GetConversationService()).getConversationsForTagReview(activeTagData?.review.id ?? "")
                console.log("Got conversations: ", newConversations)
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
                    {mapTabToConversations(activeTab)?.map((conversation: any) => (
                        <ConversationCard
                            key={conversation.title} // Add a key prop for each rendered element
                            title={conversation.title}
                        />
                    ))}
                </>
            )}
        </Container>
    )
}

export default CommentSideSheet
