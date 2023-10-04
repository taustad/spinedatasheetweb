import React, { FC, useContext } from "react"
import {
    Button, Icon, Checkbox,
} from "@equinor/eds-core-react"
import { useCurrentUser } from "@equinor/fusion"
import { PersonPhoto } from "@equinor/fusion-components"
import styled from "styled-components"
import { send } from "@equinor/eds-icons"
import InputField from "./InputField"
import { ViewContext } from "../../../../Context/ViewContext"

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

const PhotoAndInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 5px 5px 5px;
`

const StyledInputField = styled.div`
    align-items: left;
    width: 90%
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
    charCount: number
    setCharCount: React.Dispatch<React.SetStateAction<number>>
}

const InputController: FC<InputControllerProps> = ({
    handleSubmit,
    setShowTagDropDown,
    setSearchTerm,
    newMessage,
    setNewMessage,
    reRenderCounter,
    charCount,
    setCharCount,
}) => {
    const currentUser: any = useCurrentUser()
    const { errors, setErrors } = useContext(ViewContext)

    const throwCharacterLimitError = () => {
        const error = {
            id: "characterLimitError",
            title: "Character limit exceeded",
            body: "The character limit for each message is 500 characters",
            variant: "danger",
        }
        setErrors({ ...errors, [error.id]: error })
    }

    return (
        <Controls>
            <PhotoAndInputWrapper>
                <div>
                    <PersonPhoto
                        personId={currentUser._info.localAccountId}
                        size="large"
                    />
                </div>
                <StyledInputField>
                    <InputField
                        setSearchTerm={setSearchTerm}
                        setShowTagDropDown={setShowTagDropDown}
                        newReviewComment={newMessage}
                        setNewReviewComment={setNewMessage}
                        reRenderCounter={reRenderCounter}
                        charCount={charCount}
                        setCharCount={setCharCount}
                    />
                </StyledInputField>
            </PhotoAndInputWrapper>
            <InputButtonWrapper>
                <StyledCheckbox label="Send to contractor" />
                <Button
                    title={charCount > 500 ? "character limit exeeded" : "send message"}
                    onClick={charCount > 500 ? throwCharacterLimitError : handleSubmit}
                    variant="ghost"
                >
                    <Icon data={send} />
                </Button>
            </InputButtonWrapper>
        </Controls>
    )
}

export default InputController