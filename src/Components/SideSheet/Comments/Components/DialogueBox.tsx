import React, { FC } from "react"
import styled from "styled-components"
import { Button, Icon } from "@equinor/eds-core-react"
import { delete_to_trash } from "@equinor/eds-icons"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"

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
}

const handleDelete = async (id: string | undefined) => {
    if (id !== undefined) {
        try {
            const service = await GetCommentService()
            await service.deleteComment(id)
        } catch (error) {
            console.log(`Error deleting comment: ${error}`)
        }
    }
}

const DialogueBox: FC<DialogueBoxProps> = ({ comment, formattedDate }) => (
    <Container key={comment.id}>
        <Header>
            <p>{comment.commenterName}</p>
            <p>{formattedDate}</p>
        </Header>
        <Message>
            <p>{comment.text}</p>
            <Button variant="ghost_icon" onClick={(e: any) => handleDelete(comment.id)} title="Delete">
                <Icon
                    data={delete_to_trash}
                    size={16}
                    color="#007079"
                />
            </Button>
        </Message>

    </Container>
)

export default DialogueBox
