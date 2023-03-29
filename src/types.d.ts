declare namespace Components {
    namespace Schemas {
        export interface Contract {
            tags?: string[] | null;
        }
        export interface DatasheetDto {
            id?: string; // uuid
            projectId?: string; // uuid
            tagNo?: string | null;
            description?: string | null;
            category?: string | null;
            area?: string | null;
            dicipline?: string | null;
            purchaserRequirement?: PurchaserRequirement;
            supplierOfferedProduct?: SupplierOfferedProduct;
        }
        export interface PurchaserRequirement {
            codeRequirement?: number; // int32
            conformityAssessmentSystemLevel?: number; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            minimumAmbientTemperature?: number; // int32
            maximumAmbientTemperature?: number; // int32
            baseConditions?: string | null;
            baseTemperature?: number; // int32
            basePressure?: number; // int32
            coatingDurability?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            upstreamHighSidePipeSchedule?: string | null;
            upstreamHighSideLineSize?: string | null;
            upstreamHighSideLineEquipmentRating?: string | null;
            upstreamHighSideLineConnectionType?: string | null;
            upstreamHighSideConnectionOrientation?: string | null;
            upstreamHighSideMaterialType?: string | null;
            designPressureMaximum?: number; // int32
            designPressureMinimum?: number; // int32
            designTemperatureMaximum?: number; // int32
            designTemperatureMinimum?: number; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number; // int32
            processFluidSpecificHeatRatio?: number; // double
            processVacuumPossibility?: boolean;
            minimumOperatingVolumetricFlow?: number; // int32
            minimumOperatingVelocity?: number; // int32
            minimumOperatingTemperature?: number; // int32
            minimumOperatingPressure?: number; // int32
            normalOperatingVolumetricFlow?: number; // int32
            normalOperatingVelocity?: number; // int32
            normalOperatingTemperature?: number; // int32
            normalOperatingPressure?: number; // int32
            normalOperatingLiquidViscosity?: number; // int32
            maximumOperatingVolumetricFlow?: number; // int32
            maximumOperatingVelocity?: number; // int32
            maximumOperatingTemperature?: number; // int32
            maximumOperatingPressure?: number; // double
            maximumOperatingLiquidViscosity?: number; // double
            maximumRecoverablePressureDrop?: number; // double
            maximumUnrecoverablePressureLoss?: number; // double
            bodyMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterDisplay?: boolean;
            transmitterConnectingCableLength?: number; // double
            supplyVoltage?: number; // double
            externalPowerVoltage?: number; // double
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: boolean;
            measurementRangeMinimum?: number; // double
            measurementRangeMaximum?: number; // double
            spanAndZeroAdjustment?: string | null;
            accuracy?: number; // double
            repeatability?: number; // double
            stepResponse?: number; // double
            longTermDrift?: number; // double
            longTermStability?: number; // double
            vibration?: boolean;
            weatherEnclosure?: boolean;
            electricalSurgeProtector?: boolean;
            sunshade?: boolean;
        }
        export interface SupplierOfferedProduct {
            manufacturer?: string | null;
            modelNumber?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            minimumAmbientTemperature?: number; // int32
            maximumAmbientTemperature?: number; // int32
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            maximumUnrecoverablePressureLoss?: number; // double
            bodyElementSensorManufacturerModelNumber?: string | null;
            bodyMaterial?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number; // double
            groundingRing?: boolean;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number; // double
            endConnectionSize?: number; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: number; // double
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterDisplay?: boolean;
            transmitterConnectingCables?: number; // int32
            transmitterConnectingCableLength?: number; // double
            transmitterConnectingCableQuantity?: number; // int32
            supplyVoltage?: number; // double
            externalPowerVoltage?: number; // double
            isolatedOutputs?: boolean;
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: boolean;
            measurementRangeMinimum?: number; // double
            measurementRangeMaximum?: number; // double
            spanAndZeroAdjustment?: string | null;
            lowerRangeLimit?: number; // double
            upperRangeLimit?: number; // double
            accuracy?: number; // double
            repeatability?: number; // double
            stepResponse?: number; // double
            longTermDrift?: number; // double
            longTermStability?: number; // double
            vibration?: boolean;
            weatherEnclosure?: boolean;
            electricalSurgeProtector?: boolean;
            sunshade?: boolean;
        }
    }
}
declare namespace Paths {
    namespace GetContract {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Contract;
        }
    }
    namespace GetContracts {
        namespace Responses {
            export type $200 = Components.Schemas.Contract[];
        }
    }
    namespace GetContractsForContractor {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Contract[];
        }
    }
    namespace GetDatasheet {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto;
        }
    }
    namespace GetDatasheets {
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto[];
        }
    }
    namespace GetDatasheetsForProject {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto[];
        }
    }
}
