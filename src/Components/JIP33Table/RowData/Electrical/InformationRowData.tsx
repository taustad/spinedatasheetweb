import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const informationRowData = (datasheet: Datasheet): TableRow[] => {
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
