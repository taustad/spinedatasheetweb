import { TagDataReview } from "../Models/TagDataReview"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class RevisionReviewService extends BaseService {
    async getRevisionReview(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getRevisionReviews() {
        const result: any = await this.get("")
        return result
    }

    async getRevisionReviewsForTag(id: string) {
        const result: any = await this.get(`tag/${id}`)
        return result
    }

    async createRevisionReview(review: TagDataReview) {
        const result: any = await this.post("", {
            body: review,
        })
        return result
    }
}

export async function GetRevisionReviewService() {
    return new RevisionReviewService({
        ...config.ContainerReviewService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
