import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class TagDataService extends BaseService {
    async getAllTagData() {
        const datasheets = await this.get("/tagdata")
        return datasheets
    }

    async getTagData(id: string) {
        const result = await this.get(`/tagdata/${id}`)
        return result
    }

    async getTagDataForContainer(containerId: string) {
        const result: Components.Schemas.TagDataDto[] = await this.get(
            `containers/${containerId}/tags`,
        )
        return result
    }
}

export async function GetTagDataService() {
    return new TagDataService({
        ...config.TagDataService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
