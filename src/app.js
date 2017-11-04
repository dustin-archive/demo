'use strict'

import { h, app } from 'hyperapp'

import { Router } from './Router'
import { RouterView } from './RouterView'

import { Nav } from './views/Nav'

const hyperapp = app({
  modules: { Router },
  view: (state, actions) =>
    h('div', null, [
      Nav(),
      RouterView(state),
      h('div', null, JSON.stringify(state))
    ])
})

// Subscriptions
hyperapp.Router.init()
