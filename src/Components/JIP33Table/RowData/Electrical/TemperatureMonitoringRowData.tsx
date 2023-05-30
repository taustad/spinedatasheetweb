import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateTemperatureMonitoringRowData = (datasheet: Datasheet): TableRow[] => {
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
