import { html } from "lit"

const iconRadioOffFC = (props) => {
  const { hex = "currentColor", size = 24 } = props || {}

  return html`
    <svg width=${size} height=${size} viewBox="0 0 24 24">
      <g fill=${hex}>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        />
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  `
}

export { iconRadioOffFC }
export default iconRadioOffFC
