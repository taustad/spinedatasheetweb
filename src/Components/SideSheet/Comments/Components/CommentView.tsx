import React, {
    useContext,
    useEffect,
    useState,
} from "react"
import styled from "styled-components"
import { GetConversationService } from "../../../../api/ConversationService"
import { Message } from "../../../../Models/Message"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import ClusteredMessages from "./ClusteredMessages"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const ConversationDiv = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

type CommentViewProps = {
    currentProperty: string
}

const CommentView: React.FC<CommentViewProps> = ({
    currentProperty,
}) => {
    const [newMessage, setNewMessage] = useState<Message>()
    const {
        activeTagData, conversations, setConversations, activeConversation, setActiveConversation,
    } = useContext(ViewContext)

    const getConversationForProperty = (property: string) => (
        conversations.find((conversation) => conversation.property?.toUpperCase() === property.toUpperCase())
    )

    useEffect(() => {
        (async () => {
            try {
                const currentConversationId = getConversationForProperty(currentProperty)?.id

                if (currentConversationId) {
                    const currentConversation = await (await GetConversationService()).getMessagesForConversation(
                        activeTagData?.review?.id ?? "",
                        currentConversationId,
                    )
                    setActiveConversation(currentConversation)
                } else {
                    setActiveConversation(undefined)
                }
            } catch (error) {
                console.error("Error getting messages for conversation: ", error)
            }
        })()
    }, [currentProperty])

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const message = { ...newMessage }
        message.text = event.target.value
        setNewMessage(message)
    }

    const createConversation = async () => {
        const createCommentDto: Components.Schemas.ConversationDto = {
            property: currentProperty,
            text: newMessage?.text ?? "",
            conversationLevel: 1,
            conversationStatus: 0,
        }
        try {
            const service = await GetConversationService()
            const savedConversation = await service.createConversation(activeTagData?.review?.id ?? "", createCommentDto)
            setActiveConversation(savedConversation)
            const newConversations = [...conversations, savedConversation]
            setConversations(newConversations)
        } catch (error) {
            console.error(`Error creating comment: ${error}`)
        }
        setNewMessage(undefined)
    }

    const addMessage = async () => {
        const message = { ...newMessage }
        try {
            const service = await GetConversationService()
            const savedMessage = await service.addMessage(activeTagData?.review?.id ?? "", activeConversation?.id ?? "", message)

            const updatedMessages = [...activeConversation?.messages ?? [], savedMessage]

            const updatedActiveConversation = { ...activeConversation }
            updatedActiveConversation.messages = updatedMessages

            setActiveConversation(updatedActiveConversation)
        } catch (error) {
            console.error(`Error creating comment: ${error}`)
        }
        setNewMessage(undefined)
    }

    const handleSubmit = async () => {
        if (activeConversation) {
            addMessage()
        } else {
            createConversation()
        }
    }

    return (
        <Container>
            <ConversationDiv>
                <ClusteredMessages />
            </ConversationDiv>
            <InputController
                value={newMessage?.text ?? ""}
                handleCommentChange={handleMessageChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default CommentView
