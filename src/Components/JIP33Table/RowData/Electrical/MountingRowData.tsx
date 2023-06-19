import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateMountingRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Mounting position:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.mountingPosition,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.mountingPosition,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mounting arrangement:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.mountingArrangement,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.mountingArrangement,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Type of mounting:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.typeOfMounting,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.typeOfMounting,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Flange type:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.flangeType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.flangeType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Vertical motor shaft orientation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.verticalMotorShaftOrientation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.verticalMotorShaftOrientation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Non reverse ratchet:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.nonReverseRatchet,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.nonReverseRatchet,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Drip cover:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.dripCover,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.dripCover,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Vertically mounted motor additional requirement:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.verticallyMountedMotorAdditionalRequirement,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.verticallyMountedMotorAdditionalRequirement,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
