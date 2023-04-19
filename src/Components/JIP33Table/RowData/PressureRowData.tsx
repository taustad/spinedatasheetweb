import { Datasheet } from "../../../Models/Datasheet"
import { TableRow } from "./TableRow"

export const generatePressureRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Design pressure, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.designPressureMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design pressure, minimum:",
            purchaserReq: datasheet.purchaserRequirement?.designPressureMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingPressure,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingPressure,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingPressure,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis outer casing burst pressure:",
            purchaserReq: "",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
