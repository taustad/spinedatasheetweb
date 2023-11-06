import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { GetTagDataService } from "../../api/TagDataService"
import { TagData } from "../../Models/TagData"
import TagComparisonTable from "../TagComparisonTable/TagComparisonTable"
import Dialogue from "../Dialogue"

const ContainerTable = () => {
    const currentProject = useCurrentContext()

    const [externalId, setExternalId] = useState<string | undefined>()
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)

    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    useEffect(() => {
        let isCancelled = false;

        (async () => {
            if (externalId !== undefined) {
                setError(false)
                setIsLoading(false)
                try {
                    setIsLoading(true)

                    const allTagData = await (
                        await GetTagDataService()
                    ).getAllTagData()

                    if (!isCancelled) {
                        setTagData(allTagData)
                        setIsLoading(false)
                    }
                } catch {
                    if (!isCancelled) {
                        console.error("Error loading tags")
                        setError(true)
                    }
                }
            }
        })()

        return () => {
            isCancelled = true
        }
    }, [externalId])

        if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    if (error) {
        return <Dialogue type="error" message="Error loading tags" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tags..." />
    }

    if (!tagData || tagData.length === 0) {
        return <Dialogue type="error" message="No tags found in this project" />
    }

    return (
        <TagComparisonTable tags={tagData} />
    )
}

export default ContainerTable