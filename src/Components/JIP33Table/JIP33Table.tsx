import { Dispatch, SetStateAction, useEffect, useMemo } from "react"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { ColorLegendEnum } from "./JIP33ColorLegendEnums"
import { ColDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import { ReviewComment } from "../../Models/ReviewComment"
import { Icon } from "@equinor/eds-core-react"
import { comment, comment_chat } from "@equinor/eds-icons"
import { useAppContext } from "../../contexts/AppContext"

interface Props {
    rowData: object[],
    reviewComments?: ReviewComment[] | undefined,
    setReviewSideSheetOpen?: Dispatch<SetStateAction<boolean>> | undefined,
    setCurrentProperty?: Dispatch<SetStateAction<string>> | undefined,
}

function JIP33Table({
    rowData, reviewComments, setReviewSideSheetOpen, setCurrentProperty,
}: Props) {
    useAgGridStyles()

    const { activeTagData: tagData } = useAppContext()

    useEffect(() => {
        console.log("JIP33Table tagData", tagData)
    }, [tagData])

    const red = "white" //"#e6b8b7"
    const lightBlue = "white" //"#b7dee8"
    const grey = "white" // "#bfbfbf"
    const lightGreen = "white" // "#d8e4bc"
    const green = "white" //"#92d050"
    const lightOrange = "white" // "#fcd5b4"
    const white = "white"

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: "agMultiColumnFilter",
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

    const commentIcon = (params: any) => {
        const commentsExist = reviewComments?.some((c) => c.property === params.data.property)
        if (commentsExist && setReviewSideSheetOpen !== undefined && setCurrentProperty !== undefined) {
            return <Icon data={comment_chat} onClick={() => {
                setReviewSideSheetOpen(true)
                setCurrentProperty(params.data.property)
            }
            } color="#007079" />
        }
        if (setReviewSideSheetOpen !== undefined && setCurrentProperty !== undefined) {
            return <Icon data={comment} onClick={() => {
                setReviewSideSheetOpen(true)
                setCurrentProperty(params.data.property)
            }
            } color="#007079" />
        }
        return <></>
    }

    const columns = [
        { field: "refClause", headerName: "Ref. Clause", hide: true },
        { field: "description", headerName: "Description", width: 400 },
        { field: "purchaserReq", headerName: "Purchaser requirement", cellStyle: (params: any) => reqColor(params.data.purchaserReqColor, red), width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "purchaserReqUOM", headerName: "Unit of measure", cellStyle: (params: any) => reqColor(params.data.purchaserReqUOMColor, white), width: 140 },
        { field: "supplierOfferedVal", headerName: "Supplier offered value", cellStyle: (params: any) => reqColor(params.data.supplierOfferedValColor, grey), width: 220 }, // backgroundColor needs to be set by data params, not general.
        { field: "supplierOfferedValUOM", headerName: "Unit of measure", cellStyle: (params: any) => reqColor(params.data.supplierOfferedValUOMColor, white), width: 140 },
        { field: "comment", headerName: "Comment", cellStyle: (params: any) => reqColor(params.data.commentColor, white), cellRenderer: commentIcon },
        { field: "additionalNotes", headerName: "Additional notes", flex: 1, cellStyle: (params: any) => reqColor(params.data.additionalNotesColor, white) }
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
                    enableRangeSelection
                    suppressCopySingleCellRanges
                />
            </div>
        </>
    )
}

export default JIP33Table
