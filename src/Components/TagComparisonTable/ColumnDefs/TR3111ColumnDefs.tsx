import { ColGroupDef } from "@ag-grid-community/core"
import { TagData } from "../../../Models/TagData"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonTR3111ColumnDefs = (): ColGroupDef[] => [
    {
        headerName: "Tag Information",
        children: [
            {
                field: getPropertyName<TagData>("tagStatus"),
                headerName: "Tag status",
            },
            {
                field: getPropertyName<TagData>("discipline"),
                headerName: "Discipline",
            },
            {
                field: getPropertyName<TagData>("contract"),
                headerName: "Contract",
            },
            {
                field: getPropertyName<TagData>("contractName"),
                headerName: "Contract name",
            },
            {
                field: getPropertyName<TagData>("engineeringCode"),
                headerName: "Engineering code",
            },
            {
                field: getPropertyName<TagData>("area"),
                headerName: "Area",
            },
            {
                field: getPropertyName<TagData>("purchaseOrder"),
                headerName: "Purchase order",
            },
            {
                field: getPropertyName<TagData>("sequence"),
                headerName: "Sequence",
            },
            {
                field: getPropertyName<TagData>("system"),
                headerName: "System",
            },
        ],
    },
]
