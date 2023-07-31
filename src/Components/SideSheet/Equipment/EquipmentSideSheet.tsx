import React, { FC, useState } from "react"
import styled from "styled-components"
import ButtonBar from "./Components/ButtonBar"
import TabView from "./Components/TabView"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 15px;
`

const EquipmentSideSheet: FC = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Container>
            <ButtonBar setActiveTab={setActiveTab} />
            <TabView
                activeTab={activeTab}
            />
        </Container>
    )
}

export default EquipmentSideSheet
