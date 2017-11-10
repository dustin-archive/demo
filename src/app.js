'use strict'

import { h, app } from 'hyperapp'

import { Cake } from './modules/Cake'
import { OverlayModule } from './modules/OverlayModule'
import { RouterModule } from './modules/RouterModule'

import { Code } from './views/Code'
import { Drop } from './views/Drop'
import { Nav } from './views/Nav'
import { Router } from './views/Router'
import { Search } from './views/Search'

const hyperapp = app({
  state: {
    Cake: Cake.state,
    OverlayModule: OverlayModule.state,
    RouterModule: RouterModule.state
  },
  actions: {
    Cake: Cake.actions,
    OverlayModule: OverlayModule.actions,
    RouterModule: RouterModule.actions,
    Code,
    Drop,
    Nav,
    Router,
    Search
  },
  view: (state, actions) =>
    h('div', null, [
      h('button', {
        onclick () {
          actions.Cake.add({
            loading: true
          })
        }
      }, 'loading is true'),
      h('br'),
      h('br'),
      h('button', {
        onclick () {
          actions.Cake.add({
            loading: false
          })
        }
      }, 'loading is false')
      // h('br'),
      // actions.Nav(),
      // actions.Router(),
      // h('br'),
      // actions.Drop('foo')(
      //   h('div', null, 'foo')
      // ),
      // actions.Drop('bar')(
      //   h('div', null, 'bar')
      // ),
      // actions.Drop('baz')(
      //   h('div', null, 'baz')
      // ),
      // actions.Drop('qux')(
      //   h('div', null, 'qux')
      // ),
      // h('br'),
      // actions.Code(state)
    ])
})

hyperapp.OverlayModule.init()
hyperapp.RouterModule.init()
