import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import styled from "styled-components"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"
import MessageBox from "./MessageBox"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import { formatDate } from "../../../../utils/helpers"
import ClusteredMessages from "./ClusteredMessages"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Conversation = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

type CommentViewProps = {
    currentProperty: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const CommentView: React.FC<CommentViewProps> = ({
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
            <Conversation>
                <ClusteredMessages
                    comments={getCommentsForProperty(currentProperty)}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
            </Conversation>
            <InputController
                value={newReviewComment?.text ?? ""}
                handleCommentChange={handleCommentChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default CommentView
