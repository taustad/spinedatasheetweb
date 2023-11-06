import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ContainerService extends BaseService {
    async getContainer(id: string) {
        const result = await this.get(`/${id}`)
        return result.value
    }

    async getContainers() {
        const result = await this.get("")
        return result
    }
}

export async function GetContainerService() {
    return new ContainerService({
        ...config.ContainerService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
