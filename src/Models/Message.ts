export class Message implements Components.Schemas.GetMessageDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    userId?: string; // uuid
    text?: string | null;
    commenterName?: string | null;
    isEdited?: boolean;
    softDeleted?: boolean;

    constructor(init?: Partial<Message>) {
        Object.assign(this, init)
    }
}
