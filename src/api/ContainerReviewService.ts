import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ContainerReviewService extends BaseService {
    async getContainerReview(id: string) {
        const result = await this.get(`project/${id}`)
        return result.value
    }

    async getContainerReviews() {
        const result = await this.getWithParams("")
        return result
    }
}

export async function GetContainerReviewService() {
    return new ContainerReviewService({
        ...config.ContainerReviewService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
