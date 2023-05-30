import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateRatingRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Frame size:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.frameSize,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.frameSize,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Rated power output:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.ratedPowerOutput,
            purchaserReqUOM: "select",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.ratedPowerOutput,
            supplierOfferedValUOM: "select",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Service factor:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.serviceFactor,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.serviceFactor,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Full load current (FLC):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.fullLoadCurrent,
            purchaserReqUOM: "A",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.fullLoadCurrent,
            supplierOfferedValUOM: "A",
            additionalNotes: "",
        },
    ]
}
