import { html } from "lit"
import { twLabelFC } from "./tw-label-fc"

const valuesFC = (props) => {
  const { pick, sample } = props || {}
  const label = sample && sample.length > 0 ? sample.toString() : "..."

  return html`
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex">
          <span class="mr-10px font-bold">color:</span>
          <span class="text-clrs-slate4 italic">${pick}</span>
        </div>
        <div class="mt-5px flex">
          <span class="mr-10px font-bold">sample:</span>
          <span class="text-clrs-slate4 italic">${label}</span>
        </div>
      </div>
      ${twLabelFC()}
    </div>
  `
}

export { valuesFC }
export default valuesFC
