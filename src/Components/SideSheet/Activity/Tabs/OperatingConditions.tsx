import React, { FC } from "react"
import Card from "../../Components/Card"
import Table from "../../Components/Table"

const OperatingConditions: FC = () => {
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
    return (
        <Card>
            <Table
                title="OPERATING CONDITIONS"
                data={dummyData}
            />
            <Table
                title="OPERATING CONDITIONS"
                data={dummyData}
            />
            <Table
                title="OPERATING CONDITIONS"
                data={dummyData}
            />

        </Card>
    )
}

export default OperatingConditions
