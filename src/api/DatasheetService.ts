import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class DatasheetService extends BaseService {
    async getDatasheets() {
        const datasheets: any[] = await this.get<any[]>("")
        return datasheets
    }

    async getDatasheetsForProject(id: string) {
        const datasheet: any = await this.get<any>(`project/${id}`)
        return datasheet
    }
}

export const CaseService = new DatasheetService({
    ...config.DatasheetService,
    accessToken: window.sessionStorage.getItem("loginAccessToken")!,
})

export async function GetDatasheetService() {
    return new DatasheetService({
        ...config.DatasheetService,
        accessToken: await GetToken(LoginAccessTokenKey)!,
    })
}
