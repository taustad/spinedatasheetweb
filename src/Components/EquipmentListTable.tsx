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
        { field: "tagNo", headerName: "Tag number", cellRenderer: (params: any) => linkToDocument(params) },
        { field: "description", headerName: "Description", flex: 1 },
        { field: "category", headerName: "Category" },
        { field: "area", headerName: "Area" },
        { field: "dicipline", headerName: "Dicipline", flex: 1 },
    ]

    return (
        <div
            className="ag-theme-alpine ag-theme-datasheetTable"
            style={{ flex: "1 1 auto", marginTop: 20, width: "1200px" }}
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
