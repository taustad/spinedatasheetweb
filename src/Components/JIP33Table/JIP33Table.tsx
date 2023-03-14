import { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"

import "../../AgGridTable.css"

import {
    ColDef,
  } from '@ag-grid-community/core'

interface Props {
    rowData: object[],
}

function JIP33Table({
    rowData,
}: Props) {
    useAgGridStyles()

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const columns = [
        { field: "refClause", headerName: "Ref. Clause" },
        { field: "description", headerName: "Description", width: 400 },
        { field: "purchaserReq", headerName: "Purchaser requirement", cellStyle: { backgroundColor: "#e6b8b7" }, width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "purchaserReqUOM", headerName: "Purchaser requirement UOM", width: 220 },
        { field: "supplierOfferedVal", headerName: "Supplier offered value", cellStyle: { backgroundColor: "#aeaaaa" }, width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "supplierOfferedValUOM", headerName: "Supplier offered value UOM", width: 220 },
        { field: "additionalNotes", headerName: "Additional notes", flex: 1 },
    ]

    return (
        <>
            <div className="ag-theme-alpine ag-theme-datasheetTable" style={{ flex: "1 1 auto", marginTop: 20, width: "90%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows
                    domLayout="autoHeight"
                    enableCellChangeFlash
                    rowSelection="multiple"
                    suppressMovableColumns
                    headerHeight={48}
                    rowHeight={50}
                    modules={[ClientSideRowModelModule]}
                />
            </div>
        </>
    )
}

export default JIP33Table
