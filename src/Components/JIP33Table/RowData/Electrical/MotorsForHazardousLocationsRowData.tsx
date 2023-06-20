import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TableRow } from "../TableRow"

export const generateMotorsForHazardousLocationsRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Motor to be rated for use in potentially explosive atmosphere:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorToBeRatedForUseInPotentiallyExplosiveAtmosphere,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorToBeRatedForUseInPotentiallyExplosiveAtmosphere,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Hazardous area equipment certifying body:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.hazardousAreaEquipmentCertifyingBody,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.hazardousAreaEquipmentCertifyingBody,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Hazardous area classification:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.hazardousAreaClassification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.hazardousAreaClassification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "UL 674 listing:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.uL674Listing,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.uL674Listing,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Temperature group:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.temperatureGroup,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.temperatureGroup,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Gas/dust group:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.gasDustGroup,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.gasDustGroup,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Equipment protection level:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.equipmentProtectionLevel,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.equipmentProtectionLevel,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Motor classification:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorClassification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorClassification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
