import React, {
 Dispatch, SetStateAction, useContext, useMemo,
} from "react"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import { tokens } from "@equinor/eds-tokens"
import { Icon } from "@equinor/eds-core-react"
import {
 block, check, checkbox_outline, close, comment_chat, done, tag,
} from "@equinor/eds-icons"
import styled from "styled-components"
import { ColDef, ICellRendererParams } from "@ag-grid-community/core"
import { Link, useLocation } from "react-router-dom"
import { TagData } from "../../Models/TagData"
import EquipmentListReviewRenderer from "./EquipmentListReviewRenderer"
import { ViewContext } from "../../Context/ViewContext"

interface Props {
    tags: TagData[]
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>
    setTagInReview: Dispatch<SetStateAction<string | undefined>>
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>
}

const Wrapper = styled.div`
    height: calc(100vh - 260px);
`

const TableContainer = styled.div`
    flex: 1 1 auto;
    width: 100%; 
    height: 100%;
`

const TagIcon = styled(Icon)`
    position: relative;
    top: 4px;
    padding-right: 9px;
`

function EquipmentListTable({
    tags,
    setReviewModalOpen,
    setTagInReview,
    setRevisionInReview,
}: Props) {
    const location = useLocation()
    const styles = useStyles()

    const {
        myReviews, currentUserId,
    } = useContext(ViewContext)

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            filter: "agMultiColumnFilter",
            resizable: true,
            editable: false,
        }),
        [],
    )

    const typeOfJIP33 = ({ data: { discipline } }: any) => {
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
            const result = {
                ...location,
                pathname: `${location.pathname}${typeOfJIP33(params)}/${params.data.tagNo}`,
            }
            return result
        }
        const result = {
            ...location,
            pathname: `${location.pathname}/${typeOfJIP33(params)}/${params.data.tagNo}`,
        }
        return result
    }

    const linkToDocument = (params: any) => (
        <Link
            to={getTagLink(params)}
            style={{ color: tokens.colors.text.static_icons__default.rgba }}
        >
            <TagIcon data={tag} color="green" size={18} />
            {params.value}
        </Link>
    )

    const tagDataReviewStatusRenderer = (params: any) => {
        const status = params.data.review?.status
        switch (status) {
            case "Reviewed":
                return <Icon data={done} color="green" />
            case "Resubmit":
                return <Icon data={block} color="red" />
            default:
                return null
        }
    }

    const revisionContainerReviewStatusRenderer = (
        params: ICellRendererParams,
    ) => {
        const status = params.data.revisionContainer?.revisionContainerReview?.status
        switch (status) {
            case "Reviewed":
                return <Icon data={done} color="green" />
            case "Resubmit":
                return <Icon data={block} color="red" />
            default:
                return null
        }
    }

    const reviewDeadlineRenderer = (params: ICellRendererParams) => {
        if (
            params.data.revisionContainer === null
            || params.data.revisionContainer === undefined
        ) {
            return null
        }
        const packageDate = new Date(
            params.data.revisionContainer.revisionContainerDate,
        )
        const deadline = new Date(
            packageDate.setDate(packageDate.getDate() + 10),
        )
        if (deadline < new Date()) {
            return (
                <>
                    <Icon data={block} color="red" />
                    {deadline.toISOString().slice(0, 10)}
                </>
            )
        }

        return deadline.toISOString().slice(0, 10)
    }

    const getReviewStatusIcon = (status: Components.Schemas.ReviewStatusDto) => {
        switch (status) {
            case "New":
                return <Icon data={checkbox_outline} color="gray" />
            case "Reviewed":
                return <Icon data={check} color="green" />
            case "Resubmit":
                return <Icon data={close} color="red" />
            case "ReviewedWithComment":
                return <Icon data={comment_chat} color="orange" />
            default:
                return null
        }
    }

    const reviewStatusRenderer = (params: ICellRendererParams) => {
        console.log("reviewStatusRenderer params: ", params)

        const rowReview = myReviews.find((r) => r.tagNo === params.data.tagNo)

        if (!rowReview) { return null }

        console.log("currentUserId: ", currentUserId)

        const reviewerReview = rowReview.reviewer?.find((r) => r.reviewerId === currentUserId)

        if (!reviewerReview) { return null }

        return getReviewStatusIcon(reviewerReview.status)
        }

    const columns = [
        {
            headerName: "Tag info",
            children: [
                {
                    field: "tagNo",
                    headerName: "Tag number",
                    cellRenderer: (params: any) => linkToDocument(params),
                },
                {
                    field: "reviewStatus",
                    headerName: "Review status",
                    cellRenderer: (params: any) => reviewStatusRenderer(params),
                },
                { field: "version", headerName: "Version number" },
                {
                    field: "revisionContainer.revisionNumber",
                    headerName: "Revision number",
                },
                {
                    field: "revisionContainer.revisionContainerName",
                    headerName: "Collection group",
                },
                {
                    field: "revisionContainer.contract.contractName",
                    headerName: "Contract",
                },
                {
                    field: "description",
                    headerName: "Description",
                    flex: 1,
                    minWidth: 100,
                },
                { field: "category", headerName: "Category" },
                {
                    field: "area",
                    headerName: "Area",
                    flex: 1,
                    maxWidth: 100,
                    minWidth: 80,
                },
                { field: "discipline", headerName: "Discipline" },
            ],
        },
        {
            headerName: "Review info",
            children: [
                // {
                //     field: "",
                //     headerName: "Review",
                //     cellRenderer: (params: any) => EquipmentListReviewRenderer(
                //         params,
                //         setReviewModalOpen,
                //         setTagInReview,
                //         setRevisionInReview,
                //     ),
                // },
                // {
                //     field: "revisionContainer.revisionContainerReview.status",
                //     headerName: "Revision container review status",
                //     cellRenderer: (params: any) => revisionContainerReviewStatusRenderer(params),
                // },
                // {
                //     field: "review.status",
                //     headerName: "Review status",
                //     cellRenderer: (params: any) => tagDataReviewStatusRenderer(params),
                // },
                // {
                //     field: "review.approverId",
                //     headerName: "Reviewers",
                // },
                // {
                //     field: "review.commentResponsible",
                //     headerName: "Comment responsible",
                // },
                {
                    field: "reviewDeadline",
                    headerName: "Review deadline",
                    cellRenderer: (params: any) => reviewDeadlineRenderer(params),
                },
            ],
        },
    ]

    return (
        <Wrapper className={styles.root}>
            <TableContainer
                className="ag-theme-alpine-fusion"
            >
                <AgGridReact
                    rowData={tags}
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
export default EquipmentListTable
