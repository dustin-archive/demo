import { h } from 'picodom'

const App = ({ state, actions, views }, data) => {
  const { route } = actions.Router
  const { Code, Drop } = views

  return h('div', null, [
    h('h1', null, 'Router:'),
    h('button', {
      onclick () {
        route({ path: '/foo', query: { foo: 'bar' } })
      }
    }, 'foo'),
    h('br'),
    h('button', {
      onclick () {
        route({ path: '/baz', query: { qux: 'corge' } })
      }
    }, 'baz'),
    h('br'),
    h('h1', null, 'Drop:'),
    Drop('one')(
      h('div', null, 'one')
    ),
    Drop('two')(
      h('div', null, 'two')
    ),
    Drop('three')(
      h('div', null, 'three')
    ),
    h('br'),
    h('h1', null, 'State:'),
    Code(state)
  ])
}

export { App }
