import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('air-404')
export class FourOFour extends LitElement {
  static styles = css``;

  render() {
    return html` <div>Sorry, we could not find that page!</div> `;
  }
}
