import { Datasheet } from "../../../../Models/Datasheet";
import { TableRow } from "../TableRow";

export const generateSurfacePreperationAndPaintingRowData = (datasheet: Datasheet): TableRow[] => {
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
