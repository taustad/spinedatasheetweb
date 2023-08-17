import { ColGroupDef } from "@ag-grid-community/core"
import { InstrumentPurchaserRequirement } from "../../../Models/InstrumentPurchaserRequirement"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonEquipmentConditionsColumnDefs = (): ColGroupDef[] => [
    {
        headerName: "Equipment conditions",
        children: [
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("lineNominalSize"),
                headerName: "Line nominal size",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("lineInnerDiameter"),
                headerName: "Line inner diameter",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("lineMaterial"),
                headerName: "Line material",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("flangeStandardOrCode"),
                headerName: "Flange standard or code",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("flangeSize"),
                headerName: "Flange size",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("flangePressureClass"),
                headerName: "Flange pressure class",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("flangeFacing"),
                headerName: "Flange facing",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("pipingDesignTemperature"),
                headerName: "Piping design temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("pipingDesignPressure"),
                headerName: "Piping design pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("fluid"),
                headerName: "Fluid",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("phase"),
                headerName: "Phase",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("corrosiveCompounds"),
                headerName: "Corrosive compounds",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumPressureLoss"),
                headerName: "Maximum pressure loss",
            },
        ],
    },
]
