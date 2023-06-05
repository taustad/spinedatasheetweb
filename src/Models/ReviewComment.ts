export class ReviewComment implements Components.Schemas.Comment {
    id?: string // uuid
    createdDate?: string // date-time
    modifiedDate?: string // date-time
    userId?: string // uuid
    tagDataId?: string // uuid
    text?: string | null
    property?: string | null
    commentLevel?: Components.Schemas.CommentLevel /* int32 */

    constructor(init?: Partial<ReviewComment>) {
        Object.assign(this, init)
    }
}
