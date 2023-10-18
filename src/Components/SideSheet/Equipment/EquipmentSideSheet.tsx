import React, {
 FC, useState, useEffect, useContext,
} from "react"
import styled from "styled-components"
import ButtonBar from "./Components/ButtonBar"
import TabView from "./Components/TabView"
import { ViewContext } from "../../../Context/ViewContext"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 15px;
`

const EquipmentSideSheet: FC = () => {
    const { setSideSheetScrollPos } = useContext(ViewContext)
    const [activeTab, setActiveTab] = useState(() => parseInt(localStorage.getItem("ActiveEquipmentTab") || "0", 10))

    // Save active tab to local storage and reset scroll position to top when tab is changed
    useEffect(() => {
        const storedTab = parseInt(localStorage.getItem("ActiveEquipmentTab") || "0", 10)
        if (activeTab !== storedTab) {
            setSideSheetScrollPos(0)
            localStorage.setItem("ActiveEquipmentTab", activeTab.toString())
        }
    }, [activeTab])

    return (
        <Container>
            <ButtonBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabView
                activeTab={activeTab}
            />
        </Container>
    )
}

export default EquipmentSideSheet
