import React, { FC } from "react"
import styled from "styled-components"
import Card from "../../Components/Card"

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const Live: FC = () => (
    <>
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
    </>
    )

export default Live
