import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateDutyRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Duty type:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.dutyType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.dutyType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Number of poles:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.numberOfPoles,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.numberOfPoles,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Duty point shaft power:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.dutyPointShaftPower,
            purchaserReqUOM: "kW",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.dutyPointShaftPower,
            supplierOfferedValUOM: "kW",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Direction of rotation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.directionOfRotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.directionOfRotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Load drive:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.loadDrive,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.loadDrive,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "External radial loading on the motor shaft end:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.externalRadialLoadingOnMotorShaftEnd,
            purchaserReqUOM: "N",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.externalRadialLoadingOnMotorShaftEnd,
            supplierOfferedValUOM: "N",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "External axial loading on the motor shaft end:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.externalAxialLoadingOnMotorShaftEnd,
            purchaserReqUOM: "N",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.externalAxialLoadingOnMotorShaftEnd,
            supplierOfferedValUOM: "N",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Moment of inertia of the load (Jext):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.momentOfInertiaOfTheLoadJext,
            purchaserReqUOM: "kg·m²",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.momentOfInertiaOfTheLoadJext,
            supplierOfferedValUOM: "kg·m²",
            additionalNotes: "",
        },
    ]
}
