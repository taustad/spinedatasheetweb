import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ProjectService extends BaseService {
    async getProject(id: string) {
        const result = await this.get(`${id}`)
        return result.value
    }

    async getUsers(fusionContextId: string, search: string, top: number, skip: number) {
        const result = await this.getWithParams(
            `${fusionContextId}/users`,
            {
                params: { search, top, skip },
            },
        )
        return result
    }
}

export async function GetProjectService() {
    return new ProjectService({
        ...config.ProjectService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
