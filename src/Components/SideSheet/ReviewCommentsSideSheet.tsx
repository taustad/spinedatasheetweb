import React, { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@equinor/eds-core-react"
import { GetCommentService } from "../../api/CommentService"
import { ReviewComment } from "../../Models/ReviewComment"
import { Input } from "@equinor/eds-core-react"
import { useParams } from "react-router-dom"
import { useCurrentUser } from "@equinor/fusion"
import styled from "styled-components"


const CommentView = styled.div`
    padding: 0 20px;
    overflow-y: auto;
`

const Controls = styled.div`
    padding: 20px;
    position: sticky;
    bottom: 0;
    background-color: white;
    border-top: 1px solid LightGray;
   display: flex;
   flex-direction: row;
`

type ReviewCommentsSideSheetProps = {
    currentProperty: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const ReviewCommentsSideSheet: React.FC<ReviewCommentsSideSheetProps> = ({
    currentProperty,
    reviewComments,
    setReviewComments,
}) => {
    const [newReviewComment, setNewReviewComment] = useState<ReviewComment>()
    const [width, setWidth] = useState<number>(500)
    const { tagId } = useParams<Record<string, string | undefined>>()
    const currentUser: any = useCurrentUser()

    const getCommentsForProperty = (property: string) =>
        reviewComments.filter((comment) => comment.property === property)

    const listCommentsForProperty = (property: string) =>
        getCommentsForProperty(property).map((comment) => {
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
                <div key={comment.id}>
                    <p>{formattedDate}</p>
                    <p>{comment.commenterName}</p>
                    <p>{comment.text}</p>
                    <br />
                </div>
            )
        })

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const comment = { ...newReviewComment }
        comment.text = event.target.value
        setNewReviewComment(comment)
    }

    const handleSubmit = async () => {
        const comment = { ...newReviewComment }
        comment.tagDataId = tagId
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

    const sideSheetContent = (property: string) => {
        return (
            <>
                {currentProperty !== "" && <h2>{property}</h2>}
                {listCommentsForProperty(property)}
                <Input
                    type="text"
                    onChange={handleCommentChange}
                    value={newReviewComment?.text ?? ""}
                ></Input>
                <Button onClick={handleSubmit}>Submit</Button>
            </>
        )
    }

    return (
        <>
            <CommentView className="commentView">
                {currentProperty !== "" && <h2>{currentProperty}</h2>}
                {listCommentsForProperty(currentProperty)}
            </CommentView>
            <Controls>
                <Input
                    type="text"
                    onChange={handleCommentChange}
                    value={newReviewComment?.text ?? ""}
                ></Input>
                <Button onClick={handleSubmit}>Submit</Button>
            </Controls>
        </>
    )
}

export default ReviewCommentsSideSheet
