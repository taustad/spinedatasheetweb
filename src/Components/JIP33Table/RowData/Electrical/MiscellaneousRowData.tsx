import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateMiscellaneousRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
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
}
