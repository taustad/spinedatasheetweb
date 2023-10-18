import React, { FC } from "react"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt, view_week } from "@equinor/eds-icons"
import styled from "styled-components"
import TabsTitle from "../../Components/TabsTitle"
import Card from "../../Components/Card"
import Table from "../../Components/Table"

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ButtonRow = styled.div`
    margin-bottom: 8px;
`

const Specifications: FC = () => {
    const dummyDataTag001General = {
        "Code requirement": "0",
        "Conformity assessment system (CAS) level": "0",
        "Tag number": "TAG-001",
        "Service description": "",
        "Manufacturer": "",
        "Model number": "",
        "Equipment manufacturer serial number": "",
        "Project country": "NO",
        "Project region": "Norwegian Continental Shelf",
        "Plant environmental location": "offshore",
        "P&ID number": "C-156-KR-P-XB-62010-01",
        "Line or equipment number": "L-62L00003A-0300OF-AD120",
        "Minimum ambient temperature": "25 °C",
        "Maximum ambient temperature": "-8 °C",
        "Base conditions": "normal",
        "Base temperature": "20 °C",
        "Base pressure": "1 barg",
        "Coating durability": "high",
        "Pressure retaining bolt material": "",
        "Pressure retaining nut material": "",
        "SIL rating": "not applicable",
        "Ingress protection": "IP44",
        "EX protection": "Exia",
        "Hazardous area classification standard": "IEC 60079",
        "Explorsion hazard classification": "Zone 2",
        "Explosion group": "IIC",
        "Temperature class": "T3",
        "Tag status": "",
        "Discipline": "Instrument",
        "Contract": "",
        "Contract name": "Contract 1",
        "Engineering code": "",
        "Area": "Area 1",
        "Purchase order": "",
        "Pipe class sheet": "",
        "Set/alarm point": "",
        "Type": "",
        "Operating Temp Limits": "",
        "Operating Press. Limit": "",
        "Press. loss at full range": "",
        "Mounting": "",
        "Weight": "",
        "Other": "",
    }

    const dummyDataTag001InstrumentCharacteristics = {
        "Calibrated range": "",
        "Characteristics": "",
        "Accuracy": "+/- 1",
        "Linearity": "",
        "Repeatability": "",
        "Min/Max range limits": "",
        "Other": "NA",
    }

    return (
        <div>
            <Header>
                <TabsTitle>Specifications</TabsTitle>
                <ButtonRow>
                    <Tooltip title="Search">
                        <Button variant="ghost_icon">
                            <Icon data={search} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Filter">
                        <Button variant="ghost_icon">
                            <Icon data={filter_alt} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="View">
                        <Button variant="ghost_icon">
                            <Icon data={view_week} />
                        </Button>
                    </Tooltip>
                </ButtonRow>
            </Header>
            <Card>
                <Table title="GENERAL" data={dummyDataTag001General} />
            </Card>
            <Card>
                <Table title="INSTRUMENT CHARACTERISTICS" data={dummyDataTag001InstrumentCharacteristics} />
            </Card>
        </div>
    )
}

export default Specifications