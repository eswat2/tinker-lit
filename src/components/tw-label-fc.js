import { html } from "lit"
import { TW_VERSION } from "../utils"

const twLabelFC = (_props) => {
  return html`
    <label class="text-clrs-slate4 ml-auto align-top text-xs italic">
      Tailwind ${TW_VERSION}
    </label>
  `
}

export { twLabelFC }
export default twLabelFC
