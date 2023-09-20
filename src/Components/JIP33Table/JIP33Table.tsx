import React, {
    Dispatch, SetStateAction, useMemo, useContext, useState,
} from "react"
import { ColDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import { Icon } from "@equinor/eds-core-react"
import { comment, comment_chat } from "@equinor/eds-icons"
import styled from "styled-components"
import { ColorLegendEnum } from "./JIP33ColorLegendEnums"
import { ViewContext } from "../../Context/ViewContext"

const Wrapper = styled.div`
    height: 100%;
    margin: 0 15px 0 0;
`

const TableContainer = styled.div`
    flex: 1 1 auto;
     width: 100%; 
     height: 100%;
`
interface Props {
    rowData: object[]
    setReviewSideSheetOpen?: Dispatch<SetStateAction<boolean>> | undefined
    setCurrentProperty?: Dispatch<SetStateAction<string>> | undefined
    setWidth?: (width: number) => void
    width?: number
}

function JIP33Table({
    rowData,
    setReviewSideSheetOpen,
    setCurrentProperty,
    setWidth,
    width,
}: Props) {
    const { activeTagData, conversations, setActiveSheetTab } = useContext(ViewContext)
    const [reviewOpen, setReviewOpen] = useState<boolean>(false)
    const styles = useStyles()

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
            cellDataType: false,
        }),
        [],
    )

    const openConversationOnSheet = (paramsData: React.SetStateAction<string>) => {
        if (setReviewSideSheetOpen && setCurrentProperty) {
            setReviewSideSheetOpen(true)

            if (width && setWidth) {
                setWidth(width)
            } else if (setWidth) {
                setWidth(620)
            }
            setCurrentProperty(paramsData)
            setActiveSheetTab(4)
        }
    }

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
        if (activeTagData?.review === undefined || activeTagData?.review?.id === undefined) {
            setReviewOpen(true)
            return null
        }

        setReviewOpen(false)

        const commentsExist = conversations?.some(
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
                    onClick={() => openConversationOnSheet(params.data)}
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
                    onClick={() => openConversationOnSheet(params.data)}
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
            width: 220,
        }, // backgroundColor needs to be set by data params, not general.
        {
            field: "purchaserReqUOM",
            headerName: "Unit of measure",
            width: 140,
        },
        {
            field: "supplierOfferedVal",
            headerName: "Supplier offered value",
            width: 220,
        }, // backgroundColor needs to be set by data params, not general.
        {
            field: "supplierOfferedValUOM",
            headerName: "Unit of measure",
            width: 140,
        },
        {
            field: "comment",
            headerName: "Comment",
            cellRenderer: commentIcon,
        },
        {
            field: "additionalNotes",
            headerName: "Additional notes",
            width: 220,
        },
    ]

    return (
        <>
            {/* <EquipmentListReview
                isOpen={reviewOpen}
                setIsOpen={setReviewOpen}
                tagInReview={activeTagData?.id}
            /> */}

            <Wrapper className={styles.root}>
                <TableContainer
                    className="ag-theme-alpine ag-theme-datasheetTable"
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
                    />
                </TableContainer>
            </Wrapper>
        </>
    )
}

export default JIP33Table
