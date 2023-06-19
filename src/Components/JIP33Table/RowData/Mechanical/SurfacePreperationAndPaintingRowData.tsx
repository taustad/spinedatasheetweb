import { MechanicalTagData } from "../../../../Models/MechanicalTagData";
import { TableRow } from "../TableRow";

export const generateSurfacePreperationAndPaintingRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Surface preparation and painting specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.surfacePreperationAndPaintingSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.surfacePreperationAndPaintingSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
