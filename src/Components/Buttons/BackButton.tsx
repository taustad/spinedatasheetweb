import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { arrow_back } from "@equinor/eds-icons"
import { Button, Icon } from "@equinor/eds-core-react"
import { ViewContext } from "../../Context/ViewContext"

export function BackButton() {
    const { setCurrentProperty, setActiveTagData } = useContext(ViewContext)
    const navigate = useNavigate()

    const goBack = () => {
        setCurrentProperty("")
        setActiveTagData(undefined)
        navigate(-1)
    }

    return (
        <Button variant="ghost_icon" onClick={() => goBack()} title="Back to previous page">
            <Icon
                data={arrow_back}
                color="#007079"
                size={24}
            />
        </Button>
    )
}
