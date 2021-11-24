import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ROUTES } from '../utils/routes.js';
import '@arc-web/components/dist/components/container/arc-container.js';
import '@arc-web/components/dist/components/navbar/arc-navbar.js';
import '@arc-web/components/dist/components/button/arc-button.js';
import '@arc-web/components/dist/components/spinner/arc-spinner.js';

import './pages/404.js';

@customElement('air-app')
export class App extends LitElement {
  render() {
    return html`
      <arc-container theme="light">
        <arc-navbar slot="nav" logo="./assets/arc-red.svg">
          ${Object.values(ROUTES).map(
            route => html`<arc-icon-button name="${route.icon}" href="${route.href}"></arc-icon-button>`
          )}
        </arc-navbar>
        <div class="app-content">
          ${Object.values(ROUTES).map(
            route => html`
              <lit-route
                path=${route.href}
                component=${route.component}
                .resolve=${() => import(`./pages/${route.name}.js`)}
                loading="arc-spinner"
              ></lit-route>
            `
          )}
          <lit-route><air-404></air-404></lit-route>
        </div>
        <arc-bottombar slot="bottom">
          ${Object.values(ROUTES).map(
            route => html`<arc-icon-button name="${route.icon}" href="${route.href}">${route.name}</arc-icon-button>`
          )}
        </arc-bottombar>
      </arc-container>
    `;
  }
}
