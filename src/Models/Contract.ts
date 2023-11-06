import { Container } from "./Container"
import { ContainerReview } from "./ContainerReview"
import { TagDataReview } from "./TagDataReview"

export class Contract implements Components.Schemas.ContractDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    contractName?: string | null;
    contractorId?: string; // uuid
    projectId?: string; // uuid
    revisionContainers?: Container[] | null;

    constructor(init?: Partial<Contract>) {
        Object.assign(this, init)
    }
}
