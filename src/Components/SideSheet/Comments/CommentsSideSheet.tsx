import React, {
    Dispatch, SetStateAction, useContext, useState,
} from "react"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import styled from "styled-components"
import { GetCommentService } from "../../../api/CommentService"
import { ReviewComment } from "../../../Models/ReviewComment"
import DialogueBox from "./Components/DialogueBox"
import InputController from "./Components/InputController"
import { ViewContext } from "../../../Context/ViewContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
`

const CommentView = styled.div`
    overflow-y: auto;
`

type CommentsSideSheetProps = {
    currentProperty: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const CommentsSideSheet: React.FC<CommentsSideSheetProps> = ({
    currentProperty,
    reviewComments,
    setReviewComments,
}) => {
    const [newReviewComment, setNewReviewComment] = useState<ReviewComment>()

    const { activeTagData } = useContext(ViewContext)

    const { tagId } = useParams<Record<string, string | undefined>>()
    const currentUser: any = useCurrentUser()

    const getCommentsForProperty = (property: string) => (
        reviewComments.filter((comment) => comment.property === property)
    )

    const listCommentsForProperty = (property: string) => getCommentsForProperty(property).map((comment) => {
        const date = new Date(comment.createdDate ?? "")
        const formattedDate = date.toLocaleString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        })
        return (
            <DialogueBox comment={comment} formattedDate={formattedDate} />
        )
    })

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const comment = { ...newReviewComment }
        comment.text = event.target.value
        setNewReviewComment(comment)
    }

    const handleSubmit = async () => {
        const comment = { ...newReviewComment }
        comment.tagDataReviewId = activeTagData?.review?.id
        comment.commentLevel = 0
        comment.property = currentProperty
        comment.createdDate = new Date().toISOString()
        comment.userId = currentUser?._info.localAccountId
        comment.commenterName = currentUser?._info.name
        try {
            const service = await GetCommentService()
            await service.createComment(comment)
            setReviewComments([...reviewComments, comment])
        } catch (error) {
            console.log(`Error creating comment: ${error}`)
        }
        setNewReviewComment(undefined)
    }

    return (
        <Container>
            <CommentView className="commentView">
                {listCommentsForProperty(currentProperty)}
            </CommentView>
            <InputController
                value={newReviewComment?.text ?? ""}
                handleCommentChange={handleCommentChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default CommentsSideSheet
