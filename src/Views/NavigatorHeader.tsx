import React, { useState, useEffect, useContext } from "react"
import {
 Outlet, useNavigate, Link, useLocation,
} from "react-router-dom"
import styled from "styled-components"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { Breadcrumbs, Typography } from "@equinor/eds-core-react"
import { useCurrentUser } from "@equinor/fusion"
import LocalNavigation from "../Components/SideSheet/Components/LocalNavigation"
import Dialogue from "../Components/Dialogue"
import { ViewContext } from "../Context/ViewContext"

const Wrapper = styled.div`
    padding: 15px;
`

const NavigatorHeader = () => {
        const { setPathSegments, pathSegments, setCurrentUserId } = useContext(ViewContext)
        const tabPath: { [index: number]: string } = {
        0: "tags",
        1: "containers",
    }

    const [activeTab, setActiveTab] = useState<number>(0)
    const [header, setHeader] = useState<string>("")
    const [externalId, setExternalId] = useState<string | undefined>()

    const Navigationbuttons = ["Tags", "Containers"]

    const navigate = useNavigate()
    const currentProject = useCurrentContext()
    const location = useLocation()
    const currentUser: any = useCurrentUser()

    useEffect(() => {
        if (currentUser?._info?.localAccountId) {
            setCurrentUserId(currentUser?._info?.localAccountId)
        }
    }, [currentUser])

    useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    // setting path segments for keeping track of users location in the app
    useEffect(() => {
        const segments = location.pathname.split("/").filter(Boolean)
        setPathSegments(segments)
        if (currentProject.currentContext) {
            setHeader(currentProject.currentContext.value.description as string)
        }

        // if project was just selected, navigate to the first tab
        if (segments.length <= 1 && currentProject.currentContext?.id) {
            navigate(`/${currentProject.currentContext.id}/${tabPath[0]}`)
        }
    }, [location, currentProject.currentContext?.id])

    const changeTab = (activatedTab: number) => {
        setActiveTab(activatedTab)
        if (currentProject.currentContext) {
            navigate(`/${currentProject.currentContext.id}/${tabPath[activatedTab]}`)
        }
    }

        if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    return (
        <>
            <Wrapper>
                <LocalNavigation
                    activeTab={pathSegments[1] === "tags" ? 0 : 1}
                    setActiveTab={changeTab}
                    buttons={Navigationbuttons}
                />
                <Breadcrumbs>
                    <Typography>
                        {header}
                    </Typography>
                    <Breadcrumbs.Breadcrumb id="firstLayer" as={Link} to={`/${currentProject.currentContext?.id}/${pathSegments[1]}`}>
                        {pathSegments[1]}
                    </Breadcrumbs.Breadcrumb>
                    {pathSegments[2] && (
                        pathSegments[2] !== "JIP33Instrument"
                        && pathSegments[2] !== "JIP33Electrical"
                        && pathSegments[2] !== "JIP33Mechanical" ? (
                            <Breadcrumbs.Breadcrumb
                                id="secondLayer"
                                as={Link}
                                to={`/${currentProject.currentContext?.id}/${pathSegments[1]}/${pathSegments[2]}`}
                            >
                                {pathSegments[2]}
                            </Breadcrumbs.Breadcrumb>
                        ) : null
                        )}
                    {pathSegments[3] && (
                    <Breadcrumbs.Breadcrumb
                        id="thirdLayer"
                        as={Link}
                        to={`/${currentProject.currentContext?.id}/${pathSegments[1]}/${pathSegments[2]}/${pathSegments[3]}`}
                    >
                        {pathSegments[3]}
                    </Breadcrumbs.Breadcrumb>
                    )}
                </Breadcrumbs>
            </Wrapper>
            <Outlet />
        </>
)
}

export default NavigatorHeader