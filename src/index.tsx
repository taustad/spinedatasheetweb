import { registerApp as registerLegacy } from "@equinor/fusion"
import { createComponent } from "@equinor/fusion-framework-react-app"

import AppComponent from "./AppComponent"
import { configurator } from "./config"

declare let module: NodeModule
interface NodeModule {
    hot: any
}
registerLegacy("spinedatasheet", {
  render: createComponent(AppComponent, configurator),
  AppComponent,
})

if (module.hot) {
  module.hot.accept()
}
