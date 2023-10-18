import React, { FC, useContext } from "react"
import {
    Icon, Typography, Tooltip,
} from "@equinor/eds-core-react"
import { tag } from "@equinor/eds-icons"
import { PersonPhoto } from "@equinor/fusion-components"
import styled from "styled-components"
import { ViewContext } from "../../../../Context/ViewContext"
import Card from "../../Components/Card"
import { Message } from "../../../../Models/Message"
import { User } from "../../../../Models/User"
import {
 formatDate, wrapInSpan, formatCamelCase, sanitizeContent,
} from "../../../../utils/helpers"

const ClickableCard = styled.button`
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: 0.2s;
    &:hover {
        background-color: #f7f7f7;
        transform: scale(1.02);
    }
`
const ConversationCardContainer = styled.div`
    padding: 0px 15px;
`
const TagInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

const CommentText = styled(Typography)`
    margin: 10px 0;
    max-width: 100%;
    white-space: wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;

    span {
        color: #3aadb6;
        font-weight: 500;
    }
`

interface DisplayConversation {
    property: string,
    value: string,
    status: Components.Schemas.ConversationStatusDto,
    conversationId: string
    messages: Message[]
    participants: User[]
}

const StatusCircle = styled.div<{ status: Components.Schemas.ConversationStatusDto }>`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${(props) => {
        switch (props.status) {
            case "Open":
                return "#007079"
            case "Closed":
                return "#243746"
            case "Implemented":
                return "#7D0023"
            case "To_be_implemented":
                return "#EB0037"
            default:
                return "#757575"
        }
    }};    
`

const NewestMessageContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

const Value = styled(Typography)`
    font-size: 16px;
    max-width: 425px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #243746;

    span {
        color: black;
        font-weight: 500;
    }
`

const Meta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    position: relative;
    top: 15px;
`

const PhotoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`

const SenderMeta = styled(Typography)`
    font-size: 12px;
    font-weight: 500;
    opacity: 0.7;
    word-break: keep-all;
    white-space: nowrap;
`
interface ConversationCardProps {
    conversation: DisplayConversation
}

const ConversationCard: FC<ConversationCardProps> = ({
    conversation,
}) => {
    const { setCurrentProperty } = useContext(ViewContext)
    const formattedProperty = formatCamelCase(conversation.property)
    const conversationTitle = `${formattedProperty}: `

    return (
        <ClickableCard type="button" onClick={() => { setCurrentProperty(conversation.property) }}>
            <ConversationCardContainer>
                <Card>
                    <TitleContainer>
                        <TagInfo>
                            <Icon size={16} data={tag} />
                        </TagInfo>
                        <Value>
                            {conversationTitle}
                            <span>
                                {conversation.value}
                            </span>
                        </Value>
                        <Tooltip
                            placement="right"
                            title={
                                (() => {
                                    switch (conversation.status) {
                                        case "Open":
                                            return "Status: Open"
                                        case "Closed":
                                            return "Status: Closed"
                                        case "Implemented":
                                            return "Status: Implemented"
                                        case "To_be_implemented":
                                            return "Status: To be implemented"
                                        default:
                                            return "Status: Unknown"
                                    }
                                })()
                            }
                        >
                            <StatusCircle status={conversation.status} />
                        </Tooltip>
                        <PhotoContainer>
                            {conversation.participants.map((participant) => (
                                <PersonPhoto personId={participant.userId} size="small" />
                            ))}
                        </PhotoContainer>
                    </TitleContainer>
                    <Meta>
                        <SenderMeta>
                            {conversation.messages[0].commenterName}
                        </SenderMeta>
                        <SenderMeta>
                            {
                                conversation.messages[0].isEdited
                                    ? formatDate(conversation.messages[0].modifiedDate || "")
                                    : formatDate(conversation.messages[0].createdDate || "")
                            }
                        </SenderMeta>
                    </Meta>
                    <NewestMessageContainer>
                        <CommentText
                            dangerouslySetInnerHTML={{
                            __html: sanitizeContent(wrapInSpan(conversation.messages[0].text || "")),
                        }}
                        />
                    </NewestMessageContainer>
                </Card>
            </ConversationCardContainer>
        </ClickableCard>
    )
}

export default ConversationCard