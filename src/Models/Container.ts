import { Contract } from "@equinor/fusion"
import { ContainerReview } from "./ContainerReview"
import { TagData } from "./TagData"
import { TagDataReview } from "./TagDataReview"

export class Container { // implements Components.Schemas.RevisionContainerDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    revisionContainerName?: string | null;
    revisionNumber?: number; // int32
    revisionContainerDate?: string; // date-time
    tagData?: TagData[] | null;
    revisionContainerReview?: ContainerReview;
    contractId?: string; // uuid
    contract?: Contract;

    constructor(init?: Partial<Container>) {
        Object.assign(this, init)
    }
}
