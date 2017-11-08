export default ({ stores, views, init }) => {
  const state = {}
  const actions = {}

  for (let store in stores) {
    const { state: s, actions: a } = store
    state[s] = stores[s]
    actions[a] = stores[a]
  }

  init()
}
