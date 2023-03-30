import { useMemo } from "react"
import { AgGridReact } from "@ag-grid-community/react"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { ColDef } from "@ag-grid-community/core"
import { Link } from "react-router-dom"
import { tokens } from "@equinor/eds-tokens"
import { Datasheet } from "../Models/Datasheet"

interface Props {
    tags: Datasheet[],
}

function EquipmentListTable({ tags }: Props) {
    useAgGridStyles()
    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const linkToDocument = (params: any) => (
        <Link
            to="/JIP33"
            style={{ color: tokens.colors.text.static_icons__default.rgba }}
        >
            {params.value}
        </Link>
    )

    const columns = [
        {
            headerName: "Tag info",
            children: [
                { field: "tagNo", headerName: "Tag number", cellRenderer: (params: any) => linkToDocument(params) },
                { field: "contractNo", headerName: "ContractNo"},
                { field: "description", headerName: "Description", flex: 1, minWidth: 100 },
                { field: "category", headerName: "Category" },
                { field: "area", headerName: "Area", flex: 1, maxWidth: 100, minWidth: 80 },
                { field: "dicipline", headerName: "Dicipline" },
            ]

        },
        {
            headerName: "Review info",
            children: [
                { field: "requirementMatch", headerName: "Requirement match" },
                { field: "commentResponsible", headerName: "Comment responsible" },
                { field: "reviewers", headerName: "Reviewers" },
                { field: "reviewDeadline", headerName: "Review deadline" },
                { field: "reviewStatus", headerName: "Review status" },
            ]
        }
    ]

    return (
        <div
            className="ag-theme-alpine ag-theme-datasheetTable"
            style={{ flex: "1 1 auto", marginTop: 20, width: "1700px" }}
        >
            <AgGridReact<Datasheet>
                rowData={tags}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                animateRows
                domLayout="autoHeight"
                enableCellChangeFlash
                rowSelection="multiple"
                suppressMovableColumns
                headerHeight={48}
                rowHeight={35}
                modules={[ClientSideRowModelModule]}
            />
        </div>
    )
}
export default EquipmentListTable
