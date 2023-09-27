import React from "react"
import styled from "styled-components"

const Container = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 13px;
`

const CheckContainer = styled.label`
    padding: 4px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
interface Props {
    count?: number;
    label: string;
    checked: boolean;
    onChange: () => void;
    icon?: any;
}

const CheckboxWithCount: React.FC<Props> = ({
    count,
    label,
    checked,
    onChange,
    icon,
}) => (
    <Container>
        <CheckContainer>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <IconContainer>
                {icon}
            </IconContainer>

            {label}
        </CheckContainer>

        <span>{count}</span>
    </Container>
)

export default CheckboxWithCount
