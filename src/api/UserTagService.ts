import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class UserTagService extends BaseService {
    async getUsers(fusionContextId: string, search: string, top: number, skip: number) {
        const result: any = await this.getWithParams(
            `${fusionContextId}`,
            {
                params: { search, top, skip },
            },
        )
        return result
    }
}

export async function GetUserTagService() {
    return new UserTagService({
        ...config.UserTagService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
