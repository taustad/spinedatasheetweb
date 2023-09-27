import React, { useRef, useState } from "react"
import { Button, Dialog, Icon } from "@equinor/eds-core-react"
import styled from "styled-components"
import { chevron_down, chevron_up } from "@equinor/eds-icons"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const DropButton = styled(Button)`
    width: 30px;
`
const Confirmation = styled(Dialog)`
    width: 400px;
`

const DropDownButton = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #007078;
    border-radius: 4px;
    position: relative;
`

const AbandonButton = styled(Button)`
    background-color: #34444F;
    position: absolute;
    width: 100%;
    top: 36px;
    left: 0;
    & span {
        justify-content: flex-start;
    }
`

const ReviewButton = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [dialogMessage, setDialogMessage] = useState("")
    const [actionType, setActionType] = useState("")
    const dropButtonRef = useRef(null)

    const openDialog = (message: string, action: string) => {
        setDialogMessage(message)
        setActionType(action)
        setDialogOpen(true)
    }

    const handleConfirm = () => {
        if (actionType === "complete") {
            console.log("Review completed")
        } else if (actionType === "abandon") {
            console.log("Review abandoned")
        }
        setDialogOpen(false)
        setDropdownOpen(false)
    }

    const handleCancel = () => {
        setDialogOpen(false)
        setDropdownOpen(false)
    }

    return (
        <DropDownButton>
            <Wrapper>
                <Button onClick={() => openDialog("Are you sure you want to finish the review?", "complete")}> Finish Review </Button>
                <DropButton
                    ref={dropButtonRef}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {
                        dropdownOpen ? (
                            <Icon data={chevron_up} />
                        ) : (
                            <Icon data={chevron_down} />
                        )
                    }
                </DropButton>
            </Wrapper>
            {dropdownOpen && (
                <AbandonButton onClick={() => openDialog("Are you sure you want to abandon the review?", "abandon")}> Abandon Review </AbandonButton>
            )}

            <Confirmation open={isDialogOpen} onClose={() => setDialogOpen(false)}>
                <Dialog.Header>
                    <Dialog.Title>
                        {actionType === "complete" ? "Complete Review" : "Abandon Review"}
                    </Dialog.Title>
                </Dialog.Header>
                <Dialog.Content>
                    {dialogMessage}
                </Dialog.Content>
                <Dialog.Actions>
                    <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </Dialog.Actions>
            </Confirmation>
        </DropDownButton>
    )
}

export default ReviewButton
