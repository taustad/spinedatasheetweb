import { Typography } from "@equinor/eds-core-react"
import { tokens } from "@equinor/eds-tokens"
import React, { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import JIP33Table from "./JIP33Table/JIP33Table"
import { Message } from "../Models/Message"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 100;
`

const Body = styled.div`
    display: flex;
    flex-direction: row;
    flex-row: 1;
    width: 100%;
    height: 100%;
`

const ExpandableDiv = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
`

const SidebarDiv = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    overflow-y: overflow;
    overflow-x: hidden;
`

const MainView = styled.div`
    width: calc(100% - 15rem);
`

const MenuItems = styled.ul`
    padding: 0;
    margin: 0;
    width: 100%;
`

const LinkWithoutStyle = styled(Typography)`
    text-decoration: none;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
`

const Item = styled.li`
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0 0.25rem 1.75rem;
    cursor: pointer;
`

const StyledTabPanel = styled.div`
    padding-top: 0;
    flexwrap: "wrap";
    height: 100%;
`

interface Props {
    sideMenuList: string[]
    rowDataList: object[][]
    customTabList?: string[]
    reviewComments?: Message[]
    setReviewSideSheetOpen?: Dispatch<SetStateAction<boolean>> | undefined
    setCurrentProperty?: Dispatch<SetStateAction<string>> | undefined
    setWidth?: (width: number) => void
    width?: number
}

const JIP33WithSideMenu: React.FC<Props> = ({
    sideMenuList,
    rowDataList,
    customTabList,
    reviewComments,
    setCurrentProperty,
    setReviewSideSheetOpen,
    setWidth,
    width,
}) => {
    const [activeTab, setActiveTab] = useState(0)
    const selectedColor = tokens.colors.infographic.primary__moss_green_100.rgba
    const backgroundColor = "rgba(0, 112, 121, 0.1)"
    const firstCustomTabIndex = sideMenuList.findIndex((menuName) => customTabList?.includes(menuName))

    const sideMenuInsetShadow = (index: number) => {
        if (index === firstCustomTabIndex) {
            return {
                boxShadow: "inset 0px 5px 5px -3px rgba(0, 0, 0, 0.2)",
            }
        }
        return {}
    }

    const sideMenuBorder = (sideMenuName: string) => {
        if (customTabList && customTabList.includes(sideMenuName)) {
            return {
                borderLeft: "4px solid #ff105f",
            }
        }
        return {}
    }

    return (
        <Wrapper>
            <Body>
                <SidebarDiv>
                    <ExpandableDiv>
                        <MenuItems>
                            {sideMenuList.map((sideMenuName, index) => (
                                <Item
                                    key={sideMenuName}
                                    style={{
                                        backgroundColor:
                                            activeTab === index
                                                ? backgroundColor
                                                : "",
                                        ...sideMenuBorder(sideMenuName),
                                        ...sideMenuInsetShadow(index),
                                    }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <LinkWithoutStyle
                                        color={
                                            activeTab === index
                                                ? selectedColor
                                                : ""
                                        }
                                    >
                                        {sideMenuName}
                                    </LinkWithoutStyle>
                                </Item>
                            ))}
                        </MenuItems>
                    </ExpandableDiv>
                </SidebarDiv>
                <MainView>
                    <StyledTabPanel>
                        <JIP33Table
                            rowData={rowDataList[activeTab]}
                            setCurrentProperty={setCurrentProperty}
                            setReviewSideSheetOpen={setReviewSideSheetOpen}
                            setWidth={setWidth}
                            width={width}
                        />
                    </StyledTabPanel>
                </MainView>
            </Body>
        </Wrapper>
    )
}

export default JIP33WithSideMenu
