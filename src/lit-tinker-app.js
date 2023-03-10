import { LitElement, css, html, unsafeCSS } from "lit"
import {
  eswat2FC,
  colorsFC,
  controlsFC,
  headerFC,
  valuesFC,
} from "./components"
import appStyles from "./styles/app.css?raw"
import { actions, state } from "./utils"

export class LitTinkerApp extends LitElement {
  constructor() {
    super()

    actions.init()

    const { clicks, pick, sample } = state.get()

    this.clicks = clicks
    this.pick = pick
    this.sample = sample

    state.listen((value, key) => {
      if (this[key] != value[key]) {
        this[key] = value[key]

        this.requestUpdate()
      }
    })
  }

  render() {
    // console.log('-- render', this.clicks, this.pick, this.sample)

    return html`
      <div class="ds1-main">
        ${eswat2FC()} ${headerFC()} ${controlsFC({ clicks: this.clicks })}
        ${colorsFC({ pick: this.pick })}
        <hr class="ml-0 mr-0" />
        ${valuesFC({ pick: this.pick, sample: this.sample })}
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
