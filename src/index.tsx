import { ContextTypes, registerApp } from '@equinor/fusion';
import AppComponent from './AppComponent';
import { ModuleRegistry } from '@ag-grid-community/core'
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import '@ag-grid-community/styles/ag-grid.css'
import '@ag-grid-community/styles/ag-theme-alpine.css'

ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);

registerApp('spinedatasheet', {
  AppComponent,
  context: {
    types: [ContextTypes.ProjectMaster],
    placeholder: 'Search project'
  }
});

if (module.hot) {
  module.hot.accept();
}
