import React, { FC } from "react"
import styled from "styled-components"
import { ReviewComment } from "../../../Models/ReviewComment"

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

const DialogueBox: FC<DialogueBoxProps> = ({ comment, formattedDate }) => (
    <Container key={comment.id}>
        <Header>
            <p>{comment.commenterName}</p>
            <p>{formattedDate}</p>
        </Header>
        <Message>
            <p>{comment.text}</p>
        </Message>

    </Container>
    )

export default DialogueBox
