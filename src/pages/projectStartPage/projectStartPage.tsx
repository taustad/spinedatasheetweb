import { FC, useEffect } from "react"
import { Link } from "react-router-dom"
import { Typography } from "@equinor/eds-core-react"
import { GetDatasheetService } from "../../api/DatasheetService";

export const ProjectStartPage: FC = () => {
  console.log("ProjectStartPage")

  useEffect(() => {
    (async () => {
      const datasheets = await (await GetDatasheetService()).getDatasheets()
      console.log(datasheets)
    })()
  }, [])

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
