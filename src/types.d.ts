declare namespace Components {
    namespace Schemas {
        export interface Comment {
            id?: string; // uuid
            createdDate?: string; // date-time
            modifiedDate?: string; // date-time
            userId?: string; // uuid
            tagDataId?: string; // uuid
            text?: string | null;
            property?: string | null;
            commentLevel?: CommentLevel /* int32 */;
        }
        export type CommentLevel = 0 | 1 | 2; // int32
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
            electricalPurchaserRequirement?: ElectricalPurchaserRequirement;
            electricalSupplierOfferedProduct?: ElectricalSupplierOfferedProduct;
        }
        export interface ElectricalPurchaserRequirement {
            orderStatus?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            clientName?: string | null;
            siteOrLocation?: string | null;
            projectTitleOrNumber?: string | null;
            purchaseOrderNumber?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            ieeeStd841MotorType?: string | null;
            additionalCertification?: string | null;
            startingMethod?: string | null;
            numberOfPolesMotorSynchronousSpeed?: string | null;
            directionOfRotation?: string | null;
            methodOfMotorCouplingToDrivenEquipment?: string | null;
            motorRatedFrequency?: string | null;
            motorRatedVoltage?: string | null;
            frameSize?: string | null;
            ratedPowerOutput?: string | null;
            serviceFactor?: string | null;
            fullLoadCurrent?: string | null;
            loadType?: string | null;
            minimumOperatingSpeed?: string | null;
            maximumOperatingSpeed?: string | null;
            floatingMarineShipboard?: string | null;
            chemicalsOrCorrosives?: string | null;
            altitude?: string | null;
            minimumAmbientAirTemperature?: string | null;
            maximumAmbientAirTemperature?: string | null;
            motorDesignsAndStartingCharacteristics?: string | null;
            ratedFullLoadSpeed?: string | null;
            ratedFullLoadTorque?: string | null;
            ratedBreakdownTorque?: string | null;
            efficiencyAt100PercentRatedOutput?: string | null;
            efficiencyAt75PercentRatedOutput?: string | null;
            efficiencyAt50PercentRatedOutput?: string | null;
            powerFactorAt100PercentRatedOutput?: string | null;
            powerFactorAt75PercentRatedOutput?: string | null;
            powerFactorAt50PercentRatedOutput?: string | null;
            maximumPermissibleSoundPressureAt1Meter?: string | null;
            motorSoundPressureAt1Meter?: string | null;
            motorWeight?: string | null;
            stainlessSteelHardware?: string | null;
            enclosureType?: string | null;
            enclosureIngressProtection?: string | null;
            fanMaterial?: string | null;
            position?: string | null;
            ingressProtectionOfTerminalBoxes?: string | null;
            mainTerminalBoxCableEntryHoleSizeAndNumber?: string | null;
            oversizedTerminalBox?: string | null;
            mainTerminalBoxMaterial?: string | null;
            l10Life?: string | null;
            driveEndBearingNumber?: string | null;
            nonDriveEndBearingNumber?: string | null;
            externalRadialLoadingOnMotorShaftEnd?: string | null;
            externalAxialLoadingOnMotorShaftEnd?: string | null;
            recommendedLubricant?: string | null;
            grease?: string | null;
            oilMistLubricant?: string | null;
            sealedForLifeAntiFrictionBearing?: string | null;
            asdFedMotorNonDriveEndInsulationBearingRequirement?: string | null;
            spaceHeater?: string | null;
            spaceHeaterTerminalBox?: string | null;
            spaceHeaterVoltage?: string | null;
            warningLabel?: string | null;
            warningLabelLanguage?: string | null;
            mountingPosition?: string | null;
            typeOfMounting?: string | null;
            flangeType?: string | null;
            verticalMotorShaftOrientation?: string | null;
            nonReverseRatchet?: string | null;
            dripCover?: string | null;
            verticallyMountedMotorAdditionalRequirement?: string | null;
            provisionsForVibrationMonitoring?: string | null;
            windingTemperatureDetectors?: string | null;
            bearingTemperatureDetectors?: string | null;
            instrumentationTerminalBox?: string | null;
            provisionForIoTHardwareInstallation?: string | null;
            motorMonitoringDevice?: string | null;
            atmosphericCorrosivityCategory?: string | null;
            surfaceProtectionDurabilityCategory?: string | null;
            hazardousAreaClassification?: string | null;
            uL674Listing?: string | null;
            temperatureGroup?: string | null;
            gasDustGroup?: string | null;
            shopInspection?: string | null;
            vibrationTest?: string | null;
            additionalTest?: string | null;
            storageConditions?: string | null;
            storageDuration?: string | null;
            motorNameplateOilMistLubricated?: string | null;
            motorTemporaryTagOilMistReadyDoNotRunWithoutOil?: string | null;
            motorDataSheet?: string | null;
            deliveryOfMotorRoutineTestData?: string | null;
            torqueAndCurrentVSSpeedCurve?: string | null;
            motorThermalCurves?: string | null;
            maximumPermissibleStallTimeData?: string | null;
            asdOperationCurves?: string | null;
            dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories?: string | null;
            installationOperationAndMaintenanceManuals?: string | null;
            motorConnectionDiagramIncludingAuxilliaries?: string | null;
            additionalTestRecord?: string | null;
            certifications?: string | null;
            serialNumber?: string | null;
            conformityAssessmentSystemLevel?: string | null;
            dutyType?: string | null;
            numberOfPoles?: string | null;
            dutyPointShaftPower?: string | null;
            momentOfInertiaOfTheLoadJext?: string | null;
            locationEnvironment?: string | null;
            standstillPeriod?: string | null;
            maximumRelativeHumidity?: string | null;
            impactProtection?: string | null;
            thermalClass?: string | null;
            temperatureRiseClass?: string | null;
            momentOfInertiaOfTheMotorJm?: string | null;
            dataForProtectionSettingPowerModelling?: string | null;
            transportAndStorageConditions?: string | null;
            efficiency?: string | null;
            purchaserMaximumPermissibleNoiseLimit?: string | null;
            maximumDeclaredMotorSoundPowerLevelAtNoLoad?: string | null;
            maximumExpectedMotorSoundPowerLevelAtFullLoad?: string | null;
            noiseLevelTestAtOneMotorFromThisOrderBatch?: string | null;
            stainlessSteelFixings?: string | null;
            maximumVibrationMagnitude?: string | null;
            fanImpellerMaterial?: string | null;
            fanDirectionOfRotation?: string | null;
            terminalBoxLocation?: string | null;
            lineConductorTerminalBoxCableGlandEntries?: string | null;
            lineConductorCrossSectionArea?: string | null;
            largeTerminalBox?: string | null;
            dEndBearingType?: string | null;
            nEndBearingType?: string | null;
            internalClearance?: string | null;
            lubricationSpecification?: string | null;
            heaterRequirement?: string | null;
            supplyVoltage?: string | null;
            seperateTerminalBox?: string | null;
            mountingArrangement?: string | null;
            coolingMethod?: string | null;
            vibrationMonitoring?: string | null;
            vibrationLevelTestReport?: string | null;
            shockPulseMonitoringConnection?: string | null;
            surfaceProtectionCorrosivityCategory?: string | null;
            surfaceFinish?: string | null;
            paintColor?: string | null;
            windingTemperatureDetection?: string | null;
            converterManufacturer?: string | null;
            converterModelNumber?: string | null;
            fineBalancingAboveRatedSpeed?: string | null;
            motorToBeRatedForUseInPotentiallyExplosiveAtmosphere?: string | null;
            hazardousAreaEquipmentCertifyingBody?: string | null;
            equipmentProtectionLevel?: string | null;
            motorClassification?: string | null;
            loadDrive?: string | null;
        }
        export interface ElectricalSupplierOfferedProduct {
            orderStatus?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            clientName?: string | null;
            siteOrLocation?: string | null;
            projectTitleOrNumber?: string | null;
            purchaseOrderNumber?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            ieeeStd841MotorType?: string | null;
            additionalCertification?: string | null;
            startingMethod?: string | null;
            numberOfPolesMotorSynchronousSpeed?: string | null;
            directionOfRotation?: string | null;
            methodOfMotorCouplingToDrivenEquipment?: string | null;
            motorRatedFrequency?: string | null;
            motorRatedVoltage?: string | null;
            frameSize?: string | null;
            ratedPowerOutput?: string | null;
            serviceFactor?: string | null;
            fullLoadCurrent?: string | null;
            loadType?: string | null;
            minimumOperatingSpeed?: string | null;
            maximumOperatingSpeed?: string | null;
            floatingMarineShipboard?: string | null;
            chemicalsOrCorrosives?: string | null;
            altitude?: string | null;
            minimumAmbientAirTemperature?: string | null;
            maximumAmbientAirTemperature?: string | null;
            motorDesignsAndStartingCharacteristics?: string | null;
            ratedFullLoadSpeed?: string | null;
            ratedFullLoadTorque?: string | null;
            ratedBreakdownTorque?: string | null;
            efficiencyAt100PercentRatedOutput?: string | null;
            efficiencyAt75PercentRatedOutput?: string | null;
            efficiencyAt50PercentRatedOutput?: string | null;
            powerFactorAt100PercentRatedOutput?: string | null;
            powerFactorAt75PercentRatedOutput?: string | null;
            powerFactorAt50PercentRatedOutput?: string | null;
            maximumPermissibleSoundPressureAt1Meter?: string | null;
            motorSoundPressureAt1Meter?: string | null;
            motorWeight?: string | null;
            stainlessSteelHardware?: string | null;
            enclosureType?: string | null;
            enclosureIngressProtection?: string | null;
            fanMaterial?: string | null;
            position?: string | null;
            ingressProtectionOfTerminalBoxes?: string | null;
            mainTerminalBoxCableEntryHoleSizeAndNumber?: string | null;
            oversizedTerminalBox?: string | null;
            mainTerminalBoxMaterial?: string | null;
            l10Life?: string | null;
            driveEndBearingNumber?: string | null;
            nonDriveEndBearingNumber?: string | null;
            externalRadialLoadingOnMotorShaftEnd?: string | null;
            externalAxialLoadingOnMotorShaftEnd?: string | null;
            recommendedLubricant?: string | null;
            grease?: string | null;
            oilMistLubricant?: string | null;
            sealedForLifeAntiFrictionBearing?: string | null;
            asdFedMotorNonDriveEndInsulationBearingRequirement?: string | null;
            spaceHeater?: string | null;
            spaceHeaterTerminalBox?: string | null;
            spaceHeaterVoltage?: string | null;
            warningLabel?: string | null;
            warningLabelLanguage?: string | null;
            mountingPosition?: string | null;
            typeOfMounting?: string | null;
            flangeType?: string | null;
            verticalMotorShaftOrientation?: string | null;
            nonReverseRatchet?: string | null;
            dripCover?: string | null;
            verticallyMountedMotorAdditionalRequirement?: string | null;
            provisionsForVibrationMonitoring?: string | null;
            windingTemperatureDetectors?: string | null;
            bearingTemperatureDetectors?: string | null;
            instrumentationTerminalBox?: string | null;
            provisionForIoTHardwareInstallation?: string | null;
            motorMonitoringDevice?: string | null;
            atmosphericCorrosivityCategory?: string | null;
            surfaceProtectionDurabilityCategory?: string | null;
            hazardousAreaClassification?: string | null;
            uL674Listing?: string | null;
            temperatureGroup?: string | null;
            gasDustGroup?: string | null;
            shopInspection?: string | null;
            vibrationTest?: string | null;
            additionalTest?: string | null;
            storageConditions?: string | null;
            storageDuration?: string | null;
            motorNameplateOilMistLubricated?: string | null;
            motorTemporaryTagOilMistReadyDoNotRunWithoutOil?: string | null;
            motorDataSheet?: string | null;
            deliveryOfMotorRoutineTestData?: string | null;
            torqueAndCurrentVSSpeedCurve?: string | null;
            motorThermalCurves?: string | null;
            maximumPermissibleStallTimeData?: string | null;
            asdOperationCurves?: string | null;
            dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories?: string | null;
            installationOperationAndMaintenanceManuals?: string | null;
            motorConnectionDiagramIncludingAuxilliaries?: string | null;
            additionalTestRecord?: string | null;
            certifications?: string | null;
            serialNumber?: string | null;
            conformityAssessmentSystemLevel?: string | null;
            dutyType?: string | null;
            numberOfPoles?: string | null;
            dutyPointShaftPower?: string | null;
            momentOfInertiaOfTheLoadJext?: string | null;
            locationEnvironment?: string | null;
            standstillPeriod?: string | null;
            maximumRelativeHumidity?: string | null;
            impactProtection?: string | null;
            thermalClass?: string | null;
            temperatureRiseClass?: string | null;
            momentOfInertiaOfTheMotorJm?: string | null;
            dataForProtectionSettingPowerModelling?: string | null;
            transportAndStorageConditions?: string | null;
            efficiency?: string | null;
            purchaserMaximumPermissibleNoiseLimit?: string | null;
            maximumDeclaredMotorSoundPowerLevelAtNoLoad?: string | null;
            maximumExpectedMotorSoundPowerLevelAtFullLoad?: string | null;
            noiseLevelTestAtOneMotorFromThisOrderBatch?: string | null;
            stainlessSteelFixings?: string | null;
            maximumVibrationMagnitude?: string | null;
            fanImpellerMaterial?: string | null;
            fanDirectionOfRotation?: string | null;
            terminalBoxLocation?: string | null;
            lineConductorTerminalBoxCableGlandEntries?: string | null;
            lineConductorCrossSectionArea?: string | null;
            largeTerminalBox?: string | null;
            dEndBearingType?: string | null;
            nEndBearingType?: string | null;
            internalClearance?: string | null;
            lubricationSpecification?: string | null;
            heaterRequirement?: string | null;
            supplyVoltage?: string | null;
            seperateTerminalBox?: string | null;
            mountingArrangement?: string | null;
            coolingMethod?: string | null;
            vibrationMonitoring?: string | null;
            vibrationLevelTestReport?: string | null;
            shockPulseMonitoringConnection?: string | null;
            surfaceProtectionCorrosivityCategory?: string | null;
            surfaceFinish?: string | null;
            paintColor?: string | null;
            windingTemperatureDetection?: string | null;
            converterManufacturer?: string | null;
            converterModelNumber?: string | null;
            fineBalancingAboveRatedSpeed?: string | null;
            motorToBeRatedForUseInPotentiallyExplosiveAtmosphere?: string | null;
            hazardousAreaEquipmentCertifyingBody?: string | null;
            equipmentProtectionLevel?: string | null;
            motorClassification?: string | null;
            loadDrive?: string | null;
        }
        export interface PurchaserRequirement {
            codeRequirement?: number | null; // int32
            conformityAssessmentSystemLevel?: number | null; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            minimumAmbientTemperature?: number | null; // int32
            maximumAmbientTemperature?: number | null; // int32
            baseConditions?: string | null;
            baseTemperature?: number | null; // int32
            basePressure?: number | null; // int32
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
            designPressureMaximum?: number | null; // int32
            designPressureMinimum?: number | null; // int32
            designTemperatureMaximum?: number | null; // int32
            designTemperatureMinimum?: number | null; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number | null; // int32
            processFluidSpecificHeatRatio?: number | null; // double
            processVacuumPossibility?: boolean | null;
            processFluidVapourPressure?: string | null;
            minimumOperatingVolumetricFlow?: number | null; // int32
            minimumOperatingVelocity?: number | null; // int32
            minimumOperatingTemperature?: number | null; // int32
            minimumOperatingPressure?: number | null; // int32
            normalOperatingVolumetricFlow?: number | null; // int32
            normalOperatingVelocity?: number | null; // double
            normalOperatingTemperature?: number | null; // int32
            normalOperatingPressure?: number | null; // double
            normalOperatingLiquidSpecificGravity?: number | null; // double
            normalOperatingLiquidViscosity?: number | null; // double
            maximumOperatingVolumetricFlow?: string | null;
            maximumOperatingVelocity?: string | null;
            maximumOperatingTemperature?: string | null;
            maximumOperatingPressure?: string | null;
            maximumOperatingLiquidSpecificGravity?: string | null;
            maximumOperatingLiquidViscosity?: string | null;
            maximumOperatingVapourMolecularWeight?: string | null;
            maximumOperatingVapourCompressibilityFactor?: string | null;
            maximumOperatingVapourActualDensity?: string | null;
            maximumOperatingVapourViscosity?: string | null;
            maximumRecoverablePressureDrop?: string | null;
            maximumUnrecoverablePressureLoss?: string | null;
            bodyMaterial?: string | null;
            transmitterDisplay?: string | null;
            transmitterConnectingCableLength?: number | null; // double
            externalPowerVoltage?: number | null; // double
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: string | null;
            measurementRangeMinimum?: number | null; // double
            measurementRangeMaximum?: number | null; // double
            spanAndZeroAdjustment?: string | null;
            accuracy?: string | null;
            repeatability?: number | null; // double
            stepResponse?: number | null; // double
            longTermDrift?: number | null; // double
            longTermStability?: string | null;
            vibration?: string | null;
            weatherEnclosure?: string | null;
            mountingBracket?: string | null;
            mountingBracketMaterial?: string | null;
            electricalSurgeProtector?: string | null;
            sunshade?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            bodyElementSensorManufacturerModelNumber?: string | null;
            coriolisTubeMaterial?: string | null;
            coriolisTubeType?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number | null; // double
            groundingRing?: boolean | null;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number | null; // double
            endConnectionSize?: number | null; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: string | null;
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterConnectingCables?: string | null;
            transmitterConnectingCableQuantity?: number | null; // int32
            supplyVoltage?: string | null;
            isolatedOutputs?: string | null;
            lowerRangeLimit?: number | null; // double
            upperRangeLimit?: number | null; // double
            coriolisOuterCasingMaterial?: string | null;
            coriolisOuterCasingBurstPressure?: string | null;
            ruptureDiscBurstPressure?: string | null;
            processSecondaryContainment?: string | null;
        }
        export interface SupplierOfferedProduct {
            manufacturer?: string | null;
            modelNumber?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            minimumAmbientTemperature?: number | null; // int32
            maximumAmbientTemperature?: number | null; // int32
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            bodyElementSensorManufacturerModelNumber?: string | null;
            bodyMaterial?: string | null;
            coriolisTubeMaterial?: string | null;
            coriolisTubeType?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number | null; // double
            groundingRing?: boolean | null;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number | null; // double
            endConnectionSize?: number | null; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: string | null;
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterDisplay?: string | null;
            transmitterConnectingCables?: string | null;
            transmitterConnectingCableLength?: number | null; // double
            transmitterConnectingCableQuantity?: number | null; // int32
            supplyVoltage?: string | null;
            externalPowerVoltage?: string | null;
            isolatedOutputs?: string | null;
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: string | null;
            measurementRangeMinimum?: number | null; // double
            measurementRangeMaximum?: number | null; // double
            spanAndZeroAdjustment?: string | null;
            lowerRangeLimit?: number | null; // double
            upperRangeLimit?: number | null; // double
            accuracy?: string | null;
            repeatability?: number | null; // double
            stepResponse?: number | null; // double
            longTermDrift?: number | null; // double
            longTermStability?: string | null;
            vibration?: string | null;
            weatherEnclosure?: string | null;
            mountingBracket?: string | null;
            mountingBracketMaterial?: string | null;
            electricalSurgeProtector?: string | null;
            sunshade?: string | null;
            codeRequirement?: number | null; // int32
            conformityAssessmentSystemLevel?: number | null; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            baseConditions?: string | null;
            baseTemperature?: number | null; // int32
            basePressure?: number | null; // int32
            coatingDurability?: string | null;
            upstreamHighSidePipeSchedule?: string | null;
            upstreamHighSideLineSize?: string | null;
            upstreamHighSideLineEquipmentRating?: string | null;
            upstreamHighSideLineConnectionType?: string | null;
            upstreamHighSideConnectionOrientation?: string | null;
            upstreamHighSideMaterialType?: string | null;
            designPressureMaximum?: number | null; // int32
            designPressureMinimum?: number | null; // int32
            designTemperatureMaximum?: number | null; // int32
            designTemperatureMinimum?: number | null; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number | null; // int32
            processFluidSpecificHeatRatio?: number | null; // double
            processVacuumPossibility?: boolean | null;
            processFluidVapourPressure?: string | null;
            minimumOperatingVolumetricFlow?: number | null; // int32
            minimumOperatingVelocity?: number | null; // int32
            minimumOperatingTemperature?: number | null; // int32
            minimumOperatingPressure?: number | null; // int32
            normalOperatingVolumetricFlow?: number | null; // int32
            normalOperatingVelocity?: number | null; // double
            normalOperatingTemperature?: number | null; // int32
            normalOperatingPressure?: number | null; // double
            normalOperatingLiquidSpecificGravity?: number | null; // double
            normalOperatingLiquidViscosity?: number | null; // double
            maximumOperatingVolumetricFlow?: string | null;
            maximumOperatingVelocity?: string | null;
            maximumOperatingTemperature?: string | null;
            maximumOperatingPressure?: string | null;
            maximumOperatingLiquidSpecificGravity?: string | null;
            maximumOperatingLiquidViscosity?: string | null;
            maximumOperatingVapourMolecularWeight?: string | null;
            maximumOperatingVapourCompressibilityFactor?: string | null;
            maximumOperatingVapourActualDensity?: string | null;
            maximumOperatingVapourViscosity?: string | null;
            maximumRecoverablePressureDrop?: string | null;
            maximumUnrecoverablePressureLoss?: string | null;
            coriolisOuterCasingMaterial?: string | null;
            coriolisOuterCasingBurstPressure?: string | null;
            ruptureDiscBurstPressure?: string | null;
            processSecondaryContainment?: string | null;
        }
    }
}
declare namespace Paths {
    namespace CreateComment {
        export type RequestBody = Components.Schemas.Comment;
        namespace Responses {
            export type $200 = Components.Schemas.Comment;
        }
    }
    namespace GetComment {
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
            export type $200 = Components.Schemas.Comment;
        }
    }
    namespace GetComments {
        namespace Responses {
            export type $200 = Components.Schemas.Comment[];
        }
    }
    namespace GetCommentsForTag {
        namespace Parameters {
            export type Id = string;
            export type TagId = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            tagId?: Parameters.TagId /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Comment[];
        }
    }
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
