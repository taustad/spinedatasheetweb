import { FC, useState } from "react"
import { Route, Routes } from "react-router-dom"
import EquipmentListView from "./Views/EquipmentListView"
import TagComparisonView from "./Views/TagComparisonView"
import JIP33ElectricalTabView from "./Views/JIP33ElectricalTabView"
import JIP33MechanicalTabView from "./Views/JIP33MechanicalTabView"
import JIP33InstrumentTabView from "./Views/JIP33InstrumentTabView"
import AppContext from "./contexts/AppContext"
import { TagData } from "./Models/TagData"

const AppRouter: FC = () => {
    const [activeTagData, setActiveTagData] = useState<TagData | undefined>(undefined)
    const [tagData, setTagData] = useState<TagData[]>([])

    return (
        <>
            <AppContext.Provider value={{
                activeTagData: activeTagData,
                setActiveTagData: setActiveTagData,
                tagData: tagData,
                setTagData: setTagData
            }}>
                <Routes>
                    <Route path="/" element={<EquipmentListView />} />
                    <Route path="/comparison" element={<TagComparisonView />} />
                    <Route path="/:projectId/JIP33Instrument/:tagId" element={<JIP33InstrumentTabView />} />
                    <Route path="/:projectId/JIP33Electrical/:tagId" element={<JIP33ElectricalTabView />} />
                    <Route path="/:projectId" element={<EquipmentListView />} />
                    <Route path="/:projectId/JIP33Mechanical/:tagId" element={<JIP33MechanicalTabView />} />
                </Routes>
            </AppContext.Provider>
        </>
    )
}

export default AppRouter;
