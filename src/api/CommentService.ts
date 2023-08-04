import { ReviewComment } from "../Models/ReviewComment"
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

    async getCommentsForTagReview(id: string) {
        const result: any = await this.get(`tagreview/${id}`)
        return result
    }

    async createComment(comment: ReviewComment) {
        const result: any = await this.post("", {
            body: comment,
        })
        return result
    }

    async deleteComment(id: string) {
        const result: any = await this.delete(id)
        return result
    }
}

export async function GetCommentService() {
    return new CommentService({
        ...config.CommentService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
