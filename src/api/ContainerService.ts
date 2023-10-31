import { TagDataReview } from "../Models/TagDataReview"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ContainerService extends BaseService {
    async getContainer(id: string) {
        const result: any = await this.get(`/${id}`)
        return result.value
    }

    async getContainers() {
        const result = await this.get("")
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

export async function GetContainerService() {
    return new ContainerService({
        ...config.ContainerService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}