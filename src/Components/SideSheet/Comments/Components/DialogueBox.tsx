import React, {
    Dispatch, FC, SetStateAction, useState,
} from "react"
import styled from "styled-components"
import {
    Button, Icon, Typography,
} from "@equinor/eds-core-react"
import { delete_to_trash, edit } from "@equinor/eds-icons"
import { useCurrentUser } from "@equinor/fusion"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"
import RenderComment from "./RenderComment"

const Container = styled.div<{ commentIsByCurrentUser: boolean }>`
    align-self: ${(props) => (props.commentIsByCurrentUser ? "flex-end" : "flex-start")};
    max-width: 800px;
    border-radius: 5px;
    margin: 15px;
    padding: 10px;
    background-color: ${(props) => (props.commentIsByCurrentUser ? "#132634" : "white")};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    p, & p {
        color: ${(props) => (props.commentIsByCurrentUser ? "white" : "black")};
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0.6;

    
`

const TimeStamp = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    p:first-of-type {
        margin-right: 5px;
    }
`

interface DialogueBoxProps {
    comment: ReviewComment
    formattedDate: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
    commentIsByCurrentUser: boolean
}

const deleteComment = async (
    comment: ReviewComment,
    reviewComments: ReviewComment[],
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>,
) => {
    if (comment.id) {
        try {
            const service = await GetCommentService()
            await service.deleteComment(comment.id)
            const newReviewComments = reviewComments.filter((c) => (c.id !== comment.id))
            setReviewComments(newReviewComments)
        } catch (error) {
            console.error(`Error deleting comment: ${error}`)
        }
    }
}

const DialogueBox: FC<DialogueBoxProps> = ({
    comment, formattedDate, reviewComments, setReviewComments, commentIsByCurrentUser,
}) => {
    const [isUpdateMode, setUpdateMode] = useState(false)
    const currentUser: any = useCurrentUser()

    return (
        <Container key={comment.id} commentIsByCurrentUser={commentIsByCurrentUser}>
            <Header>
                <Typography variant="meta">{comment.commenterName}</Typography>
                <TimeStamp>
                    {comment.isEdited
                    ? (
                        <>
                            <Typography variant="meta">{formattedDate}</Typography>
                            <Typography variant="meta"><strong>(Edited)</strong></Typography>
                        </>
                    )
                    : <Typography variant="meta">{formattedDate}</Typography>}
                </TimeStamp>
            </Header>
            <div>
                <RenderComment
                    comment={comment}
                    isUpdateMode={isUpdateMode}
                    setUpdateMode={setUpdateMode}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
                {currentUser?._info.localAccountId === comment.userId
                    && !isUpdateMode && (
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
                                onClick={(e: any) => deleteComment(comment, reviewComments, setReviewComments)}
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

export default DialogueBox
