import { TagData } from "./TagData";

export class MechanicalTagData extends TagData implements Components.Schemas.MechanicalTagDataDto {
    mechanicalPurchaserRequirement?: Components.Schemas.MechanicalPurchaserRequirement;
    mechanicalSupplierOfferedProduct?: Components.Schemas.MechanicalSupplierOfferedProduct;

    constructor(init?: Partial<MechanicalTagData>) {
        super(init);
        Object.assign(this, init)
    }
}
