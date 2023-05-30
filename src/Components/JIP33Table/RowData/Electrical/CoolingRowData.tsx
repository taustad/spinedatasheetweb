import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateCoolingRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Cooling method:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.coolingMethod,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.coolingMethod,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
