import { LitElement, html } from 'lit';
import { connectRouter } from 'lit-redux-router';
import { store } from './utils/store.js';

connectRouter(store);

class Air extends LitElement {
  render() {
    return html`
      <div class="app-content">
        <lit-route path="/" component="air-registration"></lit-route>
        <lit-route path="/projects" component="air-projects"></lit-route>
        <lit-route
          path="/deliverables"
          component="air-deliverables"
        ></lit-route>
        <lit-route path="/objects" component="air-objects"></lit-route>
        <lit-route path="/report" component="air-report"></lit-route>
        <lit-route>404</lit-route>
      </div>
    `;
  }
}
customElements.define('air-component', Air);
