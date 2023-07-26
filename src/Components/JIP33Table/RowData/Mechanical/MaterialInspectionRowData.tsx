import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateMaterialInspectionRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Material inspection requirements:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.materialInspectionRequirements,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.materialInspectionRequirements,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impact test as per:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.impactTestAsPer,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.impactTestAsPer,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Hardness testing of parts, welds and heat-affected zones:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.hardnessTestingOfPartsWeldsAndHeatAffectedZones,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.hardnessTestingOfPartsWeldsAndHeatAffectedZones,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Additional surface/sub-surface examination:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.additionalSurfaceSubSurfaceExamination,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.additionalSurfaceSubSurfaceExamination,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Additional surface/sub-surface examination for:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.additionalSurfaceSubSurfaceExaminationFor,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.additionalSurfaceSubSurfaceExaminationFor,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Additional surface magnetic particle or liquid penetrant examination:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.additionalSurfaceMagneticParticleOrLiquidPenetrantExamination,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.additionalSurfaceMagneticParticleOrLiquidPenetrantExamination,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Additional sub-surface ultrasonic or radiographic examination:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.additionalSubSurfaceUltrasonicOrRadiographicExamination,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.additionalSubSurfaceUltrasonicOrRadiographicExamination,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Additional components PMI tested:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.additionalComponentsPMITested,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.additionalComponentsPMITested,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Repair and heat treatment records:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.repairAndHeatTreatmentRecords,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.repairAndHeatTreatmentRecords,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
