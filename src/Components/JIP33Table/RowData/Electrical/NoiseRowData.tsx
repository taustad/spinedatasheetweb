import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateNoiseRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Maximum permissible sound pressure at 1 m (3 ft) (sinewave, no load):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumPermissibleSoundPressureAt1Meter,
            purchaserReqUOM: "db(A)",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumPermissibleSoundPressureAt1Meter,
            supplierOfferedValUOM: "db(A)",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Motor sound pressure at 1 m (3 ft) (sinewave, no load):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorSoundPressureAt1Meter,
            purchaserReqUOM: "db(A)",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorSoundPressureAt1Meter,
            supplierOfferedValUOM: "db(A)",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Purchaser maximum permissible noise limit:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.purchaserMaximumPermissibleNoiseLimit,
            purchaserReqUOM: "db(A)",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.purchaserMaximumPermissibleNoiseLimit,
            supplierOfferedValUOM: "db(A)",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum declared motor sound power level at no-load:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumDeclaredMotorSoundPowerLevelAtNoLoad,
            purchaserReqUOM: "db(A)",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumDeclaredMotorSoundPowerLevelAtNoLoad,
            supplierOfferedValUOM: "db(A)",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum expected motor sound power level at full load:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumExpectedMotorSoundPowerLevelAtFullLoad,
            purchaserReqUOM: "db(A)",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumExpectedMotorSoundPowerLevelAtFullLoad,
            supplierOfferedValUOM: "db(A)",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Noise level test of one motor from this order batch:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.noiseLevelTestAtOneMotorFromThisOrderBatch,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.noiseLevelTestAtOneMotorFromThisOrderBatch,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
