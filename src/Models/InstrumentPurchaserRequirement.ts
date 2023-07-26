export class InstrumentPurchaserRequirement implements Components.Schemas.InstrumentPurchaserRequirement {
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
    minimumOperatingVelocity?: number | null; // double
    minimumOperatingTemperature?: string | null;
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
    repeatability?: string | null;
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
    pipeClassSheet?: string | null;
    setAlarmPoint?: string | null;
    poNumber?: string | null;
    type?: string | null;
    operatingTemperatureLimits?: string | null;
    operatingPressureLimit?: string | null;
    pressureLossAtFullRange?: string | null;
    mounting?: string | null;
    weight?: number | null; // double
    calibratedRange?: string | null;
    characteristics?: string | null;
    linearity?: string | null;
    minMaxRangeLimit?: string | null;
    bodyNominalSize?: number | null; // double
    processConnectionSizeType?: string | null;
    pressureRating?: number | null; // double
    faceToFaceDimension?: number | null; // double
    numberOfTubeRuns?: number | null; // double
    tubeInnerDiameter?: number | null; // double
    materialTube?: string | null;
    materialFlangeConnection?: string | null;
    materialTubeCover?: string | null;
    bodyEnclosureProtection?: string | null;
    bodyProtectiveCoatingColor?: string | null;
    transmitterCableConnection?: string | null;
    transmitterDimension?: string | null;
    transmitterEnclosureProtection?: string | null;
    transmitterExClassification?: string | null;
    transmitterProtectiveCoating?: string | null;
    transmitterConsumption?: string | null;
    transmitterLoadLimitation?: string | null;
    transmitterFlowRange?: string | null;
    lineNominalSize?: number | null; // double
    lineInnerDiameter?: number | null; // double
    lineMaterial?: string | null;
    flangeStandardOrCode?: string | null;
    flangeSize?: number | null; // double
    flangePressureClass?: string | null;
    flangeFacing?: string | null;
    pipingDesignTemperature?: string | null;
    pipingDesignPressure?: string | null;
    fluid?: string | null;
    phase?: string | null;
    corrosiveCompounds?: string | null;
    maximumPressureLoss?: number | null; // double
    minimumFlowRate?: number | null; // double
    minimumInletPressure?: number | null; // double
    minimumDensityAtTAndP?: string | null;
    minimumViscosityAtT?: string | null;
    minimumOperatingVapourMolecularWeight?: string | null;
    minimumVapourCompressFactor?: string | null;
    minimumVapourSpecificHeatRatio?: string | null;
    maximumFlowRate?: number | null; // double
    maximumInletPressure?: number | null; // double
    maximumDensityAtTAndP?: string | null;
    maximumViscosityAtT?: string | null;
    maximumVapourCompressFactor?: string | null;
    maximumVapourSpecificHeatRatio?: string | null;
    maxDistanceMeterTrans?: string | null;
    transmitterIndicator?: string | null;
    transmitterOutputSignal?: string | null;
    lineEquipmentNumber?: string | null;
    pAndID?: string | null;

    constructor(init?: Partial<InstrumentPurchaserRequirement>) {
        Object.assign(this, init)
    }
}