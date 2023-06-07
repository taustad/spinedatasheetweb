import { useMemo } from "react"
import { AgGridReact } from '@ag-grid-community/react';
import { Link, useLocation } from "react-router-dom"
import { tokens } from "@equinor/eds-tokens"
import { Datasheet } from "../Models/Datasheet"
import { Icon } from '@equinor/eds-core-react'
import { tag } from '@equinor/eds-icons'
import styled from "styled-components"
import { ColDef } from "@ag-grid-community/core";

interface Props {
    tags: Datasheet[],
}

const TagIcon = styled(Icon)`
    position: relative;
    top: 4px;
    padding-right: 9px;
`

function EquipmentListTable({ tags }: Props) {
    const location = useLocation()

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const typeOfJIP33 = (params: any) => {
        const dicipline = params.data.dicipline
        if (dicipline === "Mechanical") {
            return "JIP33Mechanical"
        }
        if (dicipline === "Electrical") {
            return "JIP33Electrical"
        }
        return "JIP33Instrument"
    }

    const getTagLink = (params: any) => {
        console.log("location", location)
        const result = ({ ...location, pathname: `${typeOfJIP33(params)}/${params.data.id}` })
        console.log("result", result)
        return result
    }

    const linkToDocument = (params: any) => {
        return (
            <Link
                to={getTagLink(params)}
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
            <AgGridReact
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
