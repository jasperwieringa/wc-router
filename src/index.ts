import { LitElement, html } from 'lit';
import { connectRouter } from 'lit-redux-router';
import { store } from './utils/store.js';

import { AirLoader } from './components/common/loader/AirLoader.js';

connectRouter(store);

class Air extends LitElement {
  render() {
    return html`
      <div>
        <a href="/">home</a>
        <a href="/login">login</a>
        <a href="/projects">projects</a>
        <a href="/deliverables">deliverables</a>
        <a href="/objects">objects</a>
      </div>
      <div class="app-content">
        <lit-route
          path="/"
          component="air-core"
          .resolve="${() => import('./components/air-core.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route
          path="/login"
          component="air-login"
          .resolve="${() => import('./components/registration/air-login.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route
          path="/projects"
          component="air-projects"
          .resolve="${() => import('./components/projects/air-projects.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route
          path="/deliverables"
          component="air-deliverables"
          .resolve="${() =>
            import('./components/deliverables/air-deliverables.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route
          path="/objects"
          component="air-objects"
          .resolve="${() => import('./components/objects/air-objects.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route
          path="/report"
          component="air-report"
          .resolve="${() => import('./components/report/air-report.js')}"
          loading="${AirLoader.tag}"
        ></lit-route>
        <lit-route>404</lit-route>
      </div>
    `;
  }
}
customElements.define('air-component', Air);
