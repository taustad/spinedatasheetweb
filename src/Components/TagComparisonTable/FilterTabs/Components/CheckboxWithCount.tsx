import React, { ReactElement } from "react"
import styled from "styled-components"

const Container = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

const CheckContainer = styled.label`
    padding: 4px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

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
            {icon}
            {label}
        </CheckContainer>

        <span>{count}</span>
    </Container>
)

export default CheckboxWithCount
