import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateThermalPerformanceRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Thermal class:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.thermalClass,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.thermalClass,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Temperature rise class:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.temperatureRiseClass,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.temperatureRiseClass,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
