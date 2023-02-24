import { html } from "lit"
import { colorPickFC } from "./color-pick-fc"
import { colorNames } from "../utils"

const colorsFC = (props) => {
  const { pick } = props

  return html`
    <div class="flex flex-wrap" role="radiogroup">
      ${colorNames.map((key) => colorPickFC({ pick: pick, value: key }))}
    </div>
  `
}

export { colorsFC }
export default colorsFC
