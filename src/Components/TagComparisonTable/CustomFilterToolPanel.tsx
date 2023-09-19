import {
 ColDef, ICellRendererParams, IToolPanel,
} from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import {
 Typography,
} from "@equinor/eds-core-react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import React, { useMemo, useRef } from "react"
import { styled } from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100rem;
    z-index: 100;
`

function CustomFilterToolPanel({ }: IToolPanel) {
    const styles = useStyles()
    const gridRef = useRef<AgGridReact>(null)

    const columns = [
        {
            field: "generalFilter",
            rowGroup: true,
            flex: 1,
            // eslint-disable-next-line react/no-unstable-nested-components
            cellRenderer: (params: ICellRendererParams) => <span style={{ marginLeft: 60 }}>{params.value}</span>,
        },
    ]

    const rowData = [
        {
            generalFilter: "Changes since last revision",
        },
        {
            generalFilter: "Invalid properties",
        },
        {
            generalFilter: "Comments",
        },
    ]

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: false,
            filter: "agMultiColumnFilter",
            resizable: true,
            editable: false,
        }),
        [],
    )

    const groupRowRendererParams = {
        checkbox: true,
        suppressCount: true,
    }

    return (
        <>
            <Typography>Work in progress...</Typography>
            <Wrapper>
                <div
                    className="ag-theme-alpine-fusion"
                    style={{ flex: "1 1 auto", width: "700" }}
                >
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columns}
                        defaultColDef={defaultColDef}
                        animateRows
                        domLayout="autoHeight"
                        enableCellChangeFlash
                        rowSelection="multiple"
                        suppressMovableColumns
                        headerHeight={0}
                        rowHeight={35}
                        enableRangeSelection
                        suppressCopySingleCellRanges
                        groupRowRendererParams={groupRowRendererParams}
                        groupDisplayType="groupRows"
                    />
                </div>
            </Wrapper>

        </>
    )
}

export default CustomFilterToolPanel
