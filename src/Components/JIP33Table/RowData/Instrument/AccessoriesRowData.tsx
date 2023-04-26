import { Datasheet } from "../../../../Models/Datasheet"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateAccessoriesRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Weather enclosure:",
            purchaserReq: datasheet.purchaserRequirement?.weatherEnclosure,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.weatherEnclosure,
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
            purchaserReq: datasheet.purchaserRequirement?.electricalSurgeProtector,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.electricalSurgeProtector,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Sunshade:",
            purchaserReq: datasheet.purchaserRequirement?.sunshade,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.sunshade,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
