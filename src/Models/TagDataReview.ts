import { TagData } from "./TagData";

export class TagDataReview implements Components.Schemas.TagDataReview {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    status?: Components.Schemas.ReviewStatusEnum /* int32 */;
    approverId?: string; // uuid
    commentResponsible?: string; // uuid
    approved?: boolean;
    tagDataVersion?: number; // int32
    tagDataId?: string; // uuid
    tagData?: TagData;
    comments?: Components.Schemas.Comment[] | null;

    constructor(init?: Partial<TagDataReview>) {
        Object.assign(this, init)
    }
}
