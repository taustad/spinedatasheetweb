import React, { FC } from "react"
import styled from "styled-components"

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-bottom: 2px solid lightgray;
`

const StyledButton = styled.button<{ active: boolean }>`
    position: relative;
    bottom: -2px;
    padding: 10px 20px;
    font-weight: 500;
    background-color: transparent;
    color: black;
    border: none;
    border-bottom: ${(props) => (props.active ? "2px solid #007079" : "2px solid lightgray")};
    color: ${(props) => (props.active ? "#007079" : "black")};
    border-radius: 0;

    &:hover {
        background-color: transparent;
        color: ${(props) => (props.active ? "#007079" : "black")};        
        border-bottom: 2px solid #007079;
        border-radius: 0;
    }

    &:focus {
        background-color: transparent;
        color: ${(props) => (props.active ? "#007079" : "black")};
        border-bottom: 2px solid #007079;
        border-radius: 0;
    }
`

interface Props {
    activeTab: number
    setActiveTab: (index: number) => void
    buttons: string[]
}

const LocalNavigation: FC<Props> = ({ activeTab, setActiveTab, buttons }) => (
    <Navigation>
        {buttons.map((button, index) => (
            <StyledButton
                key={`${button}-${index}`}
                active={index === activeTab}
                onClick={() => setActiveTab(index)}
            >
                {button}
            </StyledButton>
            ))}
    </Navigation>
    )

export default LocalNavigation