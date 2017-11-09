import { h } from 'picodom'

const App = (state, actions, views, data) => {
  return h('div', null, [
    h('div', null, 'howdy'),
    h('button', {
      onclick () {
        actions.Router.route({
          path: '/foo'
        })
      }
    }, 'foo'),
    h('button', {
      onclick () {
        actions.Router.route({
          path: '/bar'
        })
      }
    }, 'bar'),
    views.Code(state)
  ])
}

export { App }
