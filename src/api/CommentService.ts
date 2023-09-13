import { Message } from "../Models/Message"
import { BaseService } from "./BaseService"
import { config, GetToken, LoginAccessTokenKey } from "./config"

class CommentService extends BaseService {
    async getMessage(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getMessages() {
        const result: any = await this.get("")
        return result
    }

    async getConversationsForTagReview(reviewId: string) {
        const result: any = await this.get(`${reviewId}/conversations`)
        return result
    }

    async addMessage(reviewId: string, conversationId: string, message: Message) {
        const result: any = await this.post(`${reviewId}/conversations/${conversationId}/messages`, {
            body: message,
        })
        return result
    }

    async createConversation(reviewId: string, message: Components.Schemas.ConversationDto) {
        const result: any = await this.post(`${reviewId}/conversations`, {
            body: message,
        })
        return result
    }

    async deleteMessage(id: string) {
        const result: any = await this.delete(id)
        return result.status
    }

    async updateMessage(reviewId: string, conversationId: string, commentId: string, message: Message) {
        const result: any = await this.put(`${reviewId}/conversations/${conversationId}/messages/${commentId}`, {
            body: message,
        })
        return result
    }
}

export async function GetCommentService() {
    return new CommentService({
        ...config.CommentService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
