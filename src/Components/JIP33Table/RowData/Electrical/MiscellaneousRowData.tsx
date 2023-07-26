import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateMiscellaneousRowData = (datasheet: ElectricalTagData): TableRow[] => [
        {
            refClause: "",
            description: "Provision for IoT hardware installation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.provisionForIoTHardwareInstallation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.provisionForIoTHardwareInstallation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
