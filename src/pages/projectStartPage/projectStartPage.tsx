import { FC } from "react"
import { Link } from "react-router-dom"
import { Typography } from "@equinor/eds-core-react"

export const ProjectStartPage: FC = () => {
  return (
    <>
      <Typography variant="h3">Spine data sheets</Typography>
      <div><Link to="/EquipmentListPage"> Contractor 1 </Link></div>
      <div><Link to="/EquipmentListPage"> Contractor 2 </Link></div>
      <div><Link to="/EquipmentListPage"> Contractor 3 </Link></div>
      <div><Link to="/EquipmentListPage"> Contractor 4 </Link></div>
    </>
  );
};
