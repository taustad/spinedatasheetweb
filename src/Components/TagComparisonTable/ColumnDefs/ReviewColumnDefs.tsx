import { ColDef } from "@ag-grid-community/core"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonReviewColumnDefs = (): ColDef[] => [
    {
        headerName: "Assigned reviewers",
        field: getPropertyName<Components.Schemas.TagReviewerDto>("displayName"),
        hide: true,
    },
]
