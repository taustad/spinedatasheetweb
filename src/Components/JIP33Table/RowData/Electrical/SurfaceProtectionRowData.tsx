import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateSurfaceProtectionRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Atmospheric corrosivity category:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.atmosphericCorrosivityCategory,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.atmosphericCorrosivityCategory,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Surface protection corrosivity category:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.surfaceProtectionCorrosivityCategory,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.surfaceProtectionCorrosivityCategory,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Surface protection durability category:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.surfaceProtectionDurabilityCategory,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.surfaceProtectionDurabilityCategory,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Surface finish:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.surfaceFinish,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.surfaceFinish,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Paint color:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.paintColor,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.paintColor,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
