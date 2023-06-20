import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateTestingAndInspectionRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Shop inspection:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.shopInspection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.shopInspection,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Vibration test:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.vibrationTest,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.vibrationTest,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Additional test:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.additionalTest,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.additionalTest,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
