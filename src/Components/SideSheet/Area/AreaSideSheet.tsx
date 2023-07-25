import React, { FC } from "react"
import { Typography, Table } from "@equinor/eds-core-react"
import styled from "styled-components"
import { ViewContext } from "../../../Context/ViewContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
`

const Card = styled.div`
    padding: 15px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin-bottom: 15px;
`
const ModelImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`

const InfoTable = styled(Table)`
    width: 100%;
`

const AreaCard: FC = () => {
    const { activeTagData } = React.useContext(ViewContext)
    const dummyData: Record<string, string> = {
        "Internal Conditions": "C3 Heated Ventilaton",
        "Hazardous area classification standard": "IEC 60079",
        "Explotion hazard classification": "Zone 2",
        "Explotion group": "IIC",
        "Temperature class": "T3",
        "Temperature, min": "200",
        "Temperature, max": "200",
        "Noise requirements": "85 dB",
        "Access restriction": "RO Open Access",
        "Human activity": "H3 Normally unmanned",
    }

    if (!activeTagData) {
        return null
    }

    return (
        <Container>
            <Card>
                <ModelImage
                    src="https://via.placeholder.com/650"
                    alt="placeholder"
                />
            </Card>
            <Card>
                <Typography variant="h6">AREA CONDITIONS</Typography>
                <InfoTable>
                    {Object.keys(dummyData).map((key) => (
                        <Table.Row key={key}>
                            <Table.Cell>{key}</Table.Cell>
                            <Table.Cell>{dummyData[key]}</Table.Cell>
                        </Table.Row>
                    ))}
                </InfoTable>
            </Card>
        </Container>
    )
}

export default AreaCard
