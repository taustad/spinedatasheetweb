import React, { FC } from "react"
import {
    Button,
    Icon,
} from "@equinor/eds-core-react"
import { external_link } from "@equinor/eds-icons"
import styled from "styled-components"
import { ViewContext } from "../../../Context/ViewContext"
import Card from "../Components/Card"
import Table from "../Components/Table"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
    gap: 10px;
`

const ModelImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`

const ModelContainer = styled.div`
    position: relative;

    & > button {
        position: absolute;
        bottom: 15px;
        right: 15px;
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
                <ModelContainer>
                    <ModelImage
                        src="https://via.placeholder.com/650"
                        alt="placeholder"
                    />
                    <Button>
                        Open in facility 3D model
                        <Icon data={external_link} size={18} />
                    </Button>
                </ModelContainer>
            </Card>
            <Card>
                <Table title="AREA CONDITIONS" data={dummyData} />
            </Card>
        </Container>
    )
}

export default AreaCard
