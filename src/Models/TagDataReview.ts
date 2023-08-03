import { TagData } from "./TagData"

export class TagDataReview implements Components.Schemas.TagDataReviewDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    tagDataId?: string; // uuid
    status?: Components.Schemas.ReviewStatusEnum /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    tagDataVersion?: number; // int32
    comments?: Components.Schemas.CommentDto[] | null

    constructor(init?: Partial<TagDataReview>) {
        Object.assign(this, init)
    }
}
