import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import JIP33TabView from "../../Views/JIP33TabView"
import EquipmentListPage from "../EquipmentListPage"
import { ProjectStartPage } from "../projectStartPage/projectStartPage"

const LandingPage: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectStartPage />} />
      <Route path="/JIP33" element={<JIP33TabView />} />
      <Route path="/EquipmentListPage" element={<EquipmentListPage />} />
    </Routes>
  );
};

export default LandingPage;
