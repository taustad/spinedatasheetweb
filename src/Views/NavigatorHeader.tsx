
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import LocalNavigation from "../Components/SideSheet/Components/LocalNavigation"
import Dialogue from "../Components/Dialogue"

const Wrapper = styled.div`
    padding: 15px;
`

const LandingPage = () => {
        const tabPath: { [index: number]: string } = {
        0: "tags",
        1: "containers",
    }

    const [activeTab, setActiveTab] = useState<number>(0)
    const Navigationbuttons = ["Tags", "Containers"]

    const navigate = useNavigate()
    const currentProject = useCurrentContext()

    // makes sure the correct tab is active when project loads
    useEffect(() => {
        const pathMatchesActiveTab = window.location.pathname.split("/")[2] === tabPath[activeTab]
        const isOnRoot = window.location.pathname.split("/")[3] === undefined

        if (!pathMatchesActiveTab) {
            const activeTabFromPath = Object.keys(tabPath).find((key) => tabPath[parseInt(key, 10)] === window.location.pathname.split("/")[2])
            const isOnProjectRoot = window.location.pathname.split("/")[1] === currentProject.currentContext?.id
            && window.location.pathname.split("/")[2] === undefined

            if (activeTabFromPath) {
                setActiveTab(parseInt(activeTabFromPath, 10))
                if (isOnRoot) navigate(`/${currentProject.currentContext?.id}/${tabPath[parseInt(activeTabFromPath, 10)]}`)
            } else if (isOnProjectRoot) {
                // if on project root, we navigate to the first tab
                setActiveTab(0)
                navigate(`/${currentProject.currentContext?.id}/${tabPath[0]}`)
            }
        }
    }, [])

    // makes sure the correct tab is active when new project loads
    useEffect(() => {
        if (currentProject) {
           if (window.location.pathname === `/${currentProject.currentContext?.id}`) {
            setActiveTab(0)
            navigate(`/${currentProject.currentContext?.id}/${tabPath[0]}`)
           }
        }
    }, [currentProject])

    const changeTab = (activatedTab: number) => {
        setActiveTab(activatedTab)
        navigate(`/${currentProject.currentContext?.id}/${tabPath[activatedTab]}`)
    }

        if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    return (
        <>
            <Wrapper>
                <LocalNavigation
                    activeTab={activeTab}
                    setActiveTab={changeTab}
                    buttons={Navigationbuttons}
                />
            </Wrapper>
            <Outlet />
        </>
    )
}

export default LandingPage