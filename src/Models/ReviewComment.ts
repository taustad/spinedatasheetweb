import { RevisionContainerReview } from "./RevisionContainerReview"
import { TagDataReview } from "./TagDataReview"

export class ReviewComment implements Components.Schemas.CommentDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    userId?: string; // uuid
    commenterName?: string | null;
    text?: string | null;
    property?: string | null;
    commentLevel?: Components.Schemas.CommentLevel /* int32 */;
    tagDataReviewId?: string | null; // uuid
    revisionContainerReviewId?: string | null; // uuid

    constructor(init?: Partial<ReviewComment>) {
        Object.assign(this, init)
    }
}
