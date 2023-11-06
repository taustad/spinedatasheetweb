import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import EquipmentListView from "./Views/EquipmentListView"
import TagComparisonView from "./Views/TagComparisonView"
import JIP33ElectricalTabView from "./Views/JIP33ElectricalTabView"
import JIP33MechanicalTabView from "./Views/JIP33MechanicalTabView"
import JIP33InstrumentTabView from "./Views/JIP33InstrumentTabView"
import ReviewView from "./Views/Review/ReviewView"
import LandingPage from "./Views/NavigatorHeader"
import ContainerView from "./Views/ContainerView"
import DraggableCardTable from "./Components/Containers/DraggableCardTable"
import ContainerTable from "./Components/Containers/ContainerTable"

const AppRouter: FC = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:projectId" element={<LandingPage />}>
            <Route path="/:projectId/tags" element={<EquipmentListView />} />
            <Route path="containers" element={<ContainerView />}>
                <Route index element={<ContainerTable />} />
                <Route path="comments" element={<DraggableCardTable />} />

            </Route>
        </Route>
        <Route path="/comparison" element={<TagComparisonView />} />
        <Route path="/:projectId/tags/JIP33Instrument/:tagId" element={<JIP33InstrumentTabView />} />
        <Route path="/:projectId/tags/JIP33Electrical/:tagId" element={<JIP33ElectricalTabView />} />
        <Route path="/:projectId/tags/JIP33Mechanical/:tagId" element={<JIP33MechanicalTabView />} />
        <Route path="/:projectId/tags/review/" element={<ReviewView />} />
    </Routes>
)

export default AppRouter
