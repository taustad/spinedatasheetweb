import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateSpaceHeatersRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Space heater:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.spaceHeater,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.spaceHeater,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Space heater terminal box:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.spaceHeaterTerminalBox,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.spaceHeaterTerminalBox,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Space heater voltage:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.spaceHeaterVoltage,
            purchaserReqUOM: "V",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.spaceHeaterVoltage,
            supplierOfferedValUOM: "V",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Suply voltage:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.supplyVoltage,
            purchaserReqUOM: "V",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.supplyVoltage,
            supplierOfferedValUOM: "V",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heater requirement:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.heaterRequirement,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.heaterRequirement,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Seperate terminal box:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.seperateTerminalBox,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.seperateTerminalBox,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Warning label:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.warningLabel,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.warningLabel,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Warning label language:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.warningLabelLanguage,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.warningLabelLanguage,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
