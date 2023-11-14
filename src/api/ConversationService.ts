import { BaseService } from "./BaseService"
import { config, GetToken, LoginAccessTokenKey } from "./config"

class ConversationService extends BaseService {
    async getConversations(projectId: string, tagNo: string, includeLatestMessage: boolean = false) {
        const result: Components.Schemas.GetConversationDto[] = await this.get(
            `projects/${projectId}/tags/${tagNo}/conversations?includeLatestMessage=${includeLatestMessage}`,
        )
        return result
    }

    async getConversationsForContainer(containerId: string) {
        const result: Components.Schemas.GetConversationDto[] = await this.get(
            `containers/${containerId}/conversations`,
        )
        return result
    }

    async getConversation(projectId: string, tagNo: string, conversationId: string) {
        const result: Components.Schemas.GetConversationDto = await this.get(
            `projects/${projectId}/tags/${tagNo}/conversations/${conversationId}`,
        )
        return result
    }

    async createConversation(projectId: string, tagNo: string, message: Components.Schemas.ConversationDto) {
        const result: Components.Schemas.ConversationDto = await this.post(
            `projects/${projectId}/tags/${tagNo}/conversations`,
            {
                body: message,
            },
        )
        return result
    }

    async updateConversation(projectId: string, tagNo: string, conversationId: string, message: Components.Schemas.UpdateConversationDto) {
        const result: Components.Schemas.ConversationDto = await this.put(
            `projects/${projectId}/tags/${tagNo}/conversations/${conversationId}`,
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
