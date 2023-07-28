import { AppModuleInitiator } from "@equinor/fusion-framework-app"
import { enableAgGrid } from "@equinor/fusion-framework-module-ag-grid"
import { enableContext } from "@equinor/fusion-framework-module-context"
import { enableNavigation } from "@equinor/fusion-framework-module-navigation"

export const configurator: AppModuleInitiator = (config) => {
    enableAgGrid(config)
    config.useFrameworkServiceClient("portal")
    enableNavigation(
        config,
        window.location.pathname.match(/^\/?apps/)
            ? "/apps/spinedatasheet"
            : "/",
    )
    enableContext(config, (builder) => {
        builder.setContextType(["ProjectMaster"])
        builder.setContextFilter((items) => items.filter(
            (item) => item.title !== undefined
                && item.title
                    .toUpperCase()
                    .indexOf("SNØHVIT FUTURE PROJECT (SFP)") > -1,
        ))
    })
}
