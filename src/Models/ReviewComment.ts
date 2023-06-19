export class ReviewComment implements Components.Schemas.Comment {
    id?: string // uuid
    createdDate?: string // date-time
    modifiedDate?: string // date-time
    userId?: string // uuid
    commenterName?: string | null;
    tagDataId?: string // uuid
    text?: string | null
    property?: string | null
    commentLevel?: Components.Schemas.CommentLevel /* int32 */
    external?: boolean;

    constructor(init?: Partial<ReviewComment>) {
        Object.assign(this, init)
    }
}
