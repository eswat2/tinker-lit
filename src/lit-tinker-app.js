import { LitElement, css, html, unsafeCSS } from "lit"
import {
  eswat2FC,
  colorsFC,
  controlsFC,
  headerFC,
  valuesFC,
} from "./components"
import appStyles from "./styles/app.css?raw"
import { StoreController } from "@nanostores/lit"
import { actions, state } from "./utils"

export class LitTinkerApp extends LitElement {
  sc = new StoreController(this, state)

  constructor() {
    super()

    actions.init()
  }

  render() {
    // console.log('-- render', this.clicks, this.pick, this.sample)

    return html`
      <div class="ds1-main">
        ${eswat2FC()} ${headerFC()}
        ${controlsFC({ clicks: this.sc.value.clicks })}
        ${colorsFC({ pick: this.sc.value.pick })}
        <hr class="ml-0 mr-0" />
        ${valuesFC({
          pick: this.sc.value.pick,
          sample: this.sc.value.sample,
        })}
      </div>
    `
  }

  static get styles() {
    return css`
      ${unsafeCSS(appStyles)}
    `
  }
}

window.customElements.define("lit-tinker-app", LitTinkerApp)
