import { InstrumentPurchaserRequirement } from "./InstrumentPurchaserRequirement"
import { InstrumentSupplierOfferedProduct } from "./InstrumentSupplierOfferedProduct"

export class Datasheet implements Components.Schemas.DatasheetDto {
    id?: string; // uuid
    projectId?: string; // uuid
    tagNo?: string | null;
    description?: string | null;
    category?: string | null;
    area?: string | null;
    dicipline?: string | null;
    instrumentPurchaserRequirement?: InstrumentPurchaserRequirement;
    instrumentSupplierOfferedProduct?: InstrumentSupplierOfferedProduct;
    electricalPurchaserRequirement?: Components.Schemas.ElectricalPurchaserRequirement;
    electricalSupplierOfferedProduct?: Components.Schemas.ElectricalSupplierOfferedProduct;
    mechanicalPurchaserRequirement?: Components.Schemas.MechanicalPurchaserRequirement;
    mechanicalSupplierOfferedProduct?: Components.Schemas.MechanicalSupplierOfferedProduct;

    constructor(init?: Partial<Datasheet>) {
        Object.assign(this, init)
    }
}
