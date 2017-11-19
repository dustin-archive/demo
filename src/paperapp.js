export default function (app) {
  var state = {}
  var stores = {}
  var views = {}

  for (var store in app.stores) {
    var local = state[store] = {}
    var actions = app.stores[store]

    for (var action in actions) {
      app.stores[store][action] = function (data) {
        var updates = app.stores[store][action](local, actions, data)

        for (let update in updates) {
          state[store][update] = updates[update]
        }

        app.render(views)
      }
    }
  }

  for (var view in app.views) {
    views[view] = function (data) {
      app.views[view](state, stores, views, data)
    }
  }

  app.render(views)

  return actions
}
