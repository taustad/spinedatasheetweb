import React, {
    Dispatch, FC, SetStateAction, useContext, useRef, useState,
} from "react"
import { styled } from "styled-components"
import {
    Button, Icon, Input, Popover, Typography,
} from "@equinor/eds-core-react"
import {
    delete_to_trash, edit,
} from "@equinor/eds-icons"
import { Message } from "../../../../Models/Message"
import { GetConversationService } from "../../../../api/ConversationService"
import { Conversation } from "../../../../Models/Conversation"
import { ViewContext } from "../../../../Context/ViewContext"
import { unescapeHtmlEntities } from "../../../../utils/helpers"

const CommentText = styled(Typography)`
    margin: 10px 0;

    span {
        color: #3aadb6;
        font-weight: 500;
    }
`

const SubmitEditButton = styled(Button)`
    margin-right: 15px;
`
function wrapInSpan(inputString: string): (string | JSX.Element)[] {
    const parts = inputString.split(/{{(.*?)}}/)

    let isNextSpan = false
    return parts.map((part, index) => {
        if (isNextSpan) {
            isNextSpan = false
            return <span key={`${part}-${index}`}>{part}</span>
        }
        isNextSpan = true
        return part
    })
}

interface RenderCommentProps {
    comment: Message,
    isUpdateMode: boolean,
    setUpdateMode: any,
    isCurrentUser: boolean,
}

const updateComment = async (
    reviewId: string,
    activeConversationId: string,
    comment: Message,
    newCommentText: string,
    activeConversation: Conversation,
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>,
) => {
    if (newCommentText && comment.id) {
        try {
            const newComment = { ...comment }
            newComment.text = newCommentText
            const commentService = await GetConversationService()
            const updatedComment = await commentService.updateMessage(reviewId, activeConversationId, comment.id, newComment)
            const updatedMessages = activeConversation.messages?.map((m) => (m.id !== comment.id ? m : updatedComment))
            const updatedConversation = { ...activeConversation }
            updatedConversation.messages = updatedMessages
            setActiveConversation(updatedConversation)
        } catch (error) {
            console.error(`Error updating comment: ${error}`)
        }
    }
}

const deleteComment = async (
    reviewId: string,
    activeConversationId: string,
    message: Message,
    activeConversation: Conversation,
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>,
) => {
    if (message.id && activeConversation && activeConversation.messages) {
        try {
            const service = await GetConversationService()
            const response = await service.deleteMessage(reviewId, activeConversationId, message.id)
            if (response === 204) {
                const deletedMessage = { ...activeConversation.messages?.find((m) => m.id === message.id) }
                deletedMessage.softDeleted = true
                deletedMessage.text = ""
                const updatedMessages = activeConversation.messages?.map((m) => (m.id !== message.id ? m : deletedMessage))
                const updatedConversation = { ...activeConversation }
                updatedConversation.messages = updatedMessages
                setActiveConversation(updatedConversation)
            } else {
                throw new Error(`delete failed with status code '${response}'`)
            }
        } catch (error) {
            console.error(`Error deleting comment: ${error}`)
        }
    }
}

const RenderComment: FC<RenderCommentProps> = ({
    comment,
    isUpdateMode,
    setUpdateMode,
    isCurrentUser,
}) => {
    const [editedMessageText, setEditedMessageText] = useState(comment.text || "")
    const [open, setOpen] = useState(false)

    const {
        activeTagData, conversations, activeConversation, setActiveConversation,
    } = useContext(ViewContext)

    if (!activeConversation) { return (<>Error loading conversation</>) }

    const editComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEditedMessageText(e.target.value)
    const cancelEdit = () => setUpdateMode(false)
    const saveComment = () => {
        updateComment(
            activeTagData?.review?.id ?? "",
            activeConversation.id ?? "",
            comment,
            editedMessageText,
            activeConversation,
            setActiveConversation,
        )
        cancelEdit()
    }

    const anchorRef = useRef<HTMLParagraphElement>(null)

    let timer: ReturnType<typeof setTimeout> | null = null
    const openPopover = () => setOpen(true)
    const closePopover = () => setOpen(false)
    const handleHover = () => {
        if (timer) {
            clearTimeout(timer)
        }
        if (!isCurrentUser || comment.softDeleted) {
            return
        }
        timer = setTimeout(() => {
            openPopover()
        }, 100)
    }

    const handleClose = () => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            closePopover()
        }, 100)
    }

    if (isUpdateMode) {
        return (
            <div>
                <Input
                    as="textarea"
                    type="text"
                    value={editedMessageText}
                    onChange={editComment}
                />
                <SubmitEditButton variant="ghost" onClick={cancelEdit}>Cancel</SubmitEditButton>
                <SubmitEditButton variant="contained" onClick={saveComment}>Save</SubmitEditButton>
            </div>
        )
    }
    return (
        <div>
            <CommentText
                aria-expanded={open}
                ref={anchorRef}
                onMouseOver={handleHover}
                onFocus={handleHover}
                onBlur={handleClose}
                onMouseOut={handleClose}
            >
                {
                    comment.softDeleted ? "Message deleted by user" : wrapInSpan(unescapeHtmlEntities(comment.text || ""))
                }
            </CommentText>
            <Popover
                anchorEl={anchorRef.current}
                onClose={handleClose}
                open={open}
                placement="top"
                withinPortal
                onMouseOver={handleHover}
                onMouseLeave={handleClose}
            >
                <Popover.Header>
                    <Button
                        variant="ghost_icon"
                        onClick={() => setUpdateMode((prevMode: boolean) => !prevMode)}
                        title="Edit comment"
                    >
                        <Icon data={edit} size={16} color="#007079" />
                    </Button>
                    <Button
                        variant="ghost_icon"
                        onClick={() => deleteComment(
                            activeTagData?.review?.id ?? "",
                            activeConversation?.id ?? "",
                            comment,
                            activeConversation,
                            setActiveConversation,
                        )}
                        title="Delete"
                    >
                        <Icon data={delete_to_trash} size={16} color="#007079" />
                    </Button>
                </Popover.Header>
            </Popover>
        </div>
    )
}

export default RenderComment