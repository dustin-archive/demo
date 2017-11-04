'use strict'

import { h, app } from 'hyperapp'

import { OverlayStore } from './modules/OverlayStore'
import { RouterStore } from './modules/RouterStore'

import { Code } from './views/Code'
import { Drop } from './views/Drop'
import { Router } from './views/Router'
import { Nav } from './views/Nav'

const hyperapp = app({
  modules: {
    OverlayStore,
    RouterStore
  },
  view: (state, actions) =>
    h('div', null, [
      Nav(),
      Router(state),
      h('br', null, null),
      Drop('foo', [
        h('div', null, 'foo')
      ]),
      Drop('bar', [
        h('div', null, 'bar')
      ]),
      Drop('baz', [
        h('div', null, 'baz')
      ]),
      h('br', null, null),
      Code(JSON.stringify(state, null, '  '))
    ])
})

hyperapp.OverlayStore.init()
hyperapp.RouterStore.init()

export default hyperapp
