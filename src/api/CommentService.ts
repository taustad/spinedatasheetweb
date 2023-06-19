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

    async getCommentsForTag(id: string) {
        const result: any = await this.get(`tag/${id}`)
        return result
    }

    async createComment(comment: ReviewComment) {
        const result: any = await this.post("", {
            body: comment,
        })
        return result
    }
}

export const CaseService = new CommentService({
    ...config.CommentService,
    accessToken: window.sessionStorage.getItem("loginAccessToken")!,
})

export async function GetCommentService() {
    return new CommentService({
        ...config.CommentService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
