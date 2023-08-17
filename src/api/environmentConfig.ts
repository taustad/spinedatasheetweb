export const ResolveConfiguration = (env: string) => {
    switch (env) {
        case "FPRD":
            return {
                REACT_APP_API_BASE_URL: "https://datasheetapi-datasheet-prod.radix.equinor.com",
                BACKEND_APP_SCOPE: ["api://e1c7f3bd-1107-469a-98f9-7cf827d5df8c/Datasheet.Write"],
            }
        case "FQA":
            return {
                REACT_APP_API_BASE_URL: "https://datasheetapi-datasheet-qa.radix.equinor.com",
                BACKEND_APP_SCOPE: ["api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write"],
            }
        case "CI":
            return {
                REACT_APP_API_BASE_URL: "https://datasheetapi-datasheet-dev.radix.equinor.com",
                BACKEND_APP_SCOPE: ["api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write"],
            }
        case "PR":
            return {
                REACT_APP_API_BASE_URL: "https://datasheetapi-datasheet-dev.radix.equinor.com",
                BACKEND_APP_SCOPE: ["api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write"],
            }
        case "dev":
            return {
                REACT_APP_API_BASE_URL:
                    "http://localhost:5000",
                BACKEND_APP_SCOPE: [
                    "api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write",
                ],
            }
        default:
            throw new Error(`Unknown env '${env}'`)
    }
}
