import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

const logo = new URL('../../../assets/arup-logo-red.svg', import.meta.url).href;

export class ArcNavbar extends LitElement {
  static tag = 'arc-navbar';

  static styles = css``;

  @property({ type: String }) position = '';

  @property({ type: String }) logo = logo;

  @property({ type: String }) title = 'ARC';

  @property({ type: String }) label = 'Web-Components';

  render() {
    return html`
      <div>
        <img src='${this.logo}' alt='Logo'>
      </div>
    `;
  }
}
