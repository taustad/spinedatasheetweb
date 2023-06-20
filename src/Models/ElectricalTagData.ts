import { TagData } from "./TagData"

export class ElectricalTagData extends TagData implements Components.Schemas.ElectricalTagDataDto {
    electricalPurchaserRequirement?: Components.Schemas.ElectricalPurchaserRequirement
    electricalSupplierOfferedProduct?: Components.Schemas.ElectricalSupplierOfferedProduct

    constructor(init?: Partial<ElectricalTagData>) {
        super(init)
        Object.assign(this, init)
    }
}
