import { TagData } from "./TagData";

export class InstrumentTagData extends TagData implements Components.Schemas.InstrumentTagDataDto  {
    instrumentPurchaserRequirement?: Components.Schemas.InstrumentPurchaserRequirement;
    instrumentSupplierOfferedProduct?: Components.Schemas.InstrumentSupplierOfferedProduct;

    constructor(init?: Partial<InstrumentTagData>) {
        super(init);
        Object.assign(this, init)
    }
}
