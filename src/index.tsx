import { Context, ContextTypes, registerApp } from "@equinor/fusion"
import AppComponent from './AppComponent';
import { createLegacyApp } from "@equinor/fusion-framework-react-app"
import { enableAgGrid } from "@equinor/fusion-framework-module-ag-grid"
import { LicenseManager } from "ag-grid-enterprise"


// @ts-ignore
if (window.Fusion?.modules?.agGrid?.licenseKey) {
  // @ts-ignore
  LicenseManager.setLicenseKey(window.Fusion?.modules?.agGrid?.licenseKey)
}

registerApp("spinedatasheet", {
  name: "Spine data sheets",
  AppComponent: createLegacyApp(AppComponent, (config) => enableAgGrid(config)),
  context: {
    buildUrl: (context: Context | null) => (context ? `/${context.id}` : ""),
    getContextFromUrl: (url: string) => url.split("/")[1],
    types: [ContextTypes.ProjectMaster],
    nullable: false,
    filterContexts: (context: Array<Context>) => {
      return context.filter((x) => x.title.toUpperCase().indexOf("SNØHVIT FUTURE PROJECT (SFP)") > -1);
    },
  },
})

if (module.hot) {
  module.hot.accept();
}
