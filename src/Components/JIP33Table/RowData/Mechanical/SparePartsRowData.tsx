import { MechanicalTagData } from "../../../../Models/MechanicalTagData";
import { TagData } from "../../../../Models/TagData";
import { TableRow } from "../TableRow";

export const generateSparePartsRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Commissioning and start-up spares quotation:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.commissioningAndStartUpSparesQuotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.commissioningAndStartUpSparesQuotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal maintenance spares quotation:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.normalMaintenanceSparesQuotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.normalMaintenanceSparesQuotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Two-year operating spares quotation:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.twoYearOperatingSparesQuotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.twoYearOperatingSparesQuotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Capital spares quotation:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.capitalSparesQuotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.capitalSparesQuotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Spare rotor storage orientation:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.spareRotorStorageOrientation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.spareRotorStorageOrientation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Shipping and storage container for vertical storage of spare rotor:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.shippingAndStorageContainerForVerticalStorageOfSpareRotor,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.shippingAndStorageContainerForVerticalStorageOfSpareRotor,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Inert gas purge for spare rotor container:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.inertGasPurgeForSpareRotorContainer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.inertGasPurgeForSpareRotorContainer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
