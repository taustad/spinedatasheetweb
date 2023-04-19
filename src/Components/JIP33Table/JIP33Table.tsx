import { useCallback, useMemo, useState } from 'react'
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { AgGridReact } from "ag-grid-react"
import { ColDef } from "ag-grid-community"
import "ag-grid-enterprise"
import { ColorLegendEnum } from './JIP33ColorLegendEnums'

interface Props {
    rowData: object[],
}

function JIP33Table({
    rowData,
}: Props) {
    useAgGridStyles()

    const red = "#e6b8b7"
    const lightBlue = "#b7dee8"
    const grey = "#bfbfbf"
    const lightGreen = "#d8e4bc"
    const green = "#92d050"
    const lightOrange = "#fcd5b4"
    const white = "white"

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const reqColor = (reqColor: any, remainingColor: string) => {
        if (reqColor === ColorLegendEnum.SelectPurComDropDown) {
            return { backgroundColor: red }
        }
        if (reqColor === ColorLegendEnum.InputDataPurCom) {
            return { backgroundColor: red }
        }
        if (reqColor === ColorLegendEnum.SelectSupComDropDown) {
            return { backgroundColor: lightBlue }
        }
        if (reqColor === ColorLegendEnum.InputDataSupCom) {
            return { backgroundColor: lightBlue }
        }
        if (reqColor === ColorLegendEnum.SelectEitherPurOrSupComDropDown) {
            return { backgroundColor: lightGreen }
        }
        if (reqColor === ColorLegendEnum.InputDataEitherPurOrSupCom) {
            return { backgroundColor: lightGreen }
        }
        if (reqColor === ColorLegendEnum.SelectUnitsOfDropDown) {
            return { backgroundColor: lightOrange }
        }
        if (reqColor === ColorLegendEnum.SelectNoInputExp) {
            return { backgroundColor: grey }
        }
        if (reqColor === ColorLegendEnum.InputDataNoInputExp) {
            return { backgroundColor: grey }
        }
        if (reqColor === ColorLegendEnum.UOMFixedUnitGrey) {
            return { backgroundColor: grey }
        }
        if (reqColor === ColorLegendEnum.UOMFixedUnitWhite) {
            return { backgroundColor: "white" }
        }
        if (reqColor === ColorLegendEnum.SpineModification) {
            return { backgroundColor: green }
        }
        return { backgroundColor: remainingColor }
    }

    const columns = [
        { field: "refClause", headerName: "Ref. Clause", hide: true },
        { field: "description", headerName: "Description", width: 400 },
        { field: "purchaserReq", headerName: "Purchaser requirement", cellStyle: (params: any) => reqColor(params.data.purchaserReqColor, red), width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "purchaserReqUOM", headerName: "Unit of measure", cellStyle: (params: any) => reqColor(params.data.purchaserReqUOMColor, white), width: 140 },
        { field: "supplierOfferedVal", headerName: "Supplier offered value", cellStyle: (params: any) => reqColor(params.data.supplierOfferedValColor, grey), width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "supplierOfferedValUOM", headerName: "Unit of measure", cellStyle: (params: any) => reqColor(params.data.supplierOfferedValUOMColor, white), width: 140 },
        { field: "additionalNotes", headerName: "Additional notes", flex: 1, cellStyle: (params: any) => reqColor(params.data.additionalNotesColor, white) },
    ]

    return (
        <>
            <div className="ag-theme-alpine ag-theme-datasheetTable" style={{ flex: "1 1 auto", width: "100%" }}>
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
                    rowHeight={35}
                />
            </div>
        </>
    )
}

export default JIP33Table
