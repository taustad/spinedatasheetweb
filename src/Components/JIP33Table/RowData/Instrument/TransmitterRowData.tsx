import { Datasheet } from "../../../../Models/Datasheet"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateTransmitterRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Transmitter model number:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterModelNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter enclosure material:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterEnclosureMaterial,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter mounting:",
            purchaserReq: datasheet.purchaserRequirement?.transmitterMounting,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterMounting,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter display:",
            purchaserReq: datasheet.purchaserRequirement?.transmitterDisplay,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterDisplay,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter connecting cables:",
            purchaserReq: "no",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterConnectingCables,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter connecting cable length:",
            purchaserReq: datasheet.purchaserRequirement?.transmitterConnectingCableLength,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterConnectingCableLength,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transmitter connecting cable quantity:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.transmitterConnectingCableQuantity,
            supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Supply voltage:",
            purchaserReq: datasheet.purchaserRequirement?.supplyVoltage,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.supplyVoltage,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "External power voltage:",
            purchaserReq: datasheet.purchaserRequirement?.externalPowerVoltage,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.externalPowerVoltage,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Isolated outputs:",
            purchaserReq: "N/A",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.isolatedOutputs,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cable entry:",
            purchaserReq: datasheet.purchaserRequirement?.cableEntry,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cable termination:",
            purchaserReq: datasheet.purchaserRequirement?.cableTermination,
            purchaserReqColor: ColorLegendEnum.SelectEitherPurOrSupComDropDown,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.cableTermination,
            supplierOfferedValColor: ColorLegendEnum.SelectEitherPurOrSupComDropDown,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Communication protocol:",
            purchaserReq: datasheet.purchaserRequirement?.communicationProtocol,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.communicationProtocol,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Protocol version:",
            purchaserReq: datasheet.purchaserRequirement?.protocolVersion,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.protocolVersion,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Fail safe direction:",
            purchaserReq: datasheet.purchaserRequirement?.failSafeDirection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.failSafeDirection,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Calibration bespoke:",
            purchaserReq: datasheet.purchaserRequirement?.calibrationBespoke,
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.calibrationBespoke,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "kg/h",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Measurement range, minimum:",
            purchaserReq: datasheet.purchaserRequirement?.measurementRangeMinimum,
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.measurementRangeMinimum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "kg/h",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Measurement range, maximum:",
            purchaserReq: datasheet.purchaserRequirement?.measurementRangeMaximum,
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.measurementRangeMaximum,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "kg/h",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Span and zero adjustment:",
            purchaserReq: datasheet.purchaserRequirement?.spanAndZeroAdjustment,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.spanAndZeroAdjustment,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Lower range limit:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.lowerRangeLimit,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Upper range limit:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.upperRangeLimit,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
    ]
}