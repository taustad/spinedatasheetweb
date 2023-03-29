import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import JIP33TabView from "./Views/JIP33TabView"
import EquipmentListView from "./Views/EquipmentListView"

const AppRouter: FC = () => (
    <Routes>
        <Route path="/" element={<EquipmentListView />} />
        <Route path="/JIP33" element={<JIP33TabView />} />
    </Routes>
)

export default AppRouter
