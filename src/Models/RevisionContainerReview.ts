import { Message } from "./Message"
import { RevisionContainer } from "./RevisionContainer"

export class RevisionContainerReview implements Components.Schemas.RevisionContainerReviewDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    status?: Components.Schemas.ReviewStatusDto /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    revisionContainerVersion?: number; // int32
    revisionContainerId?: string; // uuid
    revisionContainer?: RevisionContainer;
    comments?: Message[] | null;

    constructor(init?: Partial<RevisionContainerReview>) {
        Object.assign(this, init)
    }
}
