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

const Container = styled.div`
    margin: 15px;
    padding: 10px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: #6a6a6a;
`

const Message = styled.div``

interface DialogueBoxProps {
    comment: ReviewComment
    formattedDate: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
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
    comment, formattedDate, reviewComments, setReviewComments,
}) => {
    const [isUpdateMode, setUpdateMode] = useState(false)
    const currentUser: any = useCurrentUser()

    return (
        <Container key={comment.id}>
            <Header>
                <Typography>{comment.commenterName}</Typography>
                <Typography>{formattedDate}</Typography>
            </Header>
            <Message>
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
            </Message>
        </Container>
    )
}

export default DialogueBox
