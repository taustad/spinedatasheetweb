import React, { FC } from "react"
import {
    Button, Icon, Checkbox,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { send } from "@equinor/eds-icons"
import InputField from "./InputField"

const Controls = styled.div`
    padding: 30px 15px 10px 15px;
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
const StyledCheckbox = styled(Checkbox)`
    margin-left: -15px;
`

interface InputControllerProps {
    handleSubmit: () => void
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setShowTagDropDown: React.Dispatch<React.SetStateAction<boolean>>
    newMessage: any
    setNewMessage: React.Dispatch<React.SetStateAction<any>>
    reRenderCounter: number
}

const InputController: FC<InputControllerProps> = ({
    handleSubmit,
    setShowTagDropDown,
    setSearchTerm,
    newMessage,
    setNewMessage,
    reRenderCounter,
}) => (
    <Controls>
        <InputField
            setSearchTerm={setSearchTerm}
            setShowTagDropDown={setShowTagDropDown}
            newReviewComment={newMessage}
            setNewReviewComment={setNewMessage}
            reRenderCounter={reRenderCounter}
        />
        <InputButtonWrapper>
            <StyledCheckbox label="Send to contractor" />
            <Button onClick={handleSubmit} variant="ghost">
                <Icon data={send} />
            </Button>
        </InputButtonWrapper>
    </Controls>
    )

export default InputController
