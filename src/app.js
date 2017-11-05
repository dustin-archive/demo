'use strict'

import { h, app } from 'hyperapp'

import { OverlayModule } from './modules/OverlayModule'
import { RouterModule } from './modules/RouterModule'

import { Code } from './views/Code'
import { Drop } from './views/Drop'
import { Nav } from './views/Nav'
import { Router } from './views/Router'
import { Search } from './views/Search'

const hyperapp = app({
  modules: {
    OverlayModule,
    RouterModule
  },
  actions: {
    Code,
    Drop,
    Nav,
    Router,
    Search
  },
  view: (state, actions) =>
    h('div', null, [
      actions.Search(),
      actions.Nav(),
      actions.Router(),
      h('br', null, null),
      actions.Drop('foo')(
        h('div', null, 'foo')
      ),
      actions.Drop('bar')(
        h('div', null, 'bar')
      ),
      actions.Drop('baz')(
        h('div', null, 'baz')
      ),
      actions.Drop('qux')(
        h('div', null, 'qux')
      ),
      h('br', null, null),
      actions.Code(state)
    ])
})

hyperapp.OverlayModule.init()
hyperapp.RouterModule.init()
