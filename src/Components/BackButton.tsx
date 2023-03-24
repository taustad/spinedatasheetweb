import { useNavigate } from "react-router-dom"
import { arrow_back } from "@equinor/eds-icons"
import { Icon } from "@equinor/eds-core-react"

export function BackButton() {
    const navigate = useNavigate()

    return (
        <Icon
            data={arrow_back}
            color="#007079"
            onClick={() => navigate(-1)}
            size={24}
            title="Back to previous page"
        />
    )
}
