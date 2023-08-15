import React, {
    Dispatch, FC, SetStateAction, useState,
} from "react"
import { styled } from "styled-components"
import { Button, Input, Typography } from "@equinor/eds-core-react"
import { ReviewComment } from "../../../../Models/ReviewComment"
import { GetCommentService } from "../../../../api/CommentService"

const SubmitEditButton = styled(Button)`
    margin-right: 15px;
`

const EditedText = styled(Typography)`
    font-size: smaller;
    font-weight: bold;
    font-style: italic;
    color: #6a6a6a;
`

interface RenderCommentProps {
    comment: ReviewComment,
    isUpdateMode: boolean,
    setUpdateMode: any,
    reviewComments: ReviewComment[],
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const formatDate = (dateString: string | null | undefined) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
    }
    return dateString ? new Date(dateString).toLocaleDateString("no-NO", options) : ""
}

const updateComment = async (
    newCommentText: string,
    comment: ReviewComment,
    reviewComments: ReviewComment[],
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>,
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

const RenderComment: FC<RenderCommentProps> = ({
    comment, isUpdateMode, setUpdateMode, reviewComments, setReviewComments,
}) => {
    const [editedComment, setEditedComment] = useState(comment.text || "")

    const editComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedComment(e.target.value)
    }

    const cancelEdit = () => {
        setUpdateMode(false)
    }

    const saveComment = () => {
        updateComment(editedComment, comment, reviewComments, setReviewComments)
        cancelEdit()
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
                <br />
                <SubmitEditButton variant="ghost" onClick={cancelEdit}>Cancel</SubmitEditButton>
                <SubmitEditButton variant="contained" onClick={saveComment}>Save</SubmitEditButton>
            </div>
        )
    }
    return (
        <div>
            <Typography>
                {comment.text}
            </Typography>
            <br />
            <EditedText>
                {comment.isEdited ? `Edited ${formatDate(comment.modifiedDate)}` : ""}
            </EditedText>
        </div>
    )
}

export default RenderComment