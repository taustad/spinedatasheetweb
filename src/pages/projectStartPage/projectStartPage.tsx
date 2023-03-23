import { FC } from "react"
import { Link } from "react-router-dom"

export const ProjectStartPage: FC = () => {
  return (
    <>
      <p>Spine data sheets</p>
        <div><Link to="/EquipmentListPage"> Contractor 1 </Link></div>
        <div><Link to="/EquipmentListPage"> Contractor 2 </Link></div>
        <div><Link to="/EquipmentListPage"> Contractor 3 </Link></div>
        <div><Link to="/EquipmentListPage"> Contractor 4 </Link></div>
    </>
  );
};
