import { ReviewComment } from "./ReviewComment";

export class RevisionContainerReview implements Components.Schemas.RevisionContainerReview {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    status?: Components.Schemas.ReviewStatusEnum /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    revisionContainerVersion?: number; // int32
    revisionContainerId?: string; // uuid
    revisionContainer?: Components.Schemas.RevisionContainer;
    comments?: ReviewComment[] | null;

    constructor(init?: Partial<RevisionContainerReview>) {
        Object.assign(this, init)
    }
}
