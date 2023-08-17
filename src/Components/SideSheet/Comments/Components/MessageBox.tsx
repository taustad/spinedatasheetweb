import React, {
    Dispatch, FC, SetStateAction, useState,
} from "react"
import styled from "styled-components"
import {
    Button, Icon,
} from "@equinor/eds-core-react"
import { delete_to_trash, edit } from "@equinor/eds-icons"
import { useCurrentUser } from "@equinor/fusion"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"
import RenderComment from "./RenderComment"

const Container = styled.div<{ commentIsByCurrentUser: boolean }>`
    align-self: ${(props) => (props.commentIsByCurrentUser ? "flex-end" : "flex-start")};
    border-radius: 5px;
    margin: 5px 0;
    padding: 10px;
    background-color: ${(props) => (props.commentIsByCurrentUser ? "#132634" : "white")};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    p, & p {
        color: ${(props) => (props.commentIsByCurrentUser ? "white" : "black")};
    }
`

interface MessageBoxProps {
    messageObject: ReviewComment
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
    userId?: string
    isCurrentUser: boolean
}

const deleteComment = async (
    messageObject: ReviewComment,
    reviewComments: ReviewComment[],
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>,
) => {
    if (messageObject.id) {
        try {
            const service = await GetCommentService()
            await service.deleteComment(messageObject.id)
            const newReviewComments = reviewComments.filter((c) => (c.id !== messageObject.id))
            setReviewComments(newReviewComments)
        } catch (error) {
            console.error(`Error deleting comment: ${error}`)
        }
    }
}

const MessageBox: FC<MessageBoxProps> = ({
    messageObject, reviewComments, setReviewComments, userId, isCurrentUser,
}) => {
    const [isUpdateMode, setUpdateMode] = useState(false)

    return (
        <Container key={messageObject.id} commentIsByCurrentUser={isCurrentUser}>
            <div>
                <RenderComment
                    comment={messageObject}
                    isUpdateMode={isUpdateMode}
                    setUpdateMode={setUpdateMode}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
                {isCurrentUser && !isUpdateMode && (
                <>
                    <Button
                        variant="ghost_icon"
                        onClick={() => setUpdateMode((prevMode) => !prevMode)}
                        title="Edit comment"
                    >
                        <Icon data={edit} size={16} color="#007079" />
                    </Button>
                    <Button
                        variant="ghost_icon"
                        onClick={(e: any) => deleteComment(messageObject, reviewComments, setReviewComments)}
                        title="Delete"
                    >
                        <Icon data={delete_to_trash} size={16} color="#007079" />
                    </Button>
                </>
                )}
            </div>
        </Container>
    )
}

export default MessageBox
