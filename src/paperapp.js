import { patch } from 'picodom'

// const { log } = console

export default ({ stores, views, init }) => {
  let appState = {}
  const appActions = {}
  const appViews = {}

  // const set = state => {
  //   Object.assign(appState, state)
  //   patch(document.body, appViews.App())
  // }

  for (let store in stores) {
    const { state, actions } = stores[store]

    // const appStateStore = appState[store] = state
    appState[store] = state
    const appActionsStore = appActions[store] = {}

    for (let action in actions) {
      appActionsStore[action] = data => {
        // console.log('i should only be called when an action is called')

        console.log(appState.Router.path)

        appState = Object.assign({}, appState, actions[action](state, actions, data))

        console.log(appState.Router.path)

        patch(document.body, appViews.App())

        // return actions[action](state, actions, data)
      }
    }
  }

  for (let view in views) {
    appViews[view] = data => views[view](appState, appActions, appViews, data)
  }

  patch(document.body, appViews.App())

  // init && init(appState, appActions)
  init(appState, appActions)

  // log('state', appState)
  // log('actions', appActions)
}
