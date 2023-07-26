import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateBaseplateRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "API baseplate number:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.apiBasePlateNumber,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.apiBasePlateNumber,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Sized to accomodate seal piping systems:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.sizedToAccommodateSealPipingSystems,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.sizedToAccommodateSealPipingSystems,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Baseplate type:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.baseplateType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.baseplateType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Mounting:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.baseplateMounting,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.baseplateMounting,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Stainless steel plate, thickness 0.2 in. (5 mm) minimum, under all pump feet:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.stainlessSteelPlateThickness02In5mmMinimumUnderAllPumpFeet,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.stainlessSteelPlateThickness02In5mmMinimumUnderAllPumpFeet,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
