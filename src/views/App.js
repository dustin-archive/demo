import { h } from 'picodom'

const App = (state, actions, views, data) => {
  console.log(state, actions, views, data)
  return h('div', null, [
    h('div', null, 'howdy'),
    h('br'),
    views.Code(state)
    // views.Search(),
    // views.Nav(),
    // views.Router(),
    // h('br', null, null),
    // views.Drop('foo')(
    //   h('div', null, 'foo')
    // ),
    // views.Drop('bar')(
    //   h('div', null, 'bar')
    // ),
    // views.Drop('baz')(
    //   h('div', null, 'baz')
    // ),
    // views.Drop('qux')(
    //   h('div', null, 'qux')
    // ),
  ])
}

export { App }
