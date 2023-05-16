import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateVibrationRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Vibration monitoring:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.vibrationMonitoring,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.vibrationMonitoring,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Vibration level test report:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.vibrationLevelTestReport,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.vibrationLevelTestReport,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Shock pulse monitoring connection:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.shockPulseMonitoringConnection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.shockPulseMonitoringConnection,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
