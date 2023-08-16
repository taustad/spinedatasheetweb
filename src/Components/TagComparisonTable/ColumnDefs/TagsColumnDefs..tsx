import { ColDef } from "@ag-grid-community/core"
import { TagData } from "../../../Models/TagData"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonTagsColumnDefs = (): ColDef[] => [
    {
        headerName: "Tag number",
        field: getPropertyName<TagData>("tagNo"),
        pinned: "left",
    },
]
