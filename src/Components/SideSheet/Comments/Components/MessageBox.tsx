import React, {
    Dispatch, FC, SetStateAction, useState,
} from "react"
import styled from "styled-components"
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
                    isCurrentUser={isCurrentUser}
                />
            </div>
        </Container>
    )
}

export default MessageBox
