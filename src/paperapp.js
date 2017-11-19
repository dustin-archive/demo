
export default ({ actions: scopes, views, render }) => {
  const appState = {}
  const appActions = {}
  const appViews = {}

  for (let name in scopes) {
    const state = appState[name] = {}
    const actions = appActions[name] = {}
    const scope = scopes[name]

    for (let action in scope) {
      actions[action] = data => {
        const updates = scope[action](state, actions, data)

        for (let update in updates) {
          appState[name][update] = updates[update]
        }

        render(appViews)
      }
    }
  }

  for (let view in views) {
    appViews[view] = data => views[view](appState, appActions, appViews, data)
  }

  render(appViews)

  return appActions
}
