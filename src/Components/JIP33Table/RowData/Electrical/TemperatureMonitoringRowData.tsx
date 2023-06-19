import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateTemperatureMonitoringRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Winding temperature detection:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.windingTemperatureDetection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.windingTemperatureDetection,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
