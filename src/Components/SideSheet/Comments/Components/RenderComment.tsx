import React, {
    Dispatch, FC, SetStateAction, useRef, useState,
} from "react"
import { styled } from "styled-components"
import {
    Button, Icon, Input, Popover, Typography,
} from "@equinor/eds-core-react"
import {
    delete_to_trash, edit,
} from "@equinor/eds-icons"
import { Message } from "../../../../Models/Message"
import { GetCommentService } from "../../../../api/CommentService"

const CommentText = styled(Typography)`
    margin: 10px 0;
`

const SubmitEditButton = styled(Button)`
    margin-right: 15px;
`

interface RenderCommentProps {
    comment: Message,
    isUpdateMode: boolean,
    setUpdateMode: any,
    reviewComments: Message[],
    setReviewComments: Dispatch<SetStateAction<Message[]>>
    isCurrentUser: boolean
}

const updateComment = async (
    newCommentText: string,
    comment: Message,
    reviewComments: Message[],
    setReviewComments: Dispatch<SetStateAction<Message[]>>,
) => {
    if (newCommentText && comment.id) {
        try {
            const commentService = await GetCommentService()
            const newComment = { ...comment }
            newComment.text = newCommentText
            const updatedComment = await commentService.updateComment(comment.id, newComment)
            const newReviewComments = reviewComments.map((c) => (c.id !== comment.id ? c : updatedComment))
            setReviewComments(newReviewComments)
        } catch (error) {
            console.error(`Error updating comment: ${error}`)
        }
    }
}

const deleteComment = async (
    comment: Message,
    reviewComments: Message[],
    setReviewComments: Dispatch<SetStateAction<Message[]>>,
) => {
    if (comment.id) {
        try {
            const service = await GetCommentService()
            const response = await service.deleteComment(comment.id)
            if (response === 204) {
                const deletedComment = { ...reviewComments.find((c) => c.id === comment.id) }
                deletedComment.softDeleted = true
                const newReviewComments = reviewComments.map((c) => (c.id !== comment.id ? c : deletedComment))
                setReviewComments(newReviewComments)
            } else {
                throw new Error(`delete failed with status code '${response}'`)
            }
        } catch (error) {
            console.error(`Error deleting comment: ${error}`)
        }
    }
}

const RenderComment: FC<RenderCommentProps> = ({
    comment, isUpdateMode, setUpdateMode, reviewComments, setReviewComments, isCurrentUser,
}) => {
    const [editedComment, setEditedComment] = useState(comment.text || "")
    const [open, setOpen] = useState(false)

    const editComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEditedComment(e.target.value)
    const cancelEdit = () => setUpdateMode(false)
    const saveComment = () => {
        updateComment(editedComment, comment, reviewComments, setReviewComments)
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
                    value={editedComment}
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
                    comment.softDeleted ? "Message deleted by user" : comment.text
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
                        onClick={() => deleteComment(comment, reviewComments, setReviewComments)}
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