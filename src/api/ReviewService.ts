import { Review } from "../Models/Review"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ReviewService extends BaseService {
    async getReview(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getReviews() {
        const result: any = await this.get("")
        return result
    }

    async getReviewsForTag(id: string) {
        const result: any = await this.get(`tag/${id}`)
        return result
    }

    async createReview(review: Review) {
        const result: any = await this.post("", {
            body: review,
        })
        return result
    }
}

export async function GetReviewService() {
    return new ReviewService({
        ...config.ReviewService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
