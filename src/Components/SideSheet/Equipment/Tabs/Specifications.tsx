import React, { FC } from "react"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt, view_week } from "@equinor/eds-icons"
import styled from "styled-components"
import TabsTitle from "../TabsTitle"
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
    const dummyData = {
        "Implementation status 1": "Not implemented",
        "Implementation status 2": "Not implemented",
        "Implementation status 3": "Not implemented",
        "Implementation status 4": "Not implemented",
        "Implementation status 5": "Not implemented",
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
                <Table title="PRODUCT INFORMATION" data={dummyData} />
            </Card>
            <Card>
                <Table title="PERFORMANCE" data={dummyData} />
            </Card>
            <Card>
                <Table title="BODY/ELEMENT/SENSOR" data={dummyData} />
            </Card>
        </div>
    )
}

export default Specifications