import { InstrumentTagData } from "../../../../Models/InstrumentTagData"
import { TableRow } from "../TableRow"

export const generatePressureRowData = (datasheet: InstrumentTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Design pressure, maximum:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.designPressureMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design pressure, minimum:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.designPressureMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating pressure:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.minimumOperatingPressure,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating pressure:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.normalOperatingPressure,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating pressure:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumOperatingPressure,
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
