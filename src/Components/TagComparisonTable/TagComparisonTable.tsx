import { useMemo } from 'react'
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { AgGridReact } from "ag-grid-react"
import { ColDef } from "ag-grid-enterprise"
import "ag-grid-enterprise"
import { Datasheet } from '../../Models/Datasheet';
import { comparisonGeneralColumnDefs } from './GeneralColumnDefs';

interface Props {
    tags: Datasheet[],
}

function TagComparisonTable({
    tags,
}: Props) {
    useAgGridStyles()

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const newColumns = comparisonGeneralColumnDefs()

    const tagRows = tags.map((tag) => { return ({...tag.purchaserRequirement, tagNumber: tag.tagNo}) })

    return (
        <>
            <div className="ag-theme-alpine" style={{ flex: "1 1 auto", width: "90%" }}>
                <AgGridReact
                    rowData={tagRows}
                    columnDefs={newColumns}
                    defaultColDef={defaultColDef}
                    animateRows
                    domLayout="autoHeight"
                    enableCellChangeFlash
                    rowSelection="multiple"
                    suppressMovableColumns
                    headerHeight={48}
                    rowHeight={35}
                />
            </div>
        </>
    )
}

export default TagComparisonTable
