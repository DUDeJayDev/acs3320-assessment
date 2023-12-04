import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ticker-tape')
export class TickerTape extends LitElement {
  
  static styles = css`
    :host {
      display: block;
      overflow: hidden;
      white-space: nowrap;
    }
    
    div {
      display: inline-block;
      animation: marquee 10s linear infinite;
    }

    @keyframes marquee {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(-100%);
      }
    }`

  override render() {
    return html`<div><slot></slot></div>`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'ticker-tape': TickerTape;
  }
}