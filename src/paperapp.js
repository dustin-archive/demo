import { patch } from 'picodom'

export default ({ stores, views, init }) => {
  const appState = {}
  const appActions = {}
  const appViews = {}

  for (let store in stores) {
    const { state, actions } = stores[store]

    const stateStore = appState[store] = state
    const actionsStore = appActions[store] = {}

    for (let action in actions) {
      actionsStore[action] = data => {
        const updates = actions[action](stateStore, actionsStore, data)

        for (let update in updates) {
          appState[store][update] = updates[update]
        }

        patch(document.body, appViews.App())
      }
    }
  }

  for (let view in views) {
    appViews[view] = data => views[view](appState, appActions, appViews, data)
  }

  patch(document.body, appViews.App())

  init && init(appState, appActions)
}
