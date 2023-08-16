import React, { FC } from "react"
import {
 Input, Button, Icon, Checkbox,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { send } from "@equinor/eds-icons"

const Controls = styled.div`
    width: 100%;
    padding: 30px 15px 10px 15px;
    position: sticky;
    bottom: 0;
    background-color: white;
    border-top: 1px solid LightGray;
    display: flex;
    flex-direction: column;
`

const InputButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

interface InputControllerProps {
    value: string
    handleCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleSubmit: () => void
}

const InputController: FC<InputControllerProps> = ({
    value,
    handleCommentChange,
    handleSubmit,
}) => (
    <Controls>
        <Input
            as="textarea"
            type="text"
            placeholder="Write a comment..."
            onChange={handleCommentChange}
            value={value}
            rows={3}
        />
        <InputButtonWrapper>
            <Checkbox label="Send to contractor" />
            <Button onClick={handleSubmit} variant="ghost">
                <Icon data={send} />
            </Button>
        </InputButtonWrapper>
    </Controls>
    )

export default InputController
