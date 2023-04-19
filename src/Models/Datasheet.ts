import { PurchaserRequirement } from "./PurchaserRequirement"
import { SupplierOfferedProduct } from "./SupplierOfferedProduct"

export class Datasheet implements Components.Schemas.DatasheetDto {
    id?: string; // uuid
    projectId?: string; // uuid
    tagNo?: string | null;
    description?: string | null;
    category?: string | null;
    area?: string | null;
    dicipline?: string | null;
    purchaserRequirement?: PurchaserRequirement;
    supplierOfferedProduct?: SupplierOfferedProduct;

    constructor(init?: Partial<Datasheet>) {
        Object.assign(this, init)
    }
}
