import { ColDef } from "ag-grid-enterprise";
import { PurchaserRequirement } from "../../Models/PurchaserRequirement"

function getPropertyName<T>(property: keyof T): keyof T {
    return property;
}

export const comparisonGeneralColumnDefs = (): ColDef[] => {
    return [
        {
            field: getPropertyName<PurchaserRequirement>("codeRequirement"),
            headerName: "Code requirement",
        },
        {
            field: getPropertyName<PurchaserRequirement>("conformityAssessmentSystemLevel"),
            headerName: "Conformity assessment system (CAS) level",
        },
        {
            field: getPropertyName<PurchaserRequirement>("tagNumber"),
            headerName: "Tag number",
            pinned: "left",
        },
        {
            field: getPropertyName<PurchaserRequirement>("serviceDescription"),
            headerName: "Service description",
        },
        {
            field: getPropertyName<PurchaserRequirement>("manufacturer"),
            headerName: "Manufacturer",
        },
        {
            field: getPropertyName<PurchaserRequirement>("projectCountry"),
            headerName: "Project country",
        },
        {
            field: getPropertyName<PurchaserRequirement>("projectRegion"),
            headerName: "Project region",
        },
        {
            field: getPropertyName<PurchaserRequirement>("plantEnvironmentalLocation"),
            headerName: "Plant environmental location",
        },
        {
            field: getPropertyName<PurchaserRequirement>("pidNumber"),
            headerName: "P&ID number",
        },
        {
            field: getPropertyName<PurchaserRequirement>("lineOrEquipmentNumber"),
            headerName: "Line or equipment number",
        },
        {
            field: getPropertyName<PurchaserRequirement>("minimumAmbientTemperature"),
            headerName: "Minimum ambient temperature",
        },
        {
            field: getPropertyName<PurchaserRequirement>("maximumAmbientTemperature"),
            headerName: "Maximum ambient temperature",
        },
        {
            field: getPropertyName<PurchaserRequirement>("baseConditions"),
            headerName: "Base conditions",
        },
        {
            field: getPropertyName<PurchaserRequirement>("baseTemperature"),
            headerName: "Base temperature",
        },
        {
            field: getPropertyName<PurchaserRequirement>("basePressure"),
            headerName: "Base pressure",
        },
        {
            field: getPropertyName<PurchaserRequirement>("coatingDurability"),
            headerName: "Coating durability",
        },
        {
            field: getPropertyName<PurchaserRequirement>("silRating"),
            headerName: "SIL rating",
        },
        {
            field: getPropertyName<PurchaserRequirement>("ingressProtection"),
            headerName: "Ingress protection",
        },
        {
            field: getPropertyName<PurchaserRequirement>("exProtection"),
            headerName: "EX protection",
        },
        {
            field: getPropertyName<PurchaserRequirement>("hazardousAreaClassificationStandard"),
            headerName: "Hazardous area classification standard",
        },
        {
            field: getPropertyName<PurchaserRequirement>("explosionHazardClassification"),
            headerName: "Explosion hazard classification",
        },
        {
            field: getPropertyName<PurchaserRequirement>("explosionGroup"),
            headerName: "Explosion group",
        },
        {
            field: getPropertyName<PurchaserRequirement>("temperatureClass"),
            headerName: "Temperature class",
        },
    ]
}
