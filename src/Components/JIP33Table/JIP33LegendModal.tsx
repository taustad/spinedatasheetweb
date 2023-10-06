import React, { useMemo } from "react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import { ColDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import styled from "styled-components"
import { ColorLegendEnum } from "./JIP33ColorLegendEnums"

const Wrapper = styled.div`
    height: 100%;
`

const TableContainer = styled.div`
    flex: 1 1 auto;
     width: 100%; 
     height: 100%;
`

function JIP33LegendModal({ }) {
    const styles = useStyles()

    const red = "white" // "#e6b8b7"
    const lightBlue = "white" // "#b7dee8"
    const grey = "white" // "#aeaaaa"
    const lightGreen = "white" // "#d8e4bc"
    const green = "white" // "#a2fc82"
    const lightOrange = "white" // "#fcd5b4"

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            filter: true,
            resizable: true,
            editable: false,
        }),
        [],
    )

    const reqColor = (params: any) => {
        if (params.data.color === ColorLegendEnum.SelectPurComDropDown) {
            return { backgroundColor: red }
        }
        if (params.data.color === ColorLegendEnum.InputDataPurCom) {
            return { backgroundColor: red }
        }
        if (params.data.color === ColorLegendEnum.SelectSupComDropDown) {
            return { backgroundColor: lightBlue }
        }
        if (params.data.color === ColorLegendEnum.InputDataSupCom) {
            return { backgroundColor: lightBlue }
        }
        if (
            params.data.color
            === ColorLegendEnum.SelectEitherPurOrSupComDropDown
        ) {
            return { backgroundColor: lightGreen }
        }
        if (params.data.color === ColorLegendEnum.InputDataEitherPurOrSupCom) {
            return { backgroundColor: lightGreen }
        }
        if (params.data.color === ColorLegendEnum.SelectUnitsOfDropDown) {
            return { backgroundColor: lightOrange }
        }
        if (params.data.color === ColorLegendEnum.SelectNoInputExp) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.InputDataNoInputExp) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.UOMFixedUnitGrey) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.UOMFixedUnitWhite) {
            return { backgroundColor: "white" }
        }
        if (params.data.color === ColorLegendEnum.SpineModification) {
            return { backgroundColor: green }
        }
        return { backgroundColor: "white" }
    }

    const rowData = [
        {
            legend: "select",
            color: ColorLegendEnum.SelectPurComDropDown,
            description:
                "Purchaser completed, drop-down list of pre-defined values (may be prepopulated with a default value)",
        },
        {
            legend: "input data",
            color: ColorLegendEnum.InputDataPurCom,
            description: "Purchaser completed data entry",
        },
        {
            legend: "select",
            color: ColorLegendEnum.SelectSupComDropDown,
            description:
                "Supplier completed, drop-down list of pre-defined values",
        },
        {
            legend: "input data",
            color: ColorLegendEnum.InputDataSupCom,
            description: "Supplier completed data entry",
        },
        {
            legend: "select",
            color: ColorLegendEnum.SelectEitherPurOrSupComDropDown,
            description:
                "Either supplier or purchaser completed, "
                + "drop-down list of predefined values "
                + "(may be prepopulated with a default value)",
        },
        {
            legend: "input data",
            color: ColorLegendEnum.InputDataEitherPurOrSupCom,
            description: "Either supplier or purchaser completed data entry",
        },
        {
            legend: "select",
            color: ColorLegendEnum.SelectUnitsOfDropDown,
            description: "Selection of units from a pre-defined drop-down list",
        },
        {
            legend: "select",
            color: ColorLegendEnum.SelectNoInputExp,
            description: "No input expected",
        },
        {
            legend: "input data",
            color: ColorLegendEnum.InputDataNoInputExp,
            description: "No input expected",
        },
        {
            legend: "UOM",
            color: ColorLegendEnum.UOMFixedUnitGrey,
            description: "Fixed unit of measure",
        },
        {
            legend: "UOM",
            color: ColorLegendEnum.UOMFixedUnitWhite,
            description: "Fixed unit of measure",
        },
        { legend: "", description: "No unit of measure (null)" },
        {
            legend: "",
            color: ColorLegendEnum.SpineModification,
            description:
                "Spine modification - Supplier must confirm required value or better if possible ",
        },
    ]

    const columns = [
        {
            field: "legend",
            headerName: "Legend",
            cellStyle: (params: any) => reqColor(params),
        },
        { field: "description", headerName: "Description", flex: 1 },
    ]

    return (
        <Wrapper className={styles.root}>
            <TableContainer
                className="ag-theme-alpine-fusion"
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows
                    domLayout="normal"
                    enableCellChangeFlash
                    rowSelection="multiple"
                    suppressMovableColumns
                    suppressHorizontalScroll
                    headerHeight={48}
                    rowHeight={35}
                />
            </TableContainer>
        </Wrapper>
    )
}

export default JIP33LegendModal
