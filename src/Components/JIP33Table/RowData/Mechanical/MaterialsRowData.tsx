import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateMaterialsRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Annex H class:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.annexHClass,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.annexHClass,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Minimum design metal temperature:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.minimumDesignMetalTemperature,
        purchaserReqUOM: "°C",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.minimumDesignMetalTemperature,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Reduced-hardness materials:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.reducedHardnessMaterials,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.reducedHardnessMaterials,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Applicable hardness standard:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.applicableHardnessStandard,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.applicableHardnessStandard,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Special coating for impellers and other wetted parts:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.specialCoatingForImpellerAndOtherWettedParts,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.specialCoatingForImpellerAndOtherWettedParts,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Case and case cover material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.caseAndCaseCoverMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.caseAndCaseCoverMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Nonwetted pressure-retaining fasteners material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.nonwettedPressureRetainingFastenersMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.nonwettedPressureRetainingFastenersMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Diffuser material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.diffuserMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.diffuserMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.impellerMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.impellerMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Inducer material:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.inducerMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.inducerMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller wear component type:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.impellerWearComponentType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.impellerWearComponentType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller wear component material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.impellerWearComponentMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.impellerWearComponentMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller wear component hardness:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.impellerWearComponentHardness,
        purchaserReqUOM: "HRC",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.impellerWearComponentHardness,
        supplierOfferedValUOM: "HRC",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Case wear ring material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.caseWearRingMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.caseWearRingMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Wear parts hardnesses:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.wearPartsHardnesses,
        purchaserReqUOM: "HRC",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.wearPartsHardnesses,
        supplierOfferedValUOM: "HRC",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Shaft material:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.shaftMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.shaftMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Auxilliary process-liquid lines, fittings and other connections to casing, including seal plans material:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.auxilliaryProcessLiquidLinesFittingsAndOtherConnectionsToCasingIncludingSealPlansMaterial,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.auxilliaryProcessLiquidLinesFittingsAndOtherConnectionsToCasingIncludingSealPlansMaterial,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
