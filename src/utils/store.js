import { map } from "nanostores"
import { bag } from "./bag"
import { funnelDefs } from "./funnelDefs"

const state = map({
  clicks: 0,
  pick: "bada55",
  sample: [],
})

const saveState = () => {
  const { pick, sample, clicks } = state.get()

  bag.store({ pick, sample, clicks })
}

const init = () => {
  const data = bag.get()

  if (data) {
    const { pick, sample, clicks } = data

    state.setKey("pick", pick)
    state.setKey("sample", sample)
    state.setKey("clicks", clicks)
  }
}

const refresh = () => {
  const clicks = state.get().clicks
  const count = clicks + 1
  const list = funnelDefs.map(() => {
    return Math.floor(Math.random() * 100)
  })

  state.setKey("clicks", count)
  state.setKey("sample", [...list])

  saveState()
}

const reset = () => {
  state.setKey("clicks", 0)
  state.setKey("sample", [])

  saveState()
}

const setPick = (value) => {
  state.setKey("pick", value)

  saveState()
}

const actions = {
  init,
  refresh,
  reset,
  setPick,
}

export { actions, state }
export default state
