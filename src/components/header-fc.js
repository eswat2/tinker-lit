import { html } from "lit"

const headerFC = (props) => {
  const { label = "tinker lit" } = props || {}

  return html` <h1 class="ds1-header">${label}</h1> `
}

export { headerFC }
export default headerFC
