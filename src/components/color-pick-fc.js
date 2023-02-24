import { html } from "lit"
import { iconRadioOffFC, iconRadioOnFC } from "./icons"
import { namedColors, actions } from "../utils"

const colorPickFC = (props) => {
  const { pick, value } = props
  const hex = namedColors[value]
  const selected = value == pick

  return html`
    <div
      aria-label=${value}
      title=${value}
      role="radio"
      @click=${() => actions.setPick(value)}
    >
      ${selected ? iconRadioOnFC({ hex: hex }) : iconRadioOffFC({ hex: hex })}
    </div>
  `
}

export { colorPickFC }
export default colorPickFC
