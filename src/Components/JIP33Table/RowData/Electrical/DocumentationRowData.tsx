import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateDocumentationRowData = (
    datasheet: ElectricalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Motor data sheet:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.motorDataSheet,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.motorDataSheet,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Delivery of motor routine test data:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.deliveryOfMotorRoutineTestData,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.deliveryOfMotorRoutineTestData,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Torque and current vs. speed curve:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.torqueAndCurrentVSSpeedCurve,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.torqueAndCurrentVSSpeedCurve,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Motor thermal curves:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.motorThermalCurves,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.motorThermalCurves,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Maximum permissible stall time data (at 90% and 100% rated voltage):",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.maximumPermissibleStallTimeData,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.maximumPermissibleStallTimeData,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "ASD operation curve:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.asdOperationCurves,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.asdOperationCurves,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Dimensional outline drawing showing weight, location of terminal boxes and accessories:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Installation, operation and maintenance manuals:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.installationOperationAndMaintenanceManuals,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.installationOperationAndMaintenanceManuals,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Motor connection diagram including auxilliaries:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement
                ?.motorConnectionDiagramIncludingAuxilliaries,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct
                ?.motorConnectionDiagramIncludingAuxilliaries,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Additional test record:",
        purchaserReq:
            datasheet.electricalPurchaserRequirement?.additionalTestRecord,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.additionalTestRecord,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Certifications:",
        purchaserReq: datasheet.electricalPurchaserRequirement?.certifications,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.electricalSupplierOfferedProduct?.certifications,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
