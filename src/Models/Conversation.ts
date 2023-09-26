import { Message } from "./Message"
import { User } from "./User"

export class Conversation implements Components.Schemas.GetConversationDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    property?: string | null;
    conversationStatus?: Components.Schemas.ConversationStatusDto /* int32 */;
    conversationLevel?: Components.Schemas.ConversationLevelDto /* int32 */;
    participants?: User[] | null;
    messages?: Message[] | null;

    constructor(init?: Partial<Conversation>) {
        Object.assign(this, init)
    }
}
