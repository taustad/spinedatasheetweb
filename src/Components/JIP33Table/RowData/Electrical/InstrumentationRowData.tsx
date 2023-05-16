import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateInstrumentationRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Provisions for vibration monitoring:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.provisionsForVibrationMonitoring,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.provisionsForVibrationMonitoring,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Winding temperature detectors:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.windingTemperatureDetectors,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.windingTemperatureDetectors,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Bearing temperature detectors:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.bearingTemperatureDetectors,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.bearingTemperatureDetectors,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Instrumentation terminal box:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.instrumentationTerminalBox,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.instrumentationTerminalBox,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Provision for IoT hardware installation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.provisionForIoTHardwareInstallation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.provisionForIoTHardwareInstallation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Motor monitoring device (IoT):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorMonitoringDevice,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorMonitoringDevice,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
