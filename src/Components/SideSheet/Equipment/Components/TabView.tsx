import React, { FC } from "react"
import styled from "styled-components"
import Implementation from "../Tabs/Implementation"
import Specifications from "../Tabs/Specifications"
import UserManuals from "../Tabs/UserManuals"
import Media from "../Tabs/Media"
import Replacements from "../Tabs/Replacements"

const TabsContainer = styled.div`
    width: calc(100% - 60px);
    margin-left: 70px;
`

interface TabViewProps {
    activeTab: number
}

const TabView: FC<TabViewProps> = ({ activeTab }) => (
    <TabsContainer>
        {activeTab === 0 && <Implementation />}
        {activeTab === 1 && <Specifications />}
        {activeTab === 2 && <UserManuals />}
        {activeTab === 3 && <Media />}
        {activeTab === 4 && <Replacements />}
    </TabsContainer>
)

export default TabView
