import React, {
    useContext,
    useEffect,
    useState,
} from "react"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion"
import { GetConversationService } from "../../../../api/ConversationService"
import { Message } from "../../../../Models/Message"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import ClusteredMessages from "./ClusteredMessages"
import TagDropDown from "./TagDropDown"
import { processMessageInput } from "../../../../utils/helpers"
import { GetUserTagService } from "../../../../api/UserTagService"

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
    const [userTags, setUserTags] = useState<any[]>([])
    const {
        activeTagData,
        conversations,
        setConversations,
        activeConversation,
        setActiveConversation,
    } = useContext(ViewContext)

    const fusionContextId = useCurrentContext()

    const getConversationForProperty = (property: string) => (
        conversations.find((conversation) => conversation.property?.toUpperCase() === property.toUpperCase())
    )

    useEffect(() => {
        (async () => {
            if (fusionContextId) {
                try {
                    const userTagsResult = await (await GetUserTagService()).getUsers(fusionContextId.id, "", 1000, 0)
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

    useEffect(() => {
        console.log("re-rendering")
    }, [reRenderCounter])

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
                />
            </Controls>
        </Container>
    )
}

export default CommentView
