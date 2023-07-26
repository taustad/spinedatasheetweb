import { InstrumentTagData } from "../../../../Models/InstrumentTagData"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateFlowRowData = (datasheet: InstrumentTagData): TableRow[] => [
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
            purchaserReq: datasheet.instrumentPurchaserRequirement?.measurementRangeMinimum,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.measurementRangeMinimum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Measurement range, maximum:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.measurementRangeMaximum,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.measurementRangeMaximum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
