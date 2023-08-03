import { RevisionContainer } from "./RevisionContainer"
import { RevisionContainerReview } from "./RevisionContainerReview"
import { TagDataReview } from "./TagDataReview"

export class Contract implements Components.Schemas.ContractDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    contractName?: string | null;
    contractorId?: string; // uuid
    projectId?: string; // uuid
    revisionContainers?: RevisionContainer[] | null;

    constructor(init?: Partial<Contract>) {
        Object.assign(this, init)
    }
}
