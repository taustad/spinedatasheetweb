import { useCurrentUser, useFusionEnvironment } from "@equinor/fusion"
import React, { FC } from "react"
import { BrowserRouter } from "react-router-dom"
import { ModuleRegistry } from "@ag-grid-community/core"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel"
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel"
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection"
import { ClipboardModule } from "@ag-grid-enterprise/clipboard"
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter"
import { SetFilterModule } from "@ag-grid-enterprise/set-filter"
import { MenuModule } from "@ag-grid-enterprise/menu"
import AppRouter from "./AppRouter"
import { ResolveConfiguration } from "./api/environmentConfig"
import { buildConfig, StoreAppScope } from "./api/config"
import { ViewContextProvider } from "./Context/ViewContext"

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ColumnsToolPanelModule,
    FiltersToolPanelModule,
    RangeSelectionModule,
    ClipboardModule,
    MultiFilterModule,
    SetFilterModule,
    MenuModule,
])

const AppComponent: FC = () => {
    const fusionEnvironment = useFusionEnvironment()
    const basename = fusionEnvironment.env === "dev" ? "/" : "/apps/spinedatasheet"

    const currentUser = useCurrentUser()

    if (!currentUser) {
        return <div>User not logged in</div>
    }

    const config = ResolveConfiguration(fusionEnvironment.env)

    buildConfig(config.REACT_APP_API_BASE_URL)
    StoreAppScope(config.BACKEND_APP_SCOPE[0])

    const suppressConsoleError = (shouldBeHidden: (message: string) => boolean) => {
        const err = console.error
        console.error = (message?: any, ...optionalParams: any[]) => {
            if (typeof message === "string" && shouldBeHidden(message)) {
                return
            }
            err(message, ...optionalParams)
        }
    }

    suppressConsoleError((m) => m.startsWith("Warning: Invalid aria prop"))
    suppressConsoleError((m) => m.startsWith("*"))

    return (
        <ViewContextProvider>
            <BrowserRouter basename={basename}>
                <AppRouter />
            </BrowserRouter>
        </ViewContextProvider>
    )
}

export default AppComponent
