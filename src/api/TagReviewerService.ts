import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class TagReviewerService extends BaseService {
    async getTagDataReview(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getTagReviewers(reviewerId: string = "00000000-0000-0000-0000-000000000000") {
        const result = await this.getWithParams(
            "tag-reviewers",
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

    async createTagDataReview(
        tagReviewerDto: Components.Schemas.CreateTagReviewerDto[],
        containerReviewerId: string,
    ) {
        const result: any = await this.post(`container-reviewers/${containerReviewerId}/tag-reviewers`, {
            body: tagReviewerDto,
        })
        return result
    }

    async updateReviewer(
        containerReviewerId: string,
        tagReviewerId: string,
        updateReviewerDto: Components.Schemas.UpdateTagReviewerDto,
    ) {
        const result: any = await this.put(`container-reviewers/${containerReviewerId}/tag-reviewers/${tagReviewerId}`, {
            body: updateReviewerDto,
        })
        return result
    }
}

export async function GetTagReviewerService() {
    return new TagReviewerService({
        ...config.TagReviewerService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
