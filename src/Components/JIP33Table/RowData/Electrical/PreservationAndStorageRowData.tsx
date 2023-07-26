import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generatePreservationAndStorageRowData = (
    datasheet: ElectricalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Storage conditions:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.storageConditions,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.storageConditions,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Storage duration:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.storageDuration,
        purchaserReqUOM: "month(s)",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.storageDuration,
        supplierOfferedValUOM: "month(s)",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Motor nameplate 'Oil mist lubricated':",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.motorNameplateOilMistLubricated,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.motorNameplateOilMistLubricated,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Motor temporary tag 'Oil mist ready, do not run without oil':",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.motorTemporaryTagOilMistReadyDoNotRunWithoutOil,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.motorTemporaryTagOilMistReadyDoNotRunWithoutOil,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
