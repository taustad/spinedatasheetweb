export class Review implements Components.Schemas.Comment {
    id?: string // uuid
    createdDate?: string // date-time
    modifiedDate?: string // date-time
    status?: Components.Schemas.ReviewStatusEnum /* int32 */
    tagId?: string // uuid
    revisionId?: string // uuid
    userId?: string // uuid
    conflict?: boolean
    approved?: boolean

    constructor(init?: Partial<Review>) {
        Object.assign(this, init)
    }
}
