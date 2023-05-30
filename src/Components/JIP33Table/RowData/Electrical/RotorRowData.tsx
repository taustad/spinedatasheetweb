import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateRotorRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Maximum vibration magnitude:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumVibrationMagnitude,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumVibrationMagnitude,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
