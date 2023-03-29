import { Datasheet } from "../Models/Datasheet"
import { BaseService } from "./BaseService"

import { config, GetToken, LoginAccessTokenKey } from "./config"

class DatasheetService extends BaseService {
    async getDatasheets() {
        const datasheets: any = await this.get("")
        return datasheets.value
    }

    async getDatasheetsForProject(id: string) {
        const result: any = await this.get(`project/${id}`)
        return result.value
    }

    async getDatasheet(id: string) {
        const result: any = await this.get(id)
        return result.value
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
