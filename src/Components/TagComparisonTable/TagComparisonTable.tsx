import { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

import {
    ColDef,
} from '@ag-grid-community/core'
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

    const tagRows = tags.map((tag) => {
        return tag.purchaserRequirement
    })

    return (
        <>
            <div className="ag-theme-alpine" style={{ flex: "1 1 auto", marginTop: 20, width: "90%" }}>
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
                    modules={[ClientSideRowModelModule]}
                />
            </div>
        </>
    )
}

export default TagComparisonTable
