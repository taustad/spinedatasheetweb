import { BaseService } from "./BaseService"
import { config, GetToken, LoginAccessTokenKey } from "./config"

class MessageService extends BaseService {
    async getMessage(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getMessagesForConversation(conversationId: string) {
        const result: any = await this.get(`${conversationId}`)
        return result
    }

    async addMessage(conversationId: string, message: Components.Schemas.MessageDto) {
        const result: any = await this.post(`${conversationId}/messages`, {
            body: message,
        })
        return result
    }

    async deleteMessage(conversationId: string, messageId: string) {
        const result: any = await this.delete(`${conversationId}/messages/${messageId}`)
        return result.status
    }

    async updateMessage(conversationId: string, messageId: string, message: Components.Schemas.MessageDto) {
        const result: any = await this.put(`${conversationId}/messages/${messageId}`, {
            body: message,
        })
        return result
    }
}

export async function GetMessageService() {
    return new MessageService({
        ...config.MessageService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
