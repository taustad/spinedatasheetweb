import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateMiscellaneousRowData = (datasheet: Datasheet): TableRow[] => {
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
