import { MechanicalTagData } from "../../../../Models/MechanicalTagData";
import { TableRow } from "../TableRow";

export const generateShipmentRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Preservation and packing specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.preservationAndPackingSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.preservationAndPackingSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Preservation and packing suitable for:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.preservationAndPackingSuitableFor,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.preservationAndPackingSuitableFor,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Export boxing:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.exportBoxing,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.exportBoxing,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Outdoor storage:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.outdoorStorage,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.outdoorStorage,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
