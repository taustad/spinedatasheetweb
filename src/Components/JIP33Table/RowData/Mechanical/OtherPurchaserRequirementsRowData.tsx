import { MechanicalTagData } from "../../../../Models/MechanicalTagData";
import { TagData } from "../../../../Models/TagData";
import { TableRow } from "../TableRow";

export const generateOtherPurchaserRequirementsRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "VFD steady state forced response analysis:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.vfdSteadyStateForcedResponseAnalysis,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.vfdSteadyStateForcedResponseAnalysis,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Transient forced response analysis:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.transientForcedResponseAnalysis,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.transientForcedResponseAnalysis,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Torsional analysis report:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.torsionalAnalysisReport,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.torsionalAnalysisReport,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Lateral analysis:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.lateralAnalysis,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.lateralAnalysis,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
