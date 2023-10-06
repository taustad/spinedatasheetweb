import { BaseService } from "./BaseService"
import { config, GetToken, LoginAccessTokenKey } from "./config"

class ConversationService extends BaseService {
    async getConversationsForTag(projectId: string, tagNo: string, includeLatestMessage: boolean = false) {
        const result: Components.Schemas.GetConversationDto[] = await this.get(
                `${projectId}/tags/${tagNo}/conversations?includeLatestMessage=${includeLatestMessage}`,
            )
        return result
    }

    async createConversation(projectId: string, tagNo: string, message: Components.Schemas.ConversationDto) {
        const result: Components.Schemas.ConversationDto = await this.post(
                `${projectId}/tags/${tagNo}/conversations`,
                {
                    body: message,
                },
            )
        return result
    }
}

export async function GetConversationService() {
    return new ConversationService({
        ...config.ConversationService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
