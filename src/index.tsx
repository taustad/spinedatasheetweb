import { Context, ContextTypes, registerApp } from "@equinor/fusion"
import AppComponent from './AppComponent';
import { ModuleRegistry } from '@ag-grid-community/core'
import { createLegacyApp } from "@equinor/fusion-framework-react-app"
import { enableAgGrid } from "@equinor/fusion-framework-module-ag-grid"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'

ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);

registerApp("spinedatasheet", {
  AppComponent: createLegacyApp(AppComponent, (config) => enableAgGrid(config)),
  context: {
      types: [ContextTypes.ProjectMaster],
      buildUrl: (context: Context | null) => (context ? `/${context.id}` : ""),
      getContextFromUrl: (url: string) => url.split("/")[1],
  },
  name: "Spin data sheets",
})

if (module.hot) {
  module.hot.accept();
}
