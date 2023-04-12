import { useMemo } from "react"
import { AgGridReact } from "ag-grid-react"
import { ColDef } from "ag-grid-community"
import "ag-grid-enterprise"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import { Link } from "react-router-dom"
import { tokens } from "@equinor/eds-tokens"
import { Datasheet } from "../Models/Datasheet"
import { Icon } from '@equinor/eds-core-react'
import { tag } from '@equinor/eds-icons'
import styled from "styled-components"

interface Props {
    tags: Datasheet[],
}

const TagIcon = styled(Icon)`
    position: relative;
    top: 4px;
    padding-right: 9px;
`

function EquipmentListTable({ tags }: Props) {
    useAgGridStyles()
    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const linkToDocument = (params: any) => {
        return (
            <Link
                to={`JIP33/${params.data.id}`}
                style={{ color: tokens.colors.text.static_icons__default.rgba }}
            >
                <TagIcon data={tag} color={'green'} size={18} />
                {params.value}
            </Link>
        )
    }

    const columns = [
        {
            headerName: "Tag info",
            children: [
                { field: "tagNo", headerName: "Tag number", cellRenderer: (params: any) => linkToDocument(params) },
                { field: "contractNo", headerName: "ContractNo" },
                { field: "description", headerName: "Description", flex: 1, minWidth: 100 },
                { field: "category", headerName: "Category" },
                { field: "area", headerName: "Area", flex: 1, maxWidth: 100, minWidth: 80 },
                { field: "dicipline", headerName: "Dicipline" },
            ]

        },
        {
            headerName: "Review info",
            children: [
                { field: "requirementMatch", headerName: "Requirement match" },
                { field: "commentResponsible", headerName: "Comment responsible" },
                { field: "reviewers", headerName: "Reviewers" },
                { field: "reviewDeadline", headerName: "Review deadline" },
                { field: "reviewStatus", headerName: "Review status" },
            ]
        }
    ]

    return (
        <div
            className="ag-theme-alpine ag-theme-datasheetTable"
            style={{ flex: "1 1 auto", width: "100%" }}
        >
            <AgGridReact<Datasheet>
                rowData={tags}
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
    )
}
export default EquipmentListTable
