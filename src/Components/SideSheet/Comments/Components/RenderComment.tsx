import React, {
    Dispatch, FC, SetStateAction, useContext, useEffect, useRef, useState,
} from "react"
import { styled } from "styled-components"
import {
    Button, Icon, Input, Popover, Typography,
} from "@equinor/eds-core-react"
import {
    delete_to_trash, edit,
} from "@equinor/eds-icons"
import { Message } from "../../../../Models/Message"
import { Conversation } from "../../../../Models/Conversation"
import { ViewContext } from "../../../../Context/ViewContext"
import { wrapInSpan, sanitizeContent } from "../../../../utils/helpers"
import { GetMessageService } from "../../../../api/MessageService"

const Container = styled.div`
    max-width: 500px;
    word-wrap: break-word;
`

const CommentText = styled(Typography)`
    margin: 10px 0;

    span {
        color: #3aadb6;
        font-weight: 500;
    }
`

interface RenderCommentProps {
    comment: Message,
    initEditMode: (message: Message) => void,
    isCurrentUser: boolean,
}

const deleteComment = async (
    activeConversationId: string,
    message: Message,
    activeConversation: Conversation,
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>,
) => {
    if (message.id && activeConversation && activeConversation.messages) {
        try {
            const service = await GetMessageService()
            const response = await service.deleteMessage(activeConversationId, message.id)
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
    isCurrentUser,
    initEditMode,
}) => {
    const [open, setOpen] = useState(false)

    const {
        activeTagData, activeConversation, setActiveConversation,
    } = useContext(ViewContext)

    if (!activeConversation) { return (<>Error loading conversation</>) }

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

    return (
        <Container>
            <CommentText
                aria-expanded={open}
                ref={anchorRef}
                onMouseOver={handleHover}
                onFocus={handleHover}
                onBlur={handleClose}
                onMouseOut={handleClose}
                dangerouslySetInnerHTML={{
            __html: comment.softDeleted
                ? "Message deleted by user"
                : sanitizeContent(wrapInSpan(comment.text || "")),
        }}
            />
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
                        onClick={() => initEditMode(comment)}
                        title="Edit comment"
                    >
                        <Icon data={edit} size={16} color="#007079" />
                    </Button>
                    <Button
                        variant="ghost_icon"
                        onClick={() => deleteComment(
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
        </Container>
    )
}

export default RenderComment