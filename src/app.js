'use strict'

import { h, app } from 'hyperapp'

import { OverlayStore } from './modules/OverlayStore'
import { RouterStore } from './modules/RouterStore'

import { Code } from './views/Code'
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
      Code(JSON.stringify(state, null, '  '))
    ])
})

// Subscriptions
hyperapp.OverlayStore.init()
hyperapp.RouterStore.init()
