import { Contract } from "@equinor/fusion"
import { RevisionContainerReview } from "./RevisionContainerReview"
import { TagData } from "./TagData"
import { TagDataReview } from "./TagDataReview"

export class RevisionContainer implements Components.Schemas.RevisionContainerDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    revisionContainerName?: string | null;
    revisionNumber?: number; // int32
    revisionContainerDate?: string; // date-time
    tagData?: TagData[] | null;
    revisionContainerReview?: RevisionContainerReview;
    contractId?: string; // uuid
    contract?: Contract;

    constructor(init?: Partial<RevisionContainer>) {
        Object.assign(this, init)
    }
}
