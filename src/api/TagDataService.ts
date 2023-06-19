import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class TagDataService extends BaseService {
    async getAllTagData() {
        const datasheets: any = await this.get("")
        return datasheets
    }

    async getTagDataForProject(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getTagData(id: string) {
        const result: any = await this.get(id)
        return result
    }
}

export async function GetTagDataService() {
    return new TagDataService({
        ...config.TagDataService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
