import { Message } from "../Models/Message"
import { BaseService } from "./BaseService"
import { config, GetToken, LoginAccessTokenKey } from "./config"

class CommentService extends BaseService {
    async getComment(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getComments() {
        const result: any = await this.get("")
        return result
    }

    async getConversationsForTagReview(reviewId: string) {
        const result: any = await this.get(`${reviewId}/conversations`)
        return result
    }

    async createComment(comment: Message) {
        const result: any = await this.post("", {
            body: comment,
        })
        return result
    }

    async deleteComment(id: string) {
        const result: any = await this.delete(id)
        return result.status
    }

    async updateComment(id: string, comment: Message) {
        const result: any = await this.put(`${id}`, {
            body: comment,
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
