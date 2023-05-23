import { registerApp as registerLegacy } from '@equinor/fusion';
import { createComponent } from '@equinor/fusion-framework-react-app';

import AppComponent from './AppComponent';
import { configurator } from './config';

registerLegacy('spinedatasheet', {
  render: createComponent(AppComponent, configurator),
  AppComponent,
});

if (module.hot) {
  module.hot.accept()
}
