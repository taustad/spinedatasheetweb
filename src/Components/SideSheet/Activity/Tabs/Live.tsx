import React, { FC } from "react"
import styled from "styled-components"
import Card from "../../Components/Card"

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    Gap: 10px;
`

const Live: FC = () => (
    <Wrapper>
        <Card title="Flow Rate">
            <Image src="https://via.placeholder.com/250" alt="Flow Rate" />
        </Card>
        <Card title="Pressure">
            <Image src="https://via.placeholder.com/250" alt="Pressure" />
        </Card>
        <Card title="Flow Rate">
            <Image src="https://via.placeholder.com/250" alt="Flow Rate" />
        </Card>
        <Card title="Pressure">
            <Image src="https://via.placeholder.com/250" alt="Pressure" />
        </Card>
        <Card title="Flow Rate">
            <Image src="https://via.placeholder.com/250" alt="Flow Rate" />
        </Card>
        <Card title="Pressure">
            <Image src="https://via.placeholder.com/250" alt="Pressure" />
        </Card>
    </Wrapper>
    )

export default Live
