import React, { FC } from "react"
import styled from "styled-components"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import {
 shopping_card, library_image, help_outline, build_wrench, library_books,
} from "@equinor/eds-icons"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    position: fixed;
`

const TabButton = styled(Button)<{isActive: boolean}>`
    margin-bottom: 15px;
    background-color: ${(props) => (props.isActive ? "#EBF1F2" : "transparent")};
`

interface ButtonBarProps {
    activeTab: number,
    setActiveTab: (index: number) => void
}

const ButtonBar: FC<ButtonBarProps> = ({ setActiveTab, activeTab }) => (
    <Container>
        <Tooltip title="Implementation" placement="right">
            <TabButton
                variant="ghost"
                onClick={() => setActiveTab(0)}
                isActive={activeTab === 0}
            >
                <Icon data={build_wrench} />
            </TabButton>
        </Tooltip>
        <Tooltip title="Specifications" placement="right">
            <TabButton
                variant="ghost"
                onClick={() => setActiveTab(1)}
                isActive={activeTab === 1}
            >
                <Icon data={library_books} />
            </TabButton>
        </Tooltip>
        <Tooltip title="User manuals" placement="right">
            <TabButton
                variant="ghost"
                onClick={() => setActiveTab(2)}
                isActive={activeTab === 2}
            >
                {" "}
                <Icon data={help_outline} />
            </TabButton>
        </Tooltip>
        <Tooltip title="Media" placement="right">
            <TabButton
                variant="ghost"
                onClick={() => setActiveTab(3)}
                isActive={activeTab === 3}
            >
                {" "}
                <Icon data={library_image} />
            </TabButton>
        </Tooltip>
        <Tooltip title="Replacements" placement="right">
            <TabButton
                variant="ghost"
                onClick={() => setActiveTab(4)}
                isActive={activeTab === 4}
            >
                {" "}
                <Icon data={shopping_card} />
            </TabButton>
        </Tooltip>
    </Container>
    )

export default ButtonBar
