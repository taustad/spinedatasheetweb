import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generatePurchaserInformationRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Client name:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.clientName,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.clientName,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Site or location:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.siteOrLocation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.siteOrLocation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Project title or number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.projectTitleOrNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.projectTitleOrNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Purchase order number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.purchaseOrderNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.purchaseOrderNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}