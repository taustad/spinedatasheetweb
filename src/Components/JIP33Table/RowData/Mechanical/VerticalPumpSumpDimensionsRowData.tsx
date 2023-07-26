import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateVerticalPumpSumpDimensionsRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description:
            "Grade (underside of pump mounting plate or top of foundation) elevation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.gradeUndersideOfPumpMountingPlateOrTopOfFoundationElevation,
        purchaserReqUOM: "mm",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.gradeUndersideOfPumpMountingPlateOrTopOfFoundationElevation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Low liquid level elevation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.lowLiquidLevelElevation,
        purchaserReqUOM: "mm",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.lowLiquidLevelElevation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Sump floor elevation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.sumpFloorElevation,
        purchaserReqUOM: "mm",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.sumpFloorElevation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Sump diameter:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.sumpDiameter,
        purchaserReqUOM: "mm",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.sumpDiameter,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Grade to top of pump discharge connection dimension:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.gradeToTopOfPumpDischargeConnectionDimension,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.gradeToTopOfPumpDischargeConnectionDimension,
        supplierOfferedValUOM: "mm",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Pump length (grade to underside of pump inlet bell or strainer dimension):",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.pumpLengthGradeToUndersideOfPumpInletBellOrStrainerDimension,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.pumpLengthGradeToUndersideOfPumpInletBellOrStrainerDimension,
        supplierOfferedValUOM: "mm",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Grade to first stage impeller centerline dimension:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.gradeToFirstStageImpellerCenterlineDimension,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.gradeToFirstStageImpellerCenterlineDimension,
        supplierOfferedValUOM: "mm",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Grade to liquid minimum submergence level dimension:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.gradeToLiquidMinimumSubmergenceLevelDimension,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.gradeToLiquidMinimumSubmergenceLevelDimension,
        supplierOfferedValUOM: "mm",
        additionalNotes: "",
    },
]
