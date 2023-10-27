
import React, { useState } from "react"
import ReviewButton from "../Components/Buttons/ReviewButton"

const ContainerView = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            <ReviewButton />
            <h1>ContainerView</h1>
        </div>
    )
    }

export default ContainerView