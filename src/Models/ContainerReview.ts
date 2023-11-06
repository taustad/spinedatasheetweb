import { Message } from "./Message"
import { Container } from "./Container"

export class ContainerReview { // implements Components.Schemas.RevisionContainerReviewDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    status?: Components.Schemas.ReviewStatusDto /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    revisionContainerVersion?: number; // int32
    revisionContainerId?: string; // uuid
    revisionContainer?: Container;
    comments?: Message[] | null;

    constructor(init?: Partial<ContainerReview>) {
        Object.assign(this, init)
    }
}
