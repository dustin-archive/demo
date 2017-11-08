import { patch } from 'picodom'

const { log } = console

export default ({ stores, views, init }) => {
  const appState = {}
  const appActions = {}
  const appViews = {}

  for (let store in stores) {
    const { state, actions } = stores[store]

    appState[store] = state
    const appActionsStore = appActions[store] = {}

    for (let action in actions) {
      appActionsStore[action] = data => actions[action](state, actions, data)
    }
  }

  for (let view in views) {
    appViews[view] = data => views[view](appState, appActions, appViews, data)
  }

  patch(document.body, appViews.App(appState, appActions, appViews))

  // init && init(appState, appActions)
  init(appState, appActions)

  log('state', appState)
  log('actions', appActions)
}
