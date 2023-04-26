import { Typography } from "@equinor/eds-core-react"
import { tokens } from "@equinor/eds-tokens"
import { useState } from "react"
import styled from "styled-components"
import JIP33Table from "./JIP33Table/JIP33Table"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
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
    border-right: 1px solid lightgrey;
    flex-direction: column;
    overflow-y: overflow;
    overflow-x: hidden;
`

const MainView = styled.div`
    width: calc(100% - 15rem);
    overflow: scroll;
    overflow-x: hidden;
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
    border-bottom: 1px solid LightGray;
    flexWrap: "wrap"
`

interface Props {
    sideMenuList: string[]
    rowDataList: object[][]

}

const JIP33WithSideMenu: React.FC<Props> = ({ sideMenuList, rowDataList }) => {
    const [activeTab, setActiveTab] = useState(0)
    const selectedColor = tokens.colors.infographic.primary__moss_green_100.rgba
    const backgroundColor = "rgba(0, 112, 121, 0.1)"
    return (
        <Wrapper>
            <Body>
                <SidebarDiv>
                    <ExpandableDiv>
                        <MenuItems>
                            {sideMenuList.map((sideMenuName, index) => (
                                <Item
                                    style={{ backgroundColor: activeTab === index ? backgroundColor : "" }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <LinkWithoutStyle color={activeTab === index ? selectedColor : ""}>{sideMenuName}</LinkWithoutStyle>
                                </Item>
                            ))}
                        </MenuItems>
                    </ExpandableDiv>
                </SidebarDiv>
                <MainView>
                    <StyledTabPanel>
                        <JIP33Table rowData={rowDataList[activeTab]} />
                    </StyledTabPanel>
                </MainView>
            </Body>
        </Wrapper>
    )
}

export default JIP33WithSideMenu
