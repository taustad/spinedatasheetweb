import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateMotorConstructionRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Motor weight:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorWeight,
            purchaserReqUOM: "kg",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorWeight,
            supplierOfferedValUOM: "kg",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Stainless steel hardware:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.stainlessSteelHardware,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.stainlessSteelHardware,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Stainless steel fixings:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.stainlessSteelFixings,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.stainlessSteelFixings,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Enclosure type:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.enclosureType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.enclosureType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Enclosure ingress protection:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.enclosureIngressProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.enclosureIngressProtection,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
