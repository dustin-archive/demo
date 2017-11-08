import { patch } from 'picodom'

const { log } = console

export default ({ stores, views, init }) => {
  log(init)

  const appState = {}
  const appActions = {}
  const appViews = {}

  for (let store in stores) {
    const { state, actions } = stores[store]

    appState[store] = state

    for (let action in actions) {
      appActions[store] = data => actions[action](state, actions, data)
    }
  }

  for (let view in views) {
    appViews[view] = data => views[view](appState, appActions, data)
  }

  patch(document.body, appViews.App(appState, appActions, appViews))

  // init && init(appState, appActions)
  init(appState, appActions)

  log('state', appState)
  log('actions', appActions)
}
