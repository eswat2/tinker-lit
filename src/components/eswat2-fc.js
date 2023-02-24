import { html } from "lit"
import { iconFingerprintFC } from "./icons"

const url = "https://eswat2.github.io"
const who = "eswat2"

const eswat2FC = (_props) => {
  return html`
    <a
      class="text-clrs-gray hover:text-clrs-navy absolute top-8 right-8"
      href=${url}
      aria-label=${who}
      target="blank"
      title=${who}
    >
      ${iconFingerprintFC()}
    </a>
  `
}

export { eswat2FC }
export default eswat2FC
