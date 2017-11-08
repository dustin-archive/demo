import { h } from '../h'

const App = (state, actions, views) =>
  h('div', null, [
    views.Search(),
    views.Nav(),
    views.Router(),
    h('br', null, null),
    views.Drop('foo')(
      h('div', null, 'foo')
    ),
    views.Drop('bar')(
      h('div', null, 'bar')
    ),
    views.Drop('baz')(
      h('div', null, 'baz')
    ),
    views.Drop('qux')(
      h('div', null, 'qux')
    ),
    h('br', null, null),
    views.Code(state)
  ])

export { App }
