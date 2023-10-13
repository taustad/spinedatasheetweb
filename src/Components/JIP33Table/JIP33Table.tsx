import React, {
    Dispatch, SetStateAction, useMemo, useContext, useState,
} from "react"
import { ColDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import { Icon } from "@equinor/eds-core-react"
import { comment, comment_chat } from "@equinor/eds-icons"
import styled from "styled-components"
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
}

function JIP33Table({
    rowData,
}: Props) {
    const {
    conversations,
    setActiveSheetTab,
    setSideSheetOpen,
    setCurrentProperty,
} = useContext(ViewContext)
    const styles = useStyles()

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

    const openConversationOnSheet = (paramsData: { property: string }) => {
        if (setSideSheetOpen && setCurrentProperty) {
            setSideSheetOpen(true)
            console.log("setting current property to: ", paramsData.property)
            setCurrentProperty(paramsData.property)
            setActiveSheetTab(4)
        }
    }

    const commentIcon = (params: any) => {
        const commentsExist = conversations?.some(
            (c) => c.property === params.data.property,
        )
        if (
            commentsExist
            && setSideSheetOpen !== undefined
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
            setSideSheetOpen !== undefined
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
        },
        {
            field: "purchaserReqUOM",
            headerName: "Unit of measure",
            width: 140,
        },
        {
            field: "supplierOfferedVal",
            headerName: "Supplier offered value",
            width: 220,
        },
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
                    headerHeight={48}
                    rowHeight={35}
                    enableRangeSelection
                />
            </TableContainer>
        </Wrapper>
    )
}

export default JIP33Table
