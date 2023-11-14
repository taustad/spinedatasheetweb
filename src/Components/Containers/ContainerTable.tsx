import React, { useState, useEffect } from "react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { useOutletContext } from "react-router-dom"
import TagComparisonTable from "../TagComparisonTable/TagComparisonTable"
import Dialogue from "../Dialogue"

const ContainerTable = () => {
    const currentProject = useCurrentContext()
    const [,, tagsInContainer] = useOutletContext<any>()
    const [externalId, setExternalId] = useState<string | undefined>()

    console.log("tagsInContainer", tagsInContainer)
    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])
        if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    if (!tagsInContainer || tagsInContainer.length === 0) {
        return <Dialogue type="error" message="No tags found in this project" />
    }

    return (
        <TagComparisonTable tags={tagsInContainer} />
    )
}

export default ContainerTable