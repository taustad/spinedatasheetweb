import { Outlet, useNavigate, useParams } from "react-router-dom"
import React, {
 useState, useEffect, useContext, useMemo,
} from "react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import { tokens } from "@equinor/eds-tokens"
import { ColDef, ICellRendererParams } from "@ag-grid-community/core"
import styled from "styled-components"
import { ViewContext } from "../Context/ViewContext"
import { GetContainerService } from "../api/ContainerService"
import { GetConversationService } from "../api/ConversationService"

const TableContainer = styled.div`
    padding: 15px;
`

const TableWrapper = styled.div`
    width: 100%;
`

function ContainerPicker() {
    const { currentUserId } = useContext(ViewContext)
    const navigate = useNavigate()
    const params = useParams()
    const currentProject = useCurrentContext()
    const styles = useStyles()

    const [pickedContainer, setPickedContainer] = useState<Components.Schemas.ContainerDto | undefined>(undefined)
    const [containers, setContainers] = useState<Components.Schemas.ContainerDto[]>([])
    const [containerComments, setContainerComments] = useState<Components.Schemas.GetConversationDto[]>([])

            useEffect(() => {
            let isCancelled = false;
            (async () => {
                try {
                    if (currentUserId) {
                        const containerResults = await (await GetContainerService()).getContainers()
                        setContainers(containerResults)
                    }
                } catch {
                    if (!isCancelled) {
                        console.error("Error loading user reviews")
                    }
                }
            })()

            return () => {
                isCancelled = true
            }
        }, [currentUserId])

        useEffect(() => {
            let iscCancelled = false;
            (async () => {
                try {
                    if (containers.length > 0 && pickedContainer && pickedContainer.id) {
                        const allConversationsForContainer = await (await GetConversationService())
                            .getConversationsForContainer(pickedContainer.id)

                        setContainerComments(allConversationsForContainer)
                    }
                } catch {
                    if (!iscCancelled) {
                        console.error("Error loading user reviews")
                    }
                }
            })()
            return () => {
                iscCancelled = true
            }
        }, [pickedContainer])

        useEffect(() => {
            if (params.containerId) {
                const container = containers.find((item) => item.id === params.containerId)
                if (container) {
                    setPickedContainer(container)
                }
            } else {
                setPickedContainer(undefined)
            }
        }, [params, containers])

        const goToContainer = (container: Components.Schemas.ContainerDto) => {
            setPickedContainer(container)
            if (currentProject.currentContext) {
            navigate(`/${currentProject.currentContext.id}/containers/${container.id}`)
        }
        }

        const defaultColDef = useMemo<ColDef>(
            () => ({
                sortable: true,
                filter: "agMultiColumnFilter",
                resizable: true,
                editable: false,
            }),
        [],
        )
        const columnDefs: ColDef[] = [
            { field: "containerName", headerName: "Container Name" },
            { field: "revisionNumber", headerName: "Revision Number" },
            { field: "containerDate", headerName: "Container Date" },
        ]

return (
    !pickedContainer ? (
        <div>
            <TableContainer className={styles.root}>
                <TableWrapper className="ag-theme-alpine-fusion">
                    <AgGridReact
                        rowData={containers}
                        columnDefs={columnDefs}
                        onRowClicked={(row) => goToContainer(row.data)}
                        defaultColDef={defaultColDef}
                        animateRows
                        domLayout="autoHeight"
                        suppressMovableColumns
                        headerHeight={48}
                        rowHeight={50}
                        enableRangeSelection
                    />
                </TableWrapper>
            </TableContainer>
        </div>

    ) : (
        <Outlet context={[pickedContainer, containerComments]} />
    )
)
}

export default ContainerPicker
