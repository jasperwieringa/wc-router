import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connectRouter } from 'lit-redux-router';
import { setBasePath } from '@arc-web/components/dist/utilities/base-path.js';
import { store } from './utils/store.js';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

import './components/App.js';

connectRouter(store);
setBasePath('./src/');

@customElement('air-component')
export class Air extends LitElement {
  render() {
    return html` <air-app></air-app> `;
  }
}
