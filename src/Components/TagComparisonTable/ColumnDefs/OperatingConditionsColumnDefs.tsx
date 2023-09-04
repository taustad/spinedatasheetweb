import { ColGroupDef } from "@ag-grid-community/core"
import { InstrumentPurchaserRequirement } from "../../../Models/InstrumentPurchaserRequirement"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonOperatingConditionsColumnDefs = (): ColGroupDef[] => [
    {
        headerName: "Operating conditions",
        children: [
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluids"),
                headerName: "Process fluid(s)",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluidState"),
                headerName: "Process fluid state",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("serviceDescription"),
                headerName: "Service description",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluidCorrosiveCompounds"),
                headerName: "Process fluid corrosive compounds",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluidErosionPossibility"),
                headerName: "Process fluid erosion possibility",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluidSpecificHeatRatio"),
                headerName: "Process fluid specific heat ration Cp/Cv",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processVacuumPossibility"),
                headerName: "Process vacuum possibility",
                valueParser: (params) => String(params.newValue),
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("processFluidVapourPressure"),
                headerName: "Process fluid vapour pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingMassFlow"),
                headerName: "Minimum operating mass flow",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVelocity"),
                headerName: "Minimum operating velocity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingTemperature"),
                headerName: "Minimum operating temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingPressure"),
                headerName: "Minimum operating pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingLiquidSpecificGravity"),
                headerName: "Minimum operating liquid specific gravity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingLiquidViscosity"),
                headerName: "Minimum operating liquid viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVapourMolecularWeight"),
                headerName: "Minimum operating vapour molecular weight",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumVapourCompressFactor"),
                headerName: "Minimum operating vapour compressibility factor",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVapourActualDensity"),
                headerName: "Minimum operating vapour actual density",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVapourViscosity"),
                headerName: "Minimum operating vapour viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingMassFlow"),
                headerName: "Normal operating mass flow",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingVelocity"),
                headerName: "Normal operating velocity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingTemperature"),
                headerName: "Normal operating temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingPressure"),
                headerName: "Normal operating pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingLiquidSpecificGravity"),
                headerName: "Normal operating liquid specific gravity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingLiquidViscosity"),
                headerName: "Normal operating liquid viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingVapourMolecularWeight"),
                headerName: "Normal operating vapour molecular weight",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingVapourCompressibilityFactor"),
                headerName: "Normal operating vapour compressibility factor",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingVapourActualDensity"),
                headerName: "Normal operating vapour actual density",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("normalOperatingVapourViscosity"),
                headerName: "Normal operating vapour viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingMassFlow"),
                headerName: "Maximum operating mass flow",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVelocity"),
                headerName: "Maximum operating velocity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingTemperature"),
                headerName: "Maximum operating temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingPressure"),
                headerName: "Maximum operating pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingLiquidSpecificGravity"),
                headerName: "Maximum operating liquid specific gravity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingLiquidViscosity"),
                headerName: "Maximum operating liquid viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVapourMolecularWeight"),
                headerName: "Maximum operating vapour molecular weight",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVapourCompressibilityFactor"),
                headerName: "Maximum operating vapour compressibility factor",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVapourActualDensity"),
                headerName: "Maximum operating vapour actual density",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVapourViscosity"),
                headerName: "Maximum operating vapour viscosity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumRecoverablePressureDrop"),
                headerName: "Maximum recoverable pressure drop",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumUnrecoverablePressureLoss"),
                headerName: "Maximum unrecoverable pressure loss",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumFlowRate"),
                headerName: "Flow rate",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVelocity"),
                headerName: "Velocity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingTemperature"),
                headerName: "Temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumInletPressure"),
                headerName: "Inlet Pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumDensityAtTAndP"),
                headerName: "Density at T and P",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumViscosityAtT"),
                headerName: "Viscosity at T",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumOperatingVapourMolecularWeight"),
                headerName: "Vapour molecular weight",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumVapourCompressFactor"),
                headerName: "Vapour compress. factor",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("minimumVapourSpecificHeatRatio"),
                headerName: "Vapour specific heat ratio",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumFlowRate"),
                headerName: "Flow rate",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVelocity"),
                headerName: "Velocity",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingTemperature"),
                headerName: "Temperature",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumInletPressure"),
                headerName: "Inlet Pressure",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumDensityAtTAndP"),
                headerName: "Density at T and P",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumViscosityAtT"),
                headerName: "Viscosity at T",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumOperatingVapourMolecularWeight"),
                headerName: "Vapour molecular weight",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumVapourCompressFactor"),
                headerName: "Vapour compress. factor",
            },
            {
                field: getPropertyName<InstrumentPurchaserRequirement>("maximumVapourSpecificHeatRatio"),
                headerName: "Vapour specific heat ratio",
            },
        ],
    },
]
