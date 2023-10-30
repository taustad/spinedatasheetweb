import { TagDataReview } from "../Models/TagDataReview"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ContainerReviewService extends BaseService {
    async getContainerReview(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getContainerReviews() {
        const result = await this.getWithParams("")
        return result
    }

    // async updateContainerReview(
    //     reviewId: string,
    //     reviewerId: string,
    //     updateReviewerDto: Components.Schemas.UpdateReviewerDto,
    // ) {
    //     const result: any = await this.put(`${reviewId}/reviewers/${reviewerId}`, {
    //         body: updateReviewerDto,
    //     })
    //     return result
    // }
}

export async function GetContainerReviewService() {
    return new ContainerReviewService({
        ...config.ContainerReviewService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
