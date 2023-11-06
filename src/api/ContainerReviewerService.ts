import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ContainerReviewerService extends BaseService {
    async getContainerReviewer(containerReviewId: string, containerReviewerId: string) {
        const result: any = await this.get(`/container-reviews/${containerReviewId}/container-reviewers/${containerReviewerId}`)
        return result.value
    }

    async getContainerReviewersForContainer(containerReviewId: string, userId: string = "") {
        if (userId === "") {
            const result: any = await this.get(`/container-reviews/${containerReviewId}/container-reviewers`)
            return result
        }

        // Get container reviewer for specific user
        const result: any = await this.getWithParams(
            `/container-reviews/${containerReviewId}/container-reviewers`,
            {
                params: { userId },
            },
        )

        return result
    }

    async getContainerReviewers(userId: string) {
        // Get container reviewer for specific user
        const result: any = await this.getWithParams(
            "/container-reviewers",
            {
                params: { userId },
            },
        )

        return result
    }

    async createContainerReviewer(review: Components.Schemas.CreateContainerReviewerDto, containerReviewId: string) {
        const result: Components.Schemas.ContainerReviewerDto = await this.post(`/container-reviews/${containerReviewId}/container-reviewers`, {
            body: review,
        })
        return result
    }

    async updateReviewer(
        updateReviewerDto: Components.Schemas.UpdateContainerReviewerDto,
        containerReviewId: string,
        containerReviewerId: string,
    ) {
        const result: any = await this.put(`/container-reviews/${containerReviewId}/container-reviewers/${containerReviewerId}`, {
            body: updateReviewerDto,
        })
        return result
    }
}

export async function GetContainerReviewerService() {
    return new ContainerReviewerService({
        ...config.ContainerReviewerService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
