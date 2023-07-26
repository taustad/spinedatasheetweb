import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateBearingsRowData = (
    datasheet: ElectricalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "L10 life:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.l10Life,
        purchaserReqUOM: "hours",
        supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.l10Life,
        supplierOfferedValUOM: "hours",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Drive end (DE) bearing number:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.driveEndBearingNumber,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.driveEndBearingNumber,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Non-drive end (NDE) bearing number:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.nonDriveEndBearingNumber,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.nonDriveEndBearingNumber,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "External radial loading on motor shaft end:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.externalRadialLoadingOnMotorShaftEnd,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.externalRadialLoadingOnMotorShaftEnd,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "External axial loading on motor shaft end:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.externalAxialLoadingOnMotorShaftEnd,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.externalAxialLoadingOnMotorShaftEnd,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "D-end bearing type:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.dEndBearingType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.dEndBearingType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "N-end bearing type:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.nEndBearingType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.nEndBearingType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Internal clearance:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.internalClearance,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.internalClearance,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Lubrication specification:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.lubricationSpecification,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.lubricationSpecification,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Recommended lubricant:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.recommendedLubricant,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.recommendedLubricant,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Grease:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.grease,
        purchaserReqUOM: "A",
        supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.grease,
        supplierOfferedValUOM: "A",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Oil mist lubricant:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.oilMistLubricant,
        purchaserReqUOM: "A",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.oilMistLubricant,
        supplierOfferedValUOM: "A",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Sealed for life anti-friction bearing:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.sealedForLifeAntiFrictionBearing,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.sealedForLifeAntiFrictionBearing,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "ASD fed motor - non-drive end (NDE) insulation bearing requirement:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.asdFedMotorNonDriveEndInsulationBearingRequirement,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.asdFedMotorNonDriveEndInsulationBearingRequirement,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
