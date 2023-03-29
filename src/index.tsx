import { Context, ContextTypes, registerApp } from "@equinor/fusion"
import AppComponent from './AppComponent';
import { ModuleRegistry } from '@ag-grid-community/core'
import { createLegacyApp } from "@equinor/fusion-framework-react-app"
import { enableAgGrid } from "@equinor/fusion-framework-module-ag-grid"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'
import { LicenseManager } from "ag-grid-enterprise"

ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);

// @ts-ignore
if (window.Fusion?.modules?.agGrid?.licenseKey) {
  // @ts-ignore
  LicenseManager.setLicenseKey(window.Fusion?.modules?.agGrid?.licenseKey)
}

registerApp("spinedatasheet", {
  name: "Spine data sheets",
  AppComponent: createLegacyApp(AppComponent, (config) => enableAgGrid(config)),
  context: {
    types: [ContextTypes.ProjectMaster],
    buildUrl: (context: Context | null) => {
      console.log("context in buildUrl", context)
      return context ? `/${context.id}` : ""
    },
    getContextFromUrl: (url: string) => {
      console.log("url in getContextFromUrl", url)
      return url.split("/")[1]
    },
  },
})

if (module.hot) {
  module.hot.accept();
}
