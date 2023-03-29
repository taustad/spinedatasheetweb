export class SupplierOfferedProduct implements Components.Schemas.SupplierOfferedProduct {
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

    constructor(init?: Partial<SupplierOfferedProduct>) {
        Object.assign(this, init);
    }
}