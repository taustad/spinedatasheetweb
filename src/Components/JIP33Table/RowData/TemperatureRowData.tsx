import { Datasheet } from "../../../Models/Datasheet"
import { TableRow } from "./TableRow"

export const generateTemperatureRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Minimum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumAmbientTemperature,
            purchaserReqUOM: "select",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.minimumAmbientTemperature,
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumAmbientTemperature,
            purchaserReqUOM: "select",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.maximumAmbientTemperature,
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.designTemperatureMaximum,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, minimum:",
            purchaserReq: datasheet.purchaserRequirement?.designTemperatureMinimum,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingTemperature,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingTemperature,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingTemperature,
            purchaserReqUOM: "select",
            supplierOfferedVal: "input data",
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
    ]
}
