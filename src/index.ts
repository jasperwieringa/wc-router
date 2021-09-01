import { LitElement, html } from 'lit';
import { connectRouter } from 'lit-redux-router';
import { store } from './utils/store.js';

connectRouter(store);

class MyApp extends LitElement {
  render() {
    return html`
      <div class="app-content">
        <lit-route>Not foundzz</lit-route>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);
