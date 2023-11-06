import React, { useState, DragEvent } from "react"
import styled from "styled-components"
import { formatCamelCase } from "../../utils/helpers"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 5px;
`

const DragContainer = styled.div<{ $isOver?: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 450px;
    overflow-y: auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: background-color 0.1s ease-in-out;
    background-color: ${(props) => (props.$isOver ? "#E6F9EC" : "none")};
    border-radius: 5px;

`

const ContainerHeader = styled.div<{ $status: string }>`
    font-weight: bold;
    padding: 8px;
    user-select: none;          
    border-bottom: 3px solid;
    white-space: nowrap;      
    overflow: hidden;          
    text-overflow: ellipsis;   
    margin-bottom: 8px;
    border-color: #3aadb6;
    border-color: ${(props) => {
        switch (props.$status) {
            case "open":
                return "#007079"
            case "closed":
                return "#243746"
            case "implemented":
                return "#7D0023"
            case "toBeImplemented":
                return "#EB0037"
            default:
                return "#757575"
        }
    }};
`

const DraggableElement = styled.div`
    box-sizing: border-box;
    width:  100%;
    height: 40px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: white;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`

interface Draggable {
    id: number;
    title: string;
    status: "Open" | "Closed" | "Implemented" | "To_be_implemented";
}

const statuses = ["Open", "Closed", "Implemented", "To_be_implemented"] as const

const initialDraggables: Draggable[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
}))

interface ContainerData {
    [key: string]: Draggable[];
}

const DragableCardTable: React.FC = () => {
    const [hoveredContainer, setHoveredContainer] = useState<string | null>(null)
    const [containerData, setContainerData] = useState<ContainerData>({
        open: initialDraggables.filter((item) => item.status === "Open"),
        toBeImplemented: initialDraggables.filter((item) => item.status === "To_be_implemented"),
        closed: initialDraggables.filter((item) => item.status === "Closed"),
        implemented: initialDraggables.filter((item) => item.status === "Implemented"),
    })

        const handleLogChange = (itemId: number, oldStatus: string, newStatus: string) => {
        console.log(`Item with ID: ${itemId} moved from ${oldStatus} to ${newStatus}`)
    }

    const handleDragEnterOrOver = (status: string, e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setHoveredContainer(status)
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setHoveredContainer(null)
    }

    const handleDragStart = (e: DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData("text/plain", id.toString())
    }

    const handleDrop = (status: string, e: DragEvent<HTMLDivElement>) => {
        const itemId = parseInt(e.dataTransfer.getData("text/plain"), 10)
        const draggable = initialDraggables.find((item) => item.id === itemId)

        if (draggable) {
        const sourceStatus = Object.keys(containerData).find((key) => containerData[key].some((item) => item.id === itemId)) || "notReviewed"
        const updatedSource = containerData[sourceStatus].filter((item) => item.id !== itemId)
        setContainerData((prev) => ({ ...prev, [sourceStatus]: updatedSource }))
        setContainerData((prev) => ({ ...prev, [status]: [...prev[status], draggable] }))
        handleLogChange(itemId, sourceStatus, status)
        }
        setHoveredContainer(null)
    }

    return (
        <Wrapper>
            {Object.keys(containerData).map((status) => (
                <DragContainer
                    key={status}
                    onDragOver={(e) => handleDragEnterOrOver(status, e)}
                    onDragEnter={(e) => handleDragEnterOrOver(status, e)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(status, e)}
                    $isOver={hoveredContainer === status}
                >
                    <ContainerHeader $status={status}>{`${formatCamelCase(status)} (${containerData[status].length})`}</ContainerHeader>
                    {containerData[status].map((item) => (
                        <DraggableElement
                            key={item.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item.id)}
                        >
                            {item.title}
                        </DraggableElement>
            ))}
                </DragContainer>
        ))}
        </Wrapper>
    )
}

export default DragableCardTable
