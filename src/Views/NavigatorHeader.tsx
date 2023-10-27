
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import LocalNavigation from "../Components/SideSheet/Components/LocalNavigation"
import Dialogue from "../Components/Dialogue"

const Wrapper = styled.div`
    padding: 15px;
`

const LandingPage = () => {
        const tabPath: { [index: number]: string } = {
        0: "/tags",
        1: "/containers",
    }

const initialActiveTab = Object.entries(tabPath)
    .find(([index, path]) => path.slice(1) === window.location.pathname.split("/").pop())?.[0] || "0"

    const [activeTab, setActiveTab] = useState<number>(parseInt(initialActiveTab, 10))
    const Navigationbuttons = ["Tags", "Containers"]

    const navigate = useNavigate()
    const { projectId } = useParams<Record<string, string | undefined>>()
    const currentProject = useCurrentContext()

    useEffect(() => {
        if (projectId) {
            const currentPath = `/${projectId}${tabPath[activeTab]}`
            if (window.location.pathname !== currentPath) {
                navigate(currentPath)
            }
        }
    }, [projectId, navigate, activeTab])

        if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    return (
        <>
            <Wrapper>
                <LocalNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    buttons={Navigationbuttons}
                />
            </Wrapper>
            <Outlet />
        </>
    )
}

export default LandingPage