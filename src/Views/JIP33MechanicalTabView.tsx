import { generalRowData } from "../Components/JIP33Table/RowData/Mechanical/GeneralRowData"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useState } from "react"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { Datasheet } from "../Models/Datasheet"
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { siteDataRowData } from "../Components/JIP33Table/RowData/Mechanical/SiteDataRowData"
import { utilityConditionsRowData } from "../Components/JIP33Table/RowData/Mechanical/UtilityConditionsRowData"
import { liquidCharacteristicsRowData } from "../Components/JIP33Table/RowData/Mechanical/LiquidCharacteristicsRowData"
import { operatingConditionsRowData } from "../Components/JIP33Table/RowData/Mechanical/OperatingConditionsRowData"
import { performanceRowData } from "../Components/JIP33Table/RowData/Mechanical/PerformanceRowData"
import { constructionRowData } from "../Components/JIP33Table/RowData/Mechanical/ConstructionRowData"
import { verticalPumpConstructionRowData } from "../Components/JIP33Table/RowData/Mechanical/VerticalPumpConstructionRowData"
import { verticalPumpSumpDimensionsRowData } from "../Components/JIP33Table/RowData/Mechanical/VerticalPumpSumpDimensionsRowData"
import { bearingsAndLubricationRowData } from "../Components/JIP33Table/RowData/Mechanical/BearingsAndLubricationRowData"
import { materialsRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialsRowData"
import { materialsAddForVerticalPumpsRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialsAddForVerticalPumpsRowData"
import { materialInspectionRowData } from "../Components/JIP33Table/RowData/Mechanical/MaterialInspectionRowData"
import { baseplateRowData } from "../Components/JIP33Table/RowData/Mechanical/BaseplateRowData"
import { mechanicalSealRowData } from "../Components/JIP33Table/RowData/Mechanical/MechanicalSealRowData"
import { couplingRowData } from "../Components/JIP33Table/RowData/Mechanical/CouplingRowData"
import { driverAndGearRowData } from "../Components/JIP33Table/RowData/Mechanical/DriverAndGearRowData"
import { instrumentationRowData } from "../Components/JIP33Table/RowData/Mechanical/InstrumentationRowData"
import { testingRowData } from "../Components/JIP33Table/RowData/Mechanical/TestingRowData"
import { surfacePreperationAndPaintingRowData } from "../Components/JIP33Table/RowData/Mechanical/SurfacePreperationAndPaintingRowData"
import { otherPurchaserRequirementsRowData } from "../Components/JIP33Table/RowData/Mechanical/OtherPurchaserRequirementsRowData"
import { sparePartsRowData } from "../Components/JIP33Table/RowData/Mechanical/SparePartsRowData"
import { shipmentRowData } from "../Components/JIP33Table/RowData/Mechanical/ShipmentRowData"

const TopBar = styled.div`
    padding-top: 0;
    border-bottom: 1px solid LightGray;
    z-index: 100;
    padding-top: 20px;
`

const Body = styled.div`
    height: 92%;
`

function JIP33MechanicalTabView({
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<Datasheet>()

    const { tagId } = useParams<Record<string, string | undefined>>()

    // useEffect(() => {
    //     (async () => {
    //         setError(false)
    //         setIsLoading(false)
    //         if (tagId !== null && tagId !== undefined) {
    //             try {
    //                 setIsLoading(true)
    //                 const datasheets: Datasheet = await (await GetDatasheetService())
    //                     .getDatasheet(tagId)
    //                 setTag(datasheets)
    //                 setIsLoading(false)
    //             } catch {
    //                 console.error("Error loading tags")
    //                 setError(true)
    //             }
    //         }
    //     })()
    // }, [])

    // if (error) {
    //     return <div>Error loading tag</div>
    // }

    // if (isLoading) {
    //     return <div>Loading tag...</div>
    // }

    // if (tag === undefined) {
    //     return <div>No tag selected</div>
    // }

    const sideMenuList = [
        "General", "Side data", "Utility conditions", "Liquid characteristics",
        "Operating conditions", "Performance", "Construction", "Vertical pump construction",
        "Vertical pump sump dimensions", "Bearings and lubrication", "Materials",
        "Materials (additional for vertical pumps)", "Material inspection", "Baseplate",
        "Mechanical seal", "Coupling", "Driver and gear", "Instrumentation", "Testing",
        "Surface preperation and painting", "Other purchaser requirements",
        "Spare parts", "Shipment",
    ]

    const rowDataList = [
        generalRowData, siteDataRowData, utilityConditionsRowData, liquidCharacteristicsRowData,
        operatingConditionsRowData, performanceRowData, constructionRowData, verticalPumpConstructionRowData,
        verticalPumpSumpDimensionsRowData, bearingsAndLubricationRowData, materialsRowData,
        materialsAddForVerticalPumpsRowData, materialInspectionRowData, baseplateRowData,
        mechanicalSealRowData, couplingRowData, driverAndGearRowData, instrumentationRowData, testingRowData,
        surfacePreperationAndPaintingRowData, otherPurchaserRequirementsRowData, sparePartsRowData,
        shipmentRowData,
    ]

    return (
        <Body>
            <TopBar>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
            </TopBar>
            <JIP33WithSideMenu sideMenuList={sideMenuList} rowDataList={rowDataList} />
        </Body>
    )
}

export default JIP33MechanicalTabView
