import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import styled from "styled-components"
import { GetCommentService } from "../../../../api/CommentService"
import { Message } from "../../../../Models/Message"
import MessageBox from "./MessageBox"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import { formatDate } from "../../../../utils/helpers"
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
    conversations: Conversation[]
    setConversations: Dispatch<SetStateAction<Conversation[]>>
}

const CommentView: React.FC<CommentViewProps> = ({
    currentProperty,
    conversations,
    setConversations,
}) => {
    const [newMessage, setNewMessage] = useState<Message>()
    const { activeTagData } = useContext(ViewContext)
    const [activeConversation, setActiveConversation] = useState<Conversation>()
    const { tagId } = useParams<Record<string, string | undefined>>()
    const currentUser: any = useCurrentUser()

    const getConversationForProperty = (property: string) => (
        conversations.find((conversation) => conversation.property === property)
    )

    useEffect(() => {
        const conversation = getConversationForProperty(currentProperty)
        setActiveConversation(conversation)
    }, [currentProperty])

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const message = { ...newMessage }
        message.text = event.target.value
        setNewMessage(message)
    }

    const createConversation = async () => {
        const createCommentDto: Components.Schemas.CreateCommentDto = {
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
            const savedConversation = await service.addMessage(activeTagData?.review?.id ?? "", activeConversation?.id ?? "", message)

            const updatedConversations = conversations.map((conversation) => {
                if (conversation.id === activeConversation?.id) {
                    return savedConversation
                }
                return conversation
            })

            setConversations(updatedConversations)
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
                <ClusteredMessages
                    comments={getConversationForProperty(currentProperty)?.messages ?? []}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
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
