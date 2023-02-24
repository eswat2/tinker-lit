import { html } from "lit"
import { iconRefreshFC, iconCloseFC, iconChevronDoubleLeftFC } from "./icons"
import { actions } from "../utils"

const HELP = "click a button..."

const controlsFC = (props) => {
  const { clicks } = props || {}

  return html`
    <div class="mb-10px mt-3 flex items-center">
      <button
        aria-label="Refresh"
        title="Refresh"
        class="ds1-button data-button bg-clrs-blue"
        @click=${() => {
          actions.refresh()
        }}
      >
        ${iconRefreshFC()}
      </button>
      <button
        aria-label="Reset"
        title="Reset"
        class="ds1-button data-button bg-clrs-red"
        @click=${() => {
          actions.reset()
        }}
      >
        ${iconCloseFC()}
      </button>
      <span class="flex items-center">
        ${iconChevronDoubleLeftFC({ size: 28 })}
        <span class="italic">
          ${HELP}
          <sup>${clicks}</sup>
        </span>
      </span>
    </div>
  `
}

export { controlsFC }
export default controlsFC
