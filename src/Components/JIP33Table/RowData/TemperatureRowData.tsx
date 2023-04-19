import { Datasheet } from "../../../Models/Datasheet"
import { TableRow } from "./TableRow"

export const generateTemperatureRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Minimum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumAmbientTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.minimumAmbientTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumAmbientTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.maximumAmbientTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.designTemperatureMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, minimum:",
            purchaserReq: datasheet.purchaserRequirement?.designTemperatureMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
