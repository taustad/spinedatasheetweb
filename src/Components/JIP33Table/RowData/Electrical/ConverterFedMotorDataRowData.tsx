import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateConverterFedMotorDataRowData = (datasheet: ElectricalTagData): TableRow[] => [
        {
            refClause: "",
            description: "Converter manufacturer:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.converterManufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.converterManufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Converter model number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.converterModelNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.converterModelNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.minimumOperatingSpeed,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.minimumOperatingSpeed,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumOperatingSpeed,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumOperatingSpeed,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Fine balancing above rated speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.fineBalancingAboveRatedSpeed,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.fineBalancingAboveRatedSpeed,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
