import React, { FC } from "react"
import TabsTitle from "../TabsTitle"
import Card from "../../Card"
import Table from "../../Table"

const Implementation: FC = () => {
    const dummyData = {
        "Implementation status 1": "Not implemented",
        "Implementation status 2": "Not implemented",
        "Implementation status 3": "Not implemented",
        "Implementation status 4": "Not implemented",
        "Implementation status 5": "Not implemented",
    }

    return (
        <div>
            <TabsTitle>Implementation</TabsTitle>
            <Card>
                <Table title="HEALTH" data={dummyData} />
            </Card>
            <Card>
                <Table title="INSTALATION CONFIGURATIONS" data={dummyData} />
            </Card>
            <Card>
                <Table title="SPATIAL ATTRIBUTES" data={dummyData} />
            </Card>
        </div>
    )
    }

export default Implementation