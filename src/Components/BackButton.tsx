import React from "react"
import { useNavigate } from "react-router-dom"
import { arrow_back } from "@equinor/eds-icons"
import { Button, Icon } from "@equinor/eds-core-react"

export function BackButton() {
    const navigate = useNavigate()

    return (
        <Button variant="ghost_icon" onClick={() => navigate(-1)} title="Back to previous page">
            <Icon
                data={arrow_back}
                color="#007079"
                size={24}
            />
        </Button>
    )
}
