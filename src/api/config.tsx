export type ServiceConfig = {
    BASE_URL: string
    accessToken?: string
    headers?: Record<string, string>
}

const configuration = {
    ProjectService: {
        BASE_URL: "",
    },
    TagDataService: {
        BASE_URL: "",
    },
    ContractService: {
        BASE_URL: "",
    },
    CommentService: {
        BASE_URL: "",
    },
    TagDataReviewService: {
        BASE_URL: "",
    },
    RevisionReviewService: {
        BASE_URL: "",
    }
}

export const buildConfig = (baseUrl: string) => {
    configuration.ProjectService.BASE_URL = `${baseUrl}/projects`
    configuration.TagDataService.BASE_URL = `${baseUrl}/tagdata`
    configuration.ContractService.BASE_URL = `${baseUrl}/contracts`
    configuration.CommentService.BASE_URL = `${baseUrl}/comments`
    configuration.TagDataReviewService.BASE_URL = `${baseUrl}/tagdatareviews`
    configuration.RevisionReviewService.BASE_URL = `${baseUrl}/revisionreviews`
}

export const config = Object.freeze(configuration)

export const LoginAccessTokenKey = "loginAccessToken"

export function StoreAppScope(appScope: string) {
    window.sessionStorage.setItem("appScope", appScope)
}

export function GetToken(keyName: string) {
    const scopes = [[window.sessionStorage.getItem("appScope") || ""][0]]
    if (scopes[0] === "") {
        console.log("No app scope found. Using default scope.")
        scopes[0] = "api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write"
    }
    // @ts-ignore
    return window.Fusion.modules.auth.acquireAccessToken({ scopes })
}