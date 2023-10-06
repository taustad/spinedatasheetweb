import React, {
    useContext,
    useEffect,
    useState,
} from "react"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { GetConversationService } from "../../../../api/ConversationService"
import { Message } from "../../../../Models/Message"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import ClusteredMessages from "./ClusteredMessages"
import TagDropDown from "./TagDropDown"
import { processMessageInput } from "../../../../utils/helpers"
import { GetProjectService } from "../../../../api/ProjectService"
import { GetMessageService } from "../../../../api/MessageService"

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
    const [reRenderCounter, setReRenderCounter] = useState<number>(0)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [showTagDropDown, setShowTagDropDown] = useState<boolean>(false)
    const [charCount, setCharCount] = useState(0)
    const [userTags, setUserTags] = useState<any[]>([])

    const {
        activeTagData,
        conversations,
        setConversations,
        activeConversation,
        setActiveConversation,
    } = useContext(ViewContext)

    const currentContext = useCurrentContext()

    const getConversationForProperty = (property: string) => (
        conversations.find((conversation) => conversation.property?.toUpperCase() === property.toUpperCase())
    )

    useEffect(() => {
        (async () => {
            if (currentContext && currentContext.currentContext?.id) {
                try {
                    const userTagsResult = await (await GetProjectService()).getUsers(currentContext.currentContext.id, "", 1000, 0)
                    setUserTags(userTagsResult.data)
                } catch (error) {
                    console.error("Error getting users for project: ", error)
                }
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const currentConversationId = getConversationForProperty(currentProperty)?.id

                if (currentConversationId) {
                    const currentConversation = await (await GetMessageService()).getMessagesForConversation(
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

        const newCommentText = `${beforeAt}<span data-mention="${userId}" contenteditable="false">${displayName}</span>${afterAt}`
        const message = { ...newMessage }
        message.text = newCommentText
        setNewMessage(message)
        setShowTagDropDown(false)
        setSearchTerm("")
        setCharCount((prevCharCount) => prevCharCount + displayName.length)
    }

    const createConversation = async () => {
        const { processedString, mentions } = processMessageInput(newMessage?.text ?? "")
        const createCommentDto: Components.Schemas.ConversationDto = {
            property: currentProperty,
            text: processedString ?? "",
            conversationLevel: "Tag",
            conversationStatus: "Open",
        }
        if (!currentContext.currentContext?.externalId || !activeTagData?.tagNo) { return }
        try {
            const service = await GetConversationService()
            const savedConversation = await service.createConversation(
                currentContext.currentContext?.externalId,
                activeTagData?.tagNo,
                createCommentDto,
            )
            setActiveConversation(savedConversation)
            const newConversations = [...conversations, savedConversation]
            setConversations(newConversations)
        } catch (error) {
            console.error(`Error creating comment: ${error}`)
        }
        setNewMessage(undefined)
    }

    const addMessage = async () => {
        const { processedString, mentions } = processMessageInput(newMessage?.text ?? "")
        const message: Components.Schemas.MessageDto = { ...newMessage, text: processedString }
        console.log("mentions: ", mentions) // to be used for tagging users in the future
        try {
            const service = await GetMessageService()
            const savedMessage = await service.addMessage(activeConversation?.id ?? "", message)

            const updatedMessages = [...activeConversation?.messages ?? [], savedMessage]

            const updatedActiveConversation = { ...activeConversation }
            updatedActiveConversation.messages = updatedMessages

            setActiveConversation(updatedActiveConversation)
        } catch (error) {
            console.error(`Error creating comment: ${error}`)
        }
    }

    const handleSubmit = async () => {
        if (!newMessage?.text) { return }
        if (/^( |&nbsp;)*$/.test(newMessage.text)) { return } // if the string is only whitespace or &nbsp; then return

        if (activeConversation) {
            addMessage()
        } else {
            createConversation()
        }
        setNewMessage(undefined)
        setReRenderCounter(reRenderCounter + 1)
        setSearchTerm("")
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
                        setReRenderCounter={setReRenderCounter}
                        onTagSelected={handleTagSelected}
                        dummyData={userTags}
                    />
                )}

                <InputController
                    handleSubmit={handleSubmit}
                    reRenderCounter={reRenderCounter}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    setSearchTerm={setSearchTerm}
                    setShowTagDropDown={setShowTagDropDown}
                    charCount={charCount}
                    setCharCount={setCharCount}
                />
            </Controls>
        </Container>
    )
}

export default CommentView
