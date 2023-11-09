import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import EquipmentListView from "./Views/EquipmentListView"
import TagComparisonView from "./Views/TagComparisonView"
import JIP33ElectricalTabView from "./Views/JIP33ElectricalTabView"
import JIP33MechanicalTabView from "./Views/JIP33MechanicalTabView"
import JIP33InstrumentTabView from "./Views/JIP33InstrumentTabView"
import ReviewView from "./Views/Review/ReviewView"
import NavigatorHeader from "./Views/NavigatorHeader"
import ContainerView from "./Views/ContainerView"
import DraggableCardTable from "./Components/Containers/DraggableCardTable"
import ContainerTable from "./Components/Containers/ContainerTable"
import ContainerPicker from "./Views/ContainerPicker"

const AppRouter: FC = () => (
    <Routes>
        <Route path="/" element={<NavigatorHeader />} />
        <Route path="/:projectId" element={<NavigatorHeader />}>
            <Route path="tags" element={<EquipmentListView />}>
                <Route path="JIP33Instrument/:tagId" element={<JIP33InstrumentTabView />} />
                <Route path="JIP33Electrical/:tagId" element={<JIP33ElectricalTabView />} />
                <Route path="JIP33Mechanical/:tagId" element={<JIP33MechanicalTabView />} />
                <Route path="tags/review/" element={<ReviewView />} />
            </Route>
            <Route path="containers" element={<ContainerPicker />}>
                <Route path=":containerId" element={<ContainerView />}>
                    <Route index element={<ContainerTable />} />
                    <Route path="comments" element={<DraggableCardTable />} />
                </Route>
            </Route>

        </Route>
        <Route path="/comparison" element={<TagComparisonView />} />

    </Routes>
)

export default AppRouter
