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
import { Message } from "../../../../Models/Message"
import MessageBox from "./MessageBox"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import { formatDate } from "../../../../utils/helpers"
import ClusteredMessages from "./ClusteredMessages"
import { Conversation } from "../../../../Models/Conversation"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const ConversationDiv = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

type CommentViewProps = {
    currentProperty: string
    reviewComments: Message[]
    conversations: Conversation[]
    setReviewComments: Dispatch<SetStateAction<Message[]>>
}

const CommentView: React.FC<CommentViewProps> = ({
    currentProperty,
    reviewComments,
    conversations,
    setReviewComments,
}) => {
    const [newReviewComment, setNewReviewComment] = useState<Message>()
    const { activeTagData } = useContext(ViewContext)
    const { tagId } = useParams<Record<string, string | undefined>>()
    const currentUser: any = useCurrentUser()

    const getCommentsForProperty = (property: string) => (
        conversations.filter((conversation) => conversation.property === property)
    )

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const comment = { ...newReviewComment }
        comment.text = event.target.value
        setNewReviewComment(comment)
    }

    const handleSubmit = async () => {
        console.log("Submit comment")
        // const comment = { ...newReviewComment }
        // comment.tagDataReviewId = activeTagData?.review?.id
        // comment.commentLevel = 0
        // comment.property = currentProperty
        // comment.createdDate = new Date().toISOString()
        // comment.userId = currentUser?._info.localAccountId
        // comment.commenterName = currentUser?._info.name
        // try {
        //     const service = await GetCommentService()
        //     const savedComment = await service.createComment(comment)
        //     setReviewComments([...reviewComments, savedComment])
        // } catch (error) {
        //     console.log(`Error creating comment: ${error}`)
        // }
        // setNewReviewComment(undefined)
    }

    return (
        <Container>
            <ConversationDiv>
                <ClusteredMessages
                    comments={getCommentsForProperty(currentProperty)}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
            </ConversationDiv>
            <InputController
                value={newReviewComment?.text ?? ""}
                handleCommentChange={handleCommentChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default CommentView
