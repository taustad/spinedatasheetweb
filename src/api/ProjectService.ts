import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class ProjectService extends BaseService {
    async getProject(id: string) {
        const result: any = await this.get(`${id}`)
        return result.value
    }
}

export const CaseService = new ProjectService({
    ...config.CommentService,
    accessToken: window.sessionStorage.getItem("loginAccessToken")!,
})

export async function GetProjectService() {
    return new ProjectService({
        ...config.ProjectService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
