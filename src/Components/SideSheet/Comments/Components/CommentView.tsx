import React, {
    useContext,
    useEffect,
    useState,
} from "react"
import styled from "styled-components"
import { GetCommentService } from "../../../../api/CommentService"
import { Message } from "../../../../Models/Message"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import ClusteredMessages from "./ClusteredMessages"
import { Conversation } from "../../../../Models/Conversation"

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
    // const [activeConversation, setActiveConversation] = useState<Conversation>()

    const getConversationForProperty = (property: string) => {
        console.log("Conversations in getConversationForProperty", conversations)
        console.log("Property in getConversationForProperty", property)
        return conversations.find((conversation) => conversation.property?.toUpperCase() === property.toUpperCase())
    }

    useEffect(() => {
        (async () => {
            try {
                console.log("Current property: ", currentProperty)
                const currentConversationId = getConversationForProperty(currentProperty)?.id
                console.log("Conversation in comment view: ", currentConversationId)

                if (currentConversationId) {
                    const currentConversation = await (await GetCommentService()).getMessagesForConversation(
                        activeTagData?.review?.id ?? "",
                        currentConversationId,
                    )
                    console.log("Setting active conversation: ", currentConversation)
                    setActiveConversation(currentConversation)
                } else {
                    setActiveConversation(undefined)
                }
            } catch (error) {
                console.error("Error")
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
            const service = await GetCommentService()
            const savedComment = await service.createConversation(activeTagData?.review?.id ?? "", createCommentDto)
            setConversations([...conversations, savedComment])
        } catch (error) {
            console.log(`Error creating comment: ${error}`)
        }
        setNewMessage(undefined)
    }

    const addMessage = async () => {
        const message = { ...newMessage }
        try {
            const service = await GetCommentService()
            const savedMessage = await service.addMessage(activeTagData?.review?.id ?? "", activeConversation?.id ?? "", message)

            const updatedMessages = [...activeConversation?.messages ?? [], savedMessage]

            const updatedActiveConversation = { ...activeConversation }
            updatedActiveConversation.messages = updatedMessages

            console.log("Setting active conversation: ", updatedActiveConversation)

            setActiveConversation(updatedActiveConversation)
        } catch (error) {
            console.log(`Error creating comment: ${error}`)
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
