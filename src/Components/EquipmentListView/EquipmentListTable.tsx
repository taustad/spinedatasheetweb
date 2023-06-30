import { Dispatch, SetStateAction, useMemo } from "react"
import { AgGridReact } from "@ag-grid-community/react"
import { tokens } from "@equinor/eds-tokens"
import { Icon } from "@equinor/eds-core-react"
import { add, block, done, tag } from "@equinor/eds-icons"
import styled from "styled-components"
import { ColDef } from "@ag-grid-community/core"
import { Link, useLocation } from "react-router-dom"
import { TagData } from "../../Models/TagData"
import EquipmentListReviewRenderer from "./EquipmentListReviewRenderer"

interface Props {
    tags: TagData[],
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>,
    setTagInReview: Dispatch<SetStateAction<string | undefined>>
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>
}

const TagIcon = styled(Icon)`
    position: relative;
    top: 4px;
    padding-right: 9px;
`

function EquipmentListTable({
    tags,
    setReviewModalOpen,
    setTagInReview,
    setRevisionInReview
}: Props) {
    const location = useLocation()

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: "agMultiColumnFilter",
        resizable: true,
        editable: false,
    }), [])

    const typeOfJIP33 = (params: any) => {
        const discipline = params.data.discipline
        if (discipline === "Mechanical") {
            return "JIP33Mechanical"
        }
        if (discipline === "Electrical") {
            return "JIP33Electrical"
        }
        return "JIP33Instrument"
    }

    const getTagLink = (params: any) => {
        const lastChar = location.pathname.charAt(location.pathname.length - 1)
        if (lastChar === "/") {
            const result = ({ ...location, pathname: `${location.pathname}${typeOfJIP33(params)}/${params.data.id}` })
            return result
        }
        const result = ({ ...location, pathname: `${location.pathname}/${typeOfJIP33(params)}/${params.data.id}` })
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

    const reviewStatusRenderer = (params: any) => {
        const status = params.data.review?.status
        switch (status) {
            case 3:
                return <Icon data={done} color="green" />
            case 4:
                return <Icon data={block} color="red" />
            default:
                return null
        }
    }


    const columns = [
        {
            headerName: "Tag info",
            children: [
                { field: "tagNo", headerName: "Tag number", cellRenderer: (params: any) => linkToDocument(params) },
                { field: "version", headerName: "Version number" },
                { field: "revisionPackage.revisionNumber", headerName: "Revision number" },
                { field: "revisionPackage.packageName", headerName: "Package name" },
                { field: "revisionPackage.contract.contractName", headerName: "Contract" },
                { field: "description", headerName: "Description", flex: 1, minWidth: 100 },
                { field: "category", headerName: "Category" },
                { field: "area", headerName: "Area", flex: 1, maxWidth: 100, minWidth: 80 },
                { field: "discipline", headerName: "Discipline" },
            ]

        },
        {
            headerName: "Review info",
            children: [
                { field: "", headerName: "Review", cellRenderer: (params: any) => EquipmentListReviewRenderer(params, setReviewModalOpen, setTagInReview, setRevisionInReview) },
                { field: "review.status", headerName: "Review status", cellRenderer: (params: any) => reviewStatusRenderer(params) },
                { field: "review.commentResponsible", headerName: "Comment responsible" },
                { field: "review.approverId", headerName: "Reviewers" },
                { field: "reviewDeadline", headerName: "Review deadline" },
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
                enableRangeSelection
                suppressCopySingleCellRanges
            />
        </div>
    )
}
export default EquipmentListTable
