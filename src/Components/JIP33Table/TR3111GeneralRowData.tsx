import { TagData } from "../../Models/TagData"
import { TableRow } from "./RowData/TableRow"

export const generateTR3111GeneralRowData = (datasheet: TagData): TableRow[] => [
        {
            description: "Tag status",
            purchaserReq: datasheet.tagStatus,
            property: "tagStatus",
        },
        {
            description: "Discipline",
            purchaserReq: datasheet.discipline,
            property: "discipline",
        },
        {
            description: "Contract",
            purchaserReq: datasheet.contract,
            property: "contract",
        },
        {
            description: "Contract name",
            purchaserReq: datasheet.contractName,
            property: "contractName",
        },
        {
            description: "Engineering code",
            purchaserReq: datasheet.engineeringCode,
            property: "engineeringCode",
        },
        {
            description: "Area",
            purchaserReq: datasheet.area,
            property: "area",
        },
        {
            description: "Purchase order",
            purchaserReq: datasheet.purchaseOrder,
            property: "purchaseOrder",
        },
    ]
