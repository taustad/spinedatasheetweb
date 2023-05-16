import { generateGeneralRowData } from "../Components/JIP33Table/RowData/Electrical/GeneralRowData"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { Datasheet } from "../Models/Datasheet"
import { generatePurchaserInformationRowData } from "../Components/JIP33Table/RowData/Electrical/PurchaserInformationRowData"
import { generateElectricalOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Electrical/ElectricalOperatingConditionsRowData"
import { generateRatingRowData } from "../Components/JIP33Table/RowData/Electrical/RatingRowData"
import { generateASDFedMotorDataRowData } from "../Components/JIP33Table/RowData/Electrical/ASDFedMotorDataRowData"
import { generateSiteConditionsLocationEnvironmentRowData } from "../Components/JIP33Table/RowData/Electrical/SiteConditionsLocationEnvironmentRowData"
import { generateStartingPerformanceRowData } from "../Components/JIP33Table/RowData/Electrical/StartingPerformanceRowData"
import { generateOperatingPerformanceRowData } from "../Components/JIP33Table/RowData/Electrical/OperatingPerformanceRowData"
import { generateNoiseRowData } from "../Components/JIP33Table/RowData/Electrical/NoiseRowData"
import { generateMotorConstructionRowData } from "../Components/JIP33Table/RowData/Electrical/MotorConstructionRowData"
import { generateFanRowData } from "../Components/JIP33Table/RowData/Electrical/FanRowData"
import { generateMainTerminalBoxRowData } from "../Components/JIP33Table/RowData/Electrical/MainTerminalBoxRowData"
import { generateBearingsRowData } from "../Components/JIP33Table/RowData/Electrical/BearingsRowData"
import { generateMountingRowData } from "../Components/JIP33Table/RowData/Electrical/MountingRowData"
import { generateInstrumentationRowData } from "../Components/JIP33Table/RowData/Electrical/InstrumentationRowData"
import { generateSurfaceProtectionRowData } from "../Components/JIP33Table/RowData/Electrical/SurfaceProtectionRowData"
import { generateMotorsForHazardousLocationsRowData } from "../Components/JIP33Table/RowData/Electrical/MotorsForHazardousLocationsRowData"
import { generateTestingAndInspectionRowData } from "../Components/JIP33Table/RowData/Electrical/TestingAndInspectionRowData"
import { generatePreservationAndStorageRowData } from "../Components/JIP33Table/RowData/Electrical/PreservationAndStorageRowData"
import { generateDocumentationRowData } from "../Components/JIP33Table/RowData/Electrical/DocumentationRowData"
import JIP33WithSideMenu from "../Components/JIP33WithSideMenu"
import { GetDatasheetService } from "../api/DatasheetService"
import { generateDutyRowData } from "../Components/JIP33Table/RowData/Electrical/DutyRowData"
import { generateThermalPerformanceRowData } from "../Components/JIP33Table/RowData/Electrical/ThermalPerformanceRowData"
import { generateRotorRowData } from "../Components/JIP33Table/RowData/Electrical/RotorRowData"
import { generateSpaceHeatersRowData } from "../Components/JIP33Table/RowData/Electrical/SpaceHeatersRowData"
import { generateCoolingRowData } from "../Components/JIP33Table/RowData/Electrical/CoolingRowData"
import { generateVibrationRowData } from "../Components/JIP33Table/RowData/Electrical/VibrationRowData"
import { generateTemperatureMonitoringRowData } from "../Components/JIP33Table/RowData/Electrical/TemperatureMonitoringRowData"
import { generateConverterFedMotorDataRowData } from "../Components/JIP33Table/RowData/Electrical/ConverterFedMotorDataRowData"
import { generateMiscellaneousRowData } from "../Components/JIP33Table/RowData/Electrical/MiscellaneousRowData"

const TopBar = styled.div`
    padding-top: 0;
    border-bottom: 1px solid LightGray;
    z-index: 100;
    padding-top: 20px;
`

const Body = styled.div`
    height: 92%;
`

function JIP33ElectricalTabView({
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<Datasheet>()

    const { tagId } = useParams<Record<string, string | undefined>>()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (tagId !== null && tagId !== undefined) {
                try {
                    setIsLoading(true)
                    const datasheets: Datasheet = await (await GetDatasheetService())
                        .getDatasheet(tagId)
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
        return <div>Error loading tag</div>
    }

    if (isLoading) {
        return <div>Loading tag...</div>
    }

    if (tag === undefined) {
        return <div>No tag selected</div>
    }

    const sideMenuList = [
        "General", "Purchaser information", "Duty",
        "Electrical operating conditions", "Rating", "ASD fed motor data",
        "Site conditions / location environment", "Thermal performance", "Starting performance",
        "Operating performance", "Noise", "Motor construction", "Rotor", "Fan",
        "Main terminal box", "Bearings", "Space heaters", "Mounting", "Cooling", "Vibration",
        "Instrumentation", "Surface protection", "Temperature monitoring", "Converter-fed motor data", 
        "Motors for hazardous locations", "Testing and inspection", "Preservation and storage",
        "Documentation", "Miscellaneous",
    ]

    const rowDataList = [
        generateGeneralRowData(tag), generatePurchaserInformationRowData(tag), generateDutyRowData(tag),
        generateElectricalOperatingConditionsRowData(tag), generateRatingRowData(tag), generateASDFedMotorDataRowData(tag),
        generateSiteConditionsLocationEnvironmentRowData(tag), generateThermalPerformanceRowData(tag), generateStartingPerformanceRowData(tag),
        generateOperatingPerformanceRowData(tag), generateNoiseRowData(tag), generateMotorConstructionRowData(tag), generateRotorRowData(tag),
        generateFanRowData(tag), generateMainTerminalBoxRowData(tag), generateBearingsRowData(tag), generateSpaceHeatersRowData(tag),
        generateMountingRowData(tag), generateCoolingRowData(tag), generateVibrationRowData(tag), generateInstrumentationRowData(tag),
        generateSurfaceProtectionRowData(tag), generateTemperatureMonitoringRowData(tag), generateConverterFedMotorDataRowData(tag),
        generateMotorsForHazardousLocationsRowData(tag), generateTestingAndInspectionRowData(tag),
        generatePreservationAndStorageRowData(tag), generateDocumentationRowData(tag), generateMiscellaneousRowData(tag),
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

export default JIP33ElectricalTabView
