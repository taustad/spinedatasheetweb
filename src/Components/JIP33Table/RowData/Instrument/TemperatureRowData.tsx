import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateTemperatureRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Minimum ambient temperature:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.minimumAmbientTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.minimumAmbientTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum ambient temperature:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumAmbientTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.maximumAmbientTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, maximum:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.designTemperatureMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Design temperature, minimum:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.designTemperatureMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating temperature:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.minimumOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating temperature:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.normalOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating temperature:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumOperatingTemperature,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
