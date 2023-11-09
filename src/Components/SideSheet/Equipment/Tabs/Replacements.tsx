import React, { FC } from "react"
import {
 Typography, Button, Icon,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { external_link } from "@equinor/eds-icons"
import TabsTitle from "../../Components/TabsTitle"
import Card from "../../Components/Card"
import Table from "../../Components/Table"
import MatchIndicator from "../Components/MatchIndicator"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    Gap: 10px;
`

const Header = styled.div`
    margin-bottom: 15px;
`

const CardHeader = styled.div`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Divider = styled.div`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ModelImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

const Replacements: FC = () => {
    const dummyData = {
        "Implementation status 1": "Not implemented",
        "Implementation status 2": "Not implemented",
        "Implementation status 3": "Not implemented",
    }

    return (
        <Wrapper>
            <Header>
                <TabsTitle>Replacements</TabsTitle>
                <Typography variant="body_short">
                    This page shows equipment from EqHub that could replace current installed equipment.
                    Match score is based on tag requirements (valid properties).
                </Typography>
            </Header>
            <Card>
                <CardHeader>
                    <Typography variant="h5">
                        PRODUCT INFORMATION
                    </Typography>
                    <Button variant="ghost">
                        View in EqHub
                        <Icon data={external_link} />
                    </Button>
                </CardHeader>
                <Divider>
                    <ModelImage
                        src="https://via.placeholder.com/650"
                        alt="placeholder"
                    />
                    <MatchIndicator percentage={58} />
                </Divider>
                <Table data={dummyData} />
            </Card>
            <Card>
                <CardHeader>
                    <Typography variant="h5">
                        PRODUCT INFORMATION
                    </Typography>
                    <Button variant="ghost">
                        View in EqHub
                        <Icon data={external_link} />
                    </Button>
                </CardHeader>
                <Divider>
                    <ModelImage
                        src="https://via.placeholder.com/650"
                        alt="placeholder"
                    />
                    <MatchIndicator percentage={74} />
                </Divider>
                <Table data={dummyData} />
            </Card>
            <Card>
                <CardHeader>
                    <Typography variant="h5">
                        PRODUCT INFORMATION
                    </Typography>
                    <Button variant="ghost">
                        View in EqHub
                        <Icon data={external_link} />
                    </Button>
                </CardHeader>
                <Divider>
                    <ModelImage
                        src="https://via.placeholder.com/650"
                        alt="placeholder"
                    />
                    <MatchIndicator percentage={89} />
                </Divider>
                <Table data={dummyData} />
            </Card>
        </Wrapper>
    )
}

export default Replacements