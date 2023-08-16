import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BackButton } from "../Components/BackButton"
import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Mechanical/GeneralRowData"
import { TagData } from "../Models/TagData"
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { generateSiteDataRowData } from "../Components/JIP33Table/RowData/Mechanical/SiteDataRowData"
import { generateUtilityConditionsRowData } from "../Components/JIP33Table/RowData/Mechanical/UtilityConditionsRowData"
import { generateLiquidCharacteristicsRowData } from "../Components/JIP33Table/RowData/Mechanical/LiquidCharacteristicsRowData"
import { generateOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Mechanical/OperatingConditionsRowData"
import { generatePerformanceRowData } from "../Components/JIP33Table/RowData/Mechanical/PerformanceRowData"
import { generateConstructionRowData } from "../Components/JIP33Table/RowData/Mechanical/ConstructionRowData"
import { generateVerticalPumpConstructionRowData } from "../Components/JIP33Table/RowData/Mechanical/VerticalPumpConstructionRowData"
import { generateVerticalPumpSumpDimensionsRowData } from "../Components/JIP33Table/RowData/Mechanical/VerticalPumpSumpDimensionsRowData"
import { generateBearingsAndLubricationRowData } from "../Components/JIP33Table/RowData/Mechanical/BearingsAndLubricationRowData"
import { generateMaterialsRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialsRowData"
import { generateMaterialsAddForVerticalPumpsRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialsAddForVerticalPumpsRowData"
import { generateMaterialInspectionRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialInspectionRowData"
import { generateBaseplateRowData } from "../Components/JIP33Table/RowData/Mechanical/BaseplateRowData"
import { generateMechanicalSealRowData } from "../Components/JIP33Table/RowData/Mechanical/MechanicalSealRowData"
import { generateCouplingRowData } from "../Components/JIP33Table/RowData/Mechanical/CouplingRowData"
import { generateDriverAndGearRowData } from "../Components/JIP33Table/RowData/Mechanical/DriverAndGearRowData"
import { generateInstrumentationRowData } from "../Components/JIP33Table/RowData/Mechanical/InstrumentationRowData"
import { generateTestingRowData } from "../Components/JIP33Table/RowData/Mechanical/TestingRowData"
import { generateSurfacePreperationAndPaintingRowData } from "../Components/JIP33Table/RowData/Mechanical/SurfacePreperationAndPaintingRowData"
import { generateOtherPurchaserRequirementsRowData } from "../Components/JIP33Table/RowData/Mechanical/OtherPurchaserRequirementsRowData"
import { generateSparePartsRowData } from "../Components/JIP33Table/RowData/Mechanical/SparePartsRowData"
import { generateShipmentRowData } from "../Components/JIP33Table/RowData/Mechanical/ShipmentRowData"
import { GetTagDataService } from "../api/TagDataService"
import Dialogue from "../Components/Dialogue"

const TopBar = styled.div`
    padding-top: 0;
    border-bottom: 1px solid LightGray;
    z-index: 100;
    padding-top: 20px;
`

const Body = styled.div`
    height: 92%;
`

function JIP33MechanicalTabView({}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<TagData>()

    const { tagId } = useParams<Record<string, string | undefined>>()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)
                    const datasheets: TagData = await (
                        await GetTagDataService()
                    ).getTagData(tagId)
                    setTag(datasheets)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [])

    if (error) {
        return <Dialogue type="error" message="Error loading tag" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tag..." />
    }

    if (tag === undefined) {
        return <Dialogue type="error" message="No tag selected" />
    }

    const sideMenuList = [
        "General",
        "Side data",
        "Utility conditions",
        "Liquid characteristics",
        "Operating conditions",
        "Performance",
        "Construction",
        "Vertical pump construction",
        "Vertical pump sump dimensions",
        "Bearings and lubrication",
        "Materials",
        "Materials (additional for vertical pumps)",
        "Material inspection",
        "Baseplate",
        "Mechanical seal",
        "Coupling",
        "Driver and gear",
        "Instrumentation",
        "Testing",
        "Surface preperation and painting",
        "Other purchaser requirements",
        "Spare parts",
        "Shipment",
    ]

    const rowDataList = [
        generateGeneralRowData(tag),
        generateSiteDataRowData(tag),
        generateUtilityConditionsRowData(tag),
        generateLiquidCharacteristicsRowData(tag),
        generateOperatingConditionsRowData(tag),
        generatePerformanceRowData(tag),
        generateConstructionRowData(tag),
        generateVerticalPumpConstructionRowData(tag),
        generateVerticalPumpSumpDimensionsRowData(tag),
        generateBearingsAndLubricationRowData(tag),
        generateMaterialsRowData(tag),
        generateMaterialsAddForVerticalPumpsRowData(tag),
        generateMaterialInspectionRowData(tag),
        generateBaseplateRowData(tag),
        generateMechanicalSealRowData(tag),
        generateCouplingRowData(tag),
        generateDriverAndGearRowData(tag),
        generateInstrumentationRowData(tag),
        generateTestingRowData(tag),
        generateSurfacePreperationAndPaintingRowData(tag),
        generateOtherPurchaserRequirementsRowData(tag),
        generateSparePartsRowData(tag),
        generateShipmentRowData(tag),
    ]

    return (
        <Body>
            <TopBar>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
            </TopBar>
            <JIP33WithSideMenu
                sideMenuList={sideMenuList}
                rowDataList={rowDataList}
            />
        </Body>
    )
}

export default JIP33MechanicalTabView
