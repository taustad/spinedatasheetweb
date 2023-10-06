import { TagDataReview } from "../Models/TagDataReview"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class TagDataReviewService extends BaseService {
    async getTagDataReview(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getTagDataReviews(reviewerId?: string) {
        const result = await this.getWithParams(
            "",
            {
                params: { reviewerId },
            },
        )
        return result
    }

    async getTagDataReviewsForTag(id: string) {
        const result: any = await this.get(`tag/${id}`)
        return result
    }

    async createTagDataReview(review: Components.Schemas.CreateTagDataReviewDto) {
        const result: any = await this.post("", {
            body: review,
        })
        return result
    }

    async updateReviewer(review: Components.Schemas.CreateTagDataReviewDto) {
        const result: any = await this.post("", {
            body: review,
        })
        return result
    }
}

export async function GetTagDataReviewService() {
    return new TagDataReviewService({
        ...config.TagDataReviewService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
