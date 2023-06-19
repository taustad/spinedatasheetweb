import { InstrumentTagData } from "../../../../Models/InstrumentTagData"
import { TagData } from "../../../../Models/TagData"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateAccessoriesRowData = (datasheet: InstrumentTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Weather enclosure:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.weatherEnclosure,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.weatherEnclosure,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mounting bracket:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mounting bracket material:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Electrical surge protector:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.electricalSurgeProtector,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.electricalSurgeProtector,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Sunshade:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.sunshade,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.sunshade,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
