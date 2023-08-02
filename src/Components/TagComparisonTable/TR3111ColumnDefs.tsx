import { ColDef } from "@ag-grid-community/core"
import { TagData } from "../../Models/TagData"

function getPropertyName<T>(property: keyof T): keyof T {
    return property
}

export const comparisonTR3111ColumnDefs = (): ColDef[] => [
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
]
