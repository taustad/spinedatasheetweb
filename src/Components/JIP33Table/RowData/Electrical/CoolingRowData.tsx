import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateCoolingRowData = (datasheet: ElectricalTagData): TableRow[] => {
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
