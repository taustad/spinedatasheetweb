import { Datasheet } from "../../../Models/Datasheet"
import { ColorLegendEnum } from "../JIP33ColorLegendEnums"
import { TableRow } from "./TableRow"

export const generateFlowRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Minimum operating mass flow",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating mass flow",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating mass flow",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Measurement range, minimum",
            purchaserReq: datasheet.purchaserRequirement?.measurementRangeMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.measurementRangeMinimum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Measurement range, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.measurementRangeMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.measurementRangeMaximum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
