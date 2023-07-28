import React, { FC, useContext, useEffect } from "react"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { ViewContext } from "../../../Context/ViewContext"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background-color: white;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    && > h6 {
        padding-bottom: 10px;
`

const InfoStrip: FC = () => {
    const { activeTagData } = useContext(ViewContext)

    useEffect(() => {
        console.log(activeTagData)
    }, [activeTagData])

    if (!activeTagData) {
        return null
    }

    return (
        <Container>
            <InfoBox>
                <Typography variant="h6">System</Typography>
                <Typography variant="body_short">11</Typography>
            </InfoBox>
            <InfoBox>
                <Typography variant="h6">Tag type</Typography>
                <Typography variant="body_short">FT</Typography>
            </InfoBox>
            <InfoBox>
                <Typography variant="h6">Area</Typography>
                <Typography variant="body_short">{activeTagData.area}</Typography>
            </InfoBox>
            <InfoBox>
                <Typography variant="h6">Dicipline</Typography>
                <Typography variant="body_short">{activeTagData.discipline}</Typography>
            </InfoBox>
            <InfoBox>
                <Typography variant="h6">Package Order</Typography>
                <Typography variant="body_short">015 2JA019</Typography>
            </InfoBox>
        </Container>
    )
}

export default InfoStrip
