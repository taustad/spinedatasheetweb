import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const informationRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Order status:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.orderStatus,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.orderStatus,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Tag number:",
            purchaserReq: "",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Tag description:",
            purchaserReq: "",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
