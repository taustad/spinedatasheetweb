import { ContextTypes, registerApp } from '@equinor/fusion';
import AppComponent from './AppComponent';

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
