import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateStartingPerformanceRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Motor designs and starting characteristics:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorDesignsAndStartingCharacteristics,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorDesignsAndStartingCharacteristics,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Moment of inertia of the motor (Jm):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.momentOfInertiaOfTheMotorJm,
            purchaserReqUOM: "kg·m²",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.momentOfInertiaOfTheMotorJm,
            supplierOfferedValUOM: "kg·m²",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Data for protection setting/power modelling:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.dataForProtectionSettingPowerModelling,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.dataForProtectionSettingPowerModelling,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
