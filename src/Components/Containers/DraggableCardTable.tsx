import React, { useState, DragEvent, useEffect } from "react"
import styled from "styled-components"
import { useOutletContext } from "react-router-dom"
import { formatCamelCase } from "../../utils/helpers"
import DraggableConversationCard from "./Components/DraggableConversationCard"
import { Message } from "../../Models/Message"
import { User } from "../../Models/User"
import { GetConversationService } from "../../api/ConversationService"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: row;
    gap: 5px;
`

const DragContainer = styled.div<{ $isOver?: boolean }>`
    box-sizing: border-box;
    width: 100%;
    flex-grow: 1;
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
    width:  100%;
`
interface DisplayConversation {
    property: string,
    value: string,
    conversationStatus: Components.Schemas.ConversationStatusDto,
    id: string
    messages: Message[]
    participants: User[]
}
interface Draggable {
    id: string;
    status: "open" | "closed" | "implemented" | "toBeImplemented";
    conversationObject: DisplayConversation
}

type Status = "Open" | "toBeImplemented" | "closed" | "implemented";

interface StatusOptions {
    [key: string]: Draggable[];
}

const DragableCardTable: React.FC = () => {
    const [, containerComments, , setContainerComments] = useOutletContext<any>()
    const [hoveredContainer, setHoveredContainer] = useState<string | null>(null)
    const [statusOptions, setStatusOptions] = useState<StatusOptions>({
        open: [],
        toBeImplemented: [],
        closed: [],
        implemented: [],
    })

    useEffect(() => {
        const newStatusOptions: StatusOptions = {
            open: [],
            toBeImplemented: [],
            closed: [],
            implemented: [],
        }

        containerComments.forEach((conversation: any) => {
            let status = conversation.conversationStatus.charAt(0).toLowerCase() + conversation.conversationStatus.slice(1)

            if (conversation.conversationStatus === "To_be_implemented") {
                status = "toBeImplemented"
            }

            if (status in newStatusOptions) {
                const item = {
                    id: conversation.id,
                    status,
                    conversationObject: conversation,
                }
                newStatusOptions[status].push(item)
            }
        })
        setStatusOptions(newStatusOptions)
    }, [containerComments])

    const handleDragEnterOrOver = (status: string, e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setHoveredContainer(status)
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setHoveredContainer(null)
    }

    const handleDragStart = (e: DragEvent<HTMLDivElement>, id: string) => {
        e.dataTransfer.setData("text/plain", id)
    }

    const mapStatusToConversationStatusDto = (status: string): Components.Schemas.UpdateConversationDto => {
        switch (status) {
            case "open":
                return { conversationStatus: "Open" }
            case "toBeImplemented":
                return { conversationStatus: "To_be_implemented" }
            case "closed":
                return { conversationStatus: "Closed" }
            case "implemented":
                return { conversationStatus: "Implemented" }
            default:
                throw new Error(`State ${status} is not a valid conversation state`)
        }
    }

    const handleDrop = async (newStatus: string, e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const itemId = e.dataTransfer.getData("text/plain")
        const dto: Components.Schemas.UpdateConversationDto = mapStatusToConversationStatusDto(newStatus)
        const result = await (await GetConversationService()).updateConversation(
            "00000000-0000-0000-0000-000000000000",
            "00000000-0000-0000-0000-000000000000",
            itemId,
            dto,
        )
        const newConversations = containerComments.map((c: any) => (c.id === itemId ? { ...c, conversationStatus: result.conversationStatus } : c))
        setContainerComments(newConversations)
    }

    const handleDragEnd = () => {
        setHoveredContainer(null)
    }

    return (
        <Wrapper>
            {Object.keys(statusOptions).map((status) => (
                <DragContainer
                    key={status}
                    onDragOver={(e) => handleDragEnterOrOver(status, e)}
                    onDragEnter={(e) => handleDragEnterOrOver(status, e)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(status, e)}
                    $isOver={hoveredContainer === status}
                >
                    <ContainerHeader $status={status}>{`${formatCamelCase(status)} (${statusOptions[status].length})`}</ContainerHeader>
                    {statusOptions[status].map((item) => (
                        <DraggableElement
                            key={item.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item.id)}
                            onDragEnd={handleDragEnd}
                        >
                            <DraggableConversationCard
                                conversation={item.conversationObject}
                            />
                        </DraggableElement>
                    ))}
                </DragContainer>
            ))}
        </Wrapper>
    )
}

export default DragableCardTable
