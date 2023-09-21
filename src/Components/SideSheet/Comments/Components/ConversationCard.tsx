import React, { FC } from "react"
import { Button, Icon, Typography } from "@equinor/eds-core-react"
import { tag } from "@equinor/eds-icons"
import styled from "styled-components"
import Card from "../../Components/Card"

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

interface ConversationCardProps {
    title: string
    // tagInfo: string
}

const ConversationCard: FC<ConversationCardProps> = ({ title }) => (
    <ConversationCardContainer>
        <Card>
            <Typography variant="h5">{title}</Typography>
            <TagInfo>
                <Icon data={tag} />
                {/* <Typography variant="body_short">{tagInfo}</Typography> */}
            </TagInfo>
            <Buttons>
                <Button>Open</Button>
                <Button variant="ghost">Open comments</Button>
            </Buttons>
        </Card>
    </ConversationCardContainer>
    )

export default ConversationCard