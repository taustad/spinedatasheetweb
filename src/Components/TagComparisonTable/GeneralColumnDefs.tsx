import { ColDef } from "@ag-grid-community/core";
import { InstrumentPurchaserRequirement } from "../../Models/InstrumentPurchaserRequirement"

function getPropertyName<T>(property: keyof T): keyof T {
    return property;
}

export const comparisonGeneralColumnDefs = (): ColDef[] => {
    return [
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("codeRequirement"),
            headerName: "Code requirement",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("conformityAssessmentSystemLevel"),
            headerName: "Conformity assessment system (CAS) level",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("tagNumber"),
            headerName: "Tag number",
            pinned: "left",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("serviceDescription"),
            headerName: "Service description",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("manufacturer"),
            headerName: "Manufacturer",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("projectCountry"),
            headerName: "Project country",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("projectRegion"),
            headerName: "Project region",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("plantEnvironmentalLocation"),
            headerName: "Plant environmental location",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("pidNumber"),
            headerName: "P&ID number",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("lineOrEquipmentNumber"),
            headerName: "Line or equipment number",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("minimumAmbientTemperature"),
            headerName: "Minimum ambient temperature",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("maximumAmbientTemperature"),
            headerName: "Maximum ambient temperature",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("baseConditions"),
            headerName: "Base conditions",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("baseTemperature"),
            headerName: "Base temperature",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("basePressure"),
            headerName: "Base pressure",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("coatingDurability"),
            headerName: "Coating durability",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("silRating"),
            headerName: "SIL rating",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("ingressProtection"),
            headerName: "Ingress protection",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("exProtection"),
            headerName: "EX protection",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("hazardousAreaClassificationStandard"),
            headerName: "Hazardous area classification standard",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("explosionHazardClassification"),
            headerName: "Explosion hazard classification",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("explosionGroup"),
            headerName: "Explosion group",
        },
        {
            field: getPropertyName<InstrumentPurchaserRequirement>("temperatureClass"),
            headerName: "Temperature class",
        },
    ]
}
