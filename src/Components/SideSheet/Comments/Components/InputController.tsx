import React, {
 FC, useContext, SetStateAction, Dispatch,
} from "react"
import {
    Button, Icon, Checkbox,
} from "@equinor/eds-core-react"
import { useCurrentUser } from "@equinor/fusion"
import { PersonPhoto } from "@equinor/fusion-components"
import styled from "styled-components"
import { send, save } from "@equinor/eds-icons"
import InputField from "./InputField"
import { ViewContext } from "../../../../Context/ViewContext"
import { Message } from "../../../../Models/Message"
import { GetConversationService } from "../../../../api/ConversationService"
import { Conversation } from "../../../../Models/Conversation"
import { GetMessageService } from "../../../../api/MessageService"
import { processMessageInput } from "../../../../utils/helpers"

const Controls = styled.div`
    padding: 30px 15px 10px 15px;
    background-color: white;
    border-top: 1px solid LightGray;
    display: flex;
    flex-direction: column;
`

const InputButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhotoAndInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 5px 5px 5px;
`

const StyledInputField = styled.div`
    align-items: left;
    width: 90%
`

const StyledCheckbox = styled(Checkbox)`
    margin-left: -15px;
`

const EditControls = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const updateComment = async (
    reviewId: string,
    activeConversationId: string,
    message: Message,
    newCommentText: string,
    activeConversation: Conversation,
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>,
) => {
    if (newCommentText && message.id) {
        const { processedString, mentions } = processMessageInput(newCommentText)
        try {
            const newMessage: Components.Schemas.MessageDto = {
                text: processedString,
            }
            const commentService = await GetMessageService()
            const updatedComment = await commentService.updateMessage(activeConversationId, message.id, newMessage)
            const updatedMessages = activeConversation.messages?.map((m) => (m.id !== message.id ? m : updatedComment))
            const updatedConversation = { ...activeConversation }
            updatedConversation.messages = updatedMessages
            setActiveConversation(updatedConversation)
        } catch (error) {
            console.error(`Error updating comment: ${error}`)
        }
    }
}

interface InputControllerProps {
    handleSubmit: () => void
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setShowTagDropDown: React.Dispatch<React.SetStateAction<boolean>>
    newMessage: any
    setNewMessage: React.Dispatch<React.SetStateAction<any>>
    reRenderCounter: number
    setReRenderCounter: React.Dispatch<React.SetStateAction<number>>
    charCount: number
    setCharCount: React.Dispatch<React.SetStateAction<number>>
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const InputController: FC<InputControllerProps> = ({
    handleSubmit,
    setShowTagDropDown,
    setSearchTerm,
    newMessage,
    setNewMessage,
    reRenderCounter,
    setReRenderCounter,
    charCount,
    setCharCount,
    editMode,
    setEditMode,
}) => {
    const currentUser: any = useCurrentUser()
    const {
        errors,
        setErrors,
        activeTagData,
        activeConversation,
        setActiveConversation,
    } = useContext(ViewContext)

    const throwCharacterLimitError = () => {
        const error = {
            id: "characterLimitError",
            title: "Character limit exceeded",
            body: "The character limit for each message is 500 characters",
            variant: "danger",
        }
        setErrors({ ...errors, [error.id]: error })
    }

    const cancelEdit = () => {
        setEditMode(false)
        setNewMessage(undefined)
        setReRenderCounter(reRenderCounter + 1)
    }

    const saveComment = () => {
        if (!activeConversation) {
            console.error("Error saving comment: no active conversation")
            return
        }

        updateComment(
            activeTagData?.review?.id ?? "",
            activeConversation.id ?? "",
            newMessage,
            newMessage.text,
            activeConversation,
            setActiveConversation,
        )
        cancelEdit()
    }

    return (
        <Controls>
            <PhotoAndInputWrapper>
                <div>
                    <PersonPhoto
                        personId={currentUser._info.localAccountId}
                        size="large"
                    />
                </div>
                <StyledInputField>
                    <InputField
                        setSearchTerm={setSearchTerm}
                        setShowTagDropDown={setShowTagDropDown}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        reRenderCounter={reRenderCounter}
                        charCount={charCount}
                        setCharCount={setCharCount}
                        editMode={editMode}
                    />
                </StyledInputField>
            </PhotoAndInputWrapper>
            <InputButtonWrapper>
                <StyledCheckbox label="Send to contractor" />
                { editMode ? (
                    <EditControls>
                        <Button
                            title="cancel edit"
                            onClick={() => cancelEdit()}
                            variant="ghost"
                        >
                            Cancel
                        </Button>
                        <Button
                            title="save edit"
                            onClick={() => saveComment()}
                        >
                            <Icon data={save} />
                            Save
                        </Button>
                    </EditControls>
                ) : (
                    <Button
                        title={charCount > 500 ? "character limit exeeded" : "send message"}
                        onClick={charCount > 500 ? throwCharacterLimitError : handleSubmit}
                        variant="ghost"
                    >
                        <Icon data={send} />
                    </Button>
                )}
            </InputButtonWrapper>
        </Controls>
    )
}

export default InputController