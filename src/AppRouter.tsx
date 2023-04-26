import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import JIP33TabView from "./Views/JIP33TabView"
import EquipmentListView from "./Views/EquipmentListView"
import TagComparisonView from "./Views/TagComparisonView"
import JIP33ElectricalTabView from "./Views/JIP33ElectricalTabView"

const AppRouter: FC = () => (
    <>
        <Routes>
            <Route path="/" element={<EquipmentListView />} />
            <Route path="/comparison" element={<TagComparisonView />} />
            <Route path="/:projectId" element={<EquipmentListView />} />
            <Route path=":projectId/JIP33/:tagId" element={<JIP33TabView />} />
            <Route path="/JIP33Electrical" element={<JIP33ElectricalTabView />} />
        </Routes>
    </>
);

export default AppRouter;
