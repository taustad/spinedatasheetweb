import { Datasheet } from "../../../Models/Datasheet"
import { TableRow } from "./TableRow"

export const generatePressureRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Design pressure, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.designPressureMaximum,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design pressure, minimum:",
            purchaserReq: datasheet.purchaserRequirement?.designPressureMinimum,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingPressure,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingPressure,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingPressure,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis outer casing burst pressure:",
            purchaserReq: "input data",
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
    ]
}
