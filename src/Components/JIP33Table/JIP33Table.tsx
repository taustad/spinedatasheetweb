import React, { Dispatch, SetStateAction, useMemo } from "react"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { ColDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import { Icon } from "@equinor/eds-core-react"
import { comment, comment_chat } from "@equinor/eds-icons"
import { ReviewComment } from "../../Models/ReviewComment"
import { ColorLegendEnum } from "./JIP33ColorLegendEnums"

interface Props {
    rowData: object[]
    reviewComments?: ReviewComment[] | undefined
    setReviewSideSheetOpen?: Dispatch<SetStateAction<boolean>> | undefined
    setCurrentProperty?: Dispatch<SetStateAction<string>> | undefined
    setWidth?: (width: number) => void
    width?: number
}

function JIP33Table({
    rowData,
    reviewComments,
    setReviewSideSheetOpen,
    setCurrentProperty,
    setWidth,
    width,
}: Props) {
    useAgGridStyles()

    const red = "white" // "#e6b8b7"
    const lightBlue = "white" // "#b7dee8"
    const grey = "white" // "#bfbfbf"
    const lightGreen = "white" // "#d8e4bc"
    const green = "white" // "#92d050"
    const lightOrange = "white" // "#fcd5b4"
    const white = "white"

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            filter: "agMultiColumnFilter",
            resizable: true,
            editable: false,
        }),
        [],
    )

    const reqColor = (colorParam: any, remainingColor: string) => {
        if (colorParam === ColorLegendEnum.SelectPurComDropDown) {
            return { backgroundColor: red }
        }
        if (colorParam === ColorLegendEnum.InputDataPurCom) {
            return { backgroundColor: red }
        }
        if (colorParam === ColorLegendEnum.SelectSupComDropDown) {
            return { backgroundColor: lightBlue }
        }
        if (colorParam === ColorLegendEnum.InputDataSupCom) {
            return { backgroundColor: lightBlue }
        }
        if (colorParam === ColorLegendEnum.SelectEitherPurOrSupComDropDown) {
            return { backgroundColor: lightGreen }
        }
        if (colorParam === ColorLegendEnum.InputDataEitherPurOrSupCom) {
            return { backgroundColor: lightGreen }
        }
        if (colorParam === ColorLegendEnum.SelectUnitsOfDropDown) {
            return { backgroundColor: lightOrange }
        }
        if (colorParam === ColorLegendEnum.SelectNoInputExp) {
            return { backgroundColor: grey }
        }
        if (colorParam === ColorLegendEnum.InputDataNoInputExp) {
            return { backgroundColor: grey }
        }
        if (colorParam === ColorLegendEnum.UOMFixedUnitGrey) {
            return { backgroundColor: grey }
        }
        if (colorParam === ColorLegendEnum.UOMFixedUnitWhite) {
            return { backgroundColor: "white" }
        }
        if (colorParam === ColorLegendEnum.SpineModification) {
            return { backgroundColor: green }
        }
        return { backgroundColor: remainingColor }
    }

    const commentIcon = (params: any) => {
        const commentsExist = reviewComments?.some(
            (c) => c.property === params.data.property,
        )
        if (
            commentsExist
            && setReviewSideSheetOpen !== undefined
            && setCurrentProperty !== undefined
        ) {
            return (
                <Icon
                    data={comment_chat}
                    onClick={() => {
                        setReviewSideSheetOpen(true)
                        if (width && setWidth) {
                            setWidth(width)
                        } else if (setWidth) {
                            setWidth(600)
                        }

                        setCurrentProperty(params.data)
                    }}
                    color="#007079"
                />
            )
        }
        if (
            setReviewSideSheetOpen !== undefined
            && setCurrentProperty !== undefined
        ) {
            return (
                <Icon
                    data={comment}
                    onClick={() => {
                        setReviewSideSheetOpen(true)
                        if (width && setWidth) {
                            setWidth(width)
                        } else if (setWidth) {
                            setWidth(600)
                        }
                        setCurrentProperty(params.data)
                    }}
                    color="#007079"
                />
            )
        }
        return null
    }

    const columns = [
        { field: "refClause", headerName: "Ref. Clause", hide: true },
        { field: "description", headerName: "Description", width: 400 },
        {
            field: "purchaserReq",
            headerName: "Purchaser requirement",
            cellStyle: (params: any) => reqColor(params.data.purchaserReqColor, red),
            width: 220,
        }, // backgroundColor needs to be set by data params, not general.
        {
            field: "purchaserReqUOM",
            headerName: "Unit of measure",
            cellStyle: (params: any) => reqColor(params.data.purchaserReqUOMColor, white),
            width: 140,
        },
        {
            field: "supplierOfferedVal",
            headerName: "Supplier offered value",
            cellStyle: (params: any) => reqColor(params.data.supplierOfferedValColor, grey),
            width: 220,
        }, // backgroundColor needs to be set by data params, not general.
        {
            field: "supplierOfferedValUOM",
            headerName: "Unit of measure",
            cellStyle: (params: any) => reqColor(params.data.supplierOfferedValUOMColor, white),
            width: 140,
        },
        {
            field: "comment",
            headerName: "Comment",
            cellStyle: (params: any) => reqColor(params.data.commentColor, white),
            cellRenderer: commentIcon,
        },
        {
            field: "additionalNotes",
            headerName: "Additional notes",
            flex: 1,
            cellStyle: (params: any) => reqColor(params.data.additionalNotesColor, white),
        },
    ]

    return (
        <div
            className="ag-theme-alpine ag-theme-datasheetTable"
            style={{ flex: "1 1 auto", width: "100%", height: "100%" }}
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
                headerHeight={48}
                rowHeight={35}
                enableRangeSelection
                suppressCopySingleCellRanges
            />
        </div>
    )
}

export default JIP33Table
