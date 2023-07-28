import React, { FC, useState } from "react"
import styled from "styled-components"
import ButtonBar from "./Components/ButtonBar"
import TabView from "./TabView"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 15px;
`

const EquipmentSideSheet: FC = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabChange = (index: number) => {
        console.log(index)
        setActiveTab(index)
    }

    return (
        <Container>
            <ButtonBar setActiveTab={setActiveTab} />
            <TabView
                activeTab={activeTab}
                handleTabChange={handleTabChange}
            />
        </Container>
    )
}

export default EquipmentSideSheet
