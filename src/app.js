'use strict'

import { h, app } from 'hyperapp'

import { OverlayStore } from './modules/OverlayStore'
import { RouterStore } from './modules/RouterStore'

import { Code } from './views/Code'
import { Drop } from './views/Drop'
import { Router } from './views/Router'
import { Nav } from './views/Nav'

const Drops = (state, actions) =>
  h('div', null, [
    Drop(state, actions, 'foo', [
      h('div', null, 'foo')
    ]),
    Drop(state, actions, 'bar', [
      h('div', null, 'bar')
    ]),
    Drop(state, actions, 'baz', [
      h('div', null, 'baz')
    ]),
    Drop(state, actions, 'qux', [
      h('div', null, 'qux')
    ])
  ])

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
      Drops(state, actions),
      h('br', null, null),
      Code(JSON.stringify(state, null, '  '))
    ])
})

hyperapp.OverlayStore.init()
hyperapp.RouterStore.init()
