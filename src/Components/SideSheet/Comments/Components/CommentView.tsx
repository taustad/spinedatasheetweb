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
import TagDropDown from "./TagDropDown"
import { processMessageInput } from "../../../../utils/helpers"

const Controls = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;

`
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
    const [taggedUsers, setTaggedUsers] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [showTagDropDown, setShowTagDropDown] = useState<boolean>(false)
    const {
        activeTagData,
        conversations,
        setConversations,
        activeConversation,
        setActiveConversation,
    } = useContext(ViewContext)

    const getConversationForProperty = (property: string) => (
        conversations.find((conversation) => conversation.property?.toUpperCase() === property.toUpperCase())
    )

    const dummyData = [
        {
            id: "1",
            displayName: "Henrik Hansen",
            accountType: "Consultant",
            status: "Active",
        },
        {
            id: "2",
            displayName: "Peter Jensen",
            accountType: "Consultant",
            status: "Active",
        },
        {
            id: "3",
            displayName: "Jesper Gudbransen",
            accountType: "Consultant",
            status: "inactive",
        },
        {
            id: "4",
            displayName: "Mikkel Eriksen",
            accountType: "Consultant",
            status: "inactive",
        },
    ]

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

    const handleTagSelected = (displayName: string, userId: string) => {
        const commentText = newMessage?.text ?? ""
        const lastAtPos = commentText.lastIndexOf("@")
        const beforeAt = commentText.substring(0, lastAtPos)
        const afterAt = commentText.substring(lastAtPos + 1).replace(/^\S+/, "") // Removes the word right after the "@"

        const newCommentText = `${beforeAt}<span data-mention="${userId}" contenteditable="false">${displayName}</span>&nbsp;${afterAt}`
        const message = { ...newMessage }
        message.text = newCommentText
        setNewMessage(message)
        setShowTagDropDown(false)
        setSearchTerm("")
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
        const { processedString, mentions } = processMessageInput(newMessage?.text ?? "")
        console.log("mentions: ", mentions) // to be used for tagging users in the future
        message.text = processedString
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
        setTaggedUsers([])
        setSearchTerm("")
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
            <Controls>
                {showTagDropDown && (
                    <TagDropDown
                        SearchTerm={searchTerm}
                        setTaggedUsers={setTaggedUsers}
                        onTagSelected={handleTagSelected}
                        dummyData={dummyData}
                    />
                )}

                <InputController
                    handleSubmit={handleSubmit}
                    taggedUsers={taggedUsers}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    setSearchTerm={setSearchTerm}
                    setShowTagDropDown={setShowTagDropDown}
                />
            </Controls>
        </Container>
    )
}

export default CommentView
