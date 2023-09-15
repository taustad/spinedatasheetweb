import { Message } from "./Message"
import { TagData } from "./TagData"

export class TagDataReview implements Components.Schemas.TagDataReviewDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    tagNo?: string | null;
    status?: Components.Schemas.ReviewStatusEnum /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    tagDataVersion?: number; // int32

    constructor(init?: Partial<TagDataReview>) {
        Object.assign(this, init)
    }
}
