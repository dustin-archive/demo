'use strict'

import { h, app } from 'hyperapp'

import { Cake } from './modules/Cake'
import { Overlay } from './modules/Overlay'
import { Router } from './modules/Router'

import { Code } from './views/Code'
import { Drop } from './views/Drop'
import { Nav } from './views/Nav'
import { RouterView } from './views/RouterView'
// import { Search } from './views/Search'

const hyperapp = app({
  state: {
    Cake: Cake.state,
    Overlay: Overlay.state,
    Router: Router.state
  },
  actions: {
    Cake: Cake.actions,
    Overlay: Overlay.actions,
    Router: Router.actions
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
      h('button', {
        onclick () {
          actions.Cake.add({
            loading: false
          })
        }
      }, 'loading is false'),
      h('br'),
      Nav(),
      RouterView({
        path: state.Router.path
      }),
      h('br'),
      Drop({
        name: 'foo',
        overlay: state.Overlay.overlay,
        toggle: actions.Overlay.toggle
      }, [
        h('div', null, 'foo')
      ]),
      Drop({
        name: 'bar',
        overlay: state.Overlay.overlay,
        toggle: actions.Overlay.toggle
      }, [
        h('div', null, 'bar')
      ]),
      Drop({
        name: 'baz',
        overlay: state.Overlay.overlay,
        toggle: actions.Overlay.toggle
      }, [
        h('div', null, 'baz')
      ]),
      Drop({
        name: 'qux',
        overlay: state.Overlay.overlay,
        toggle: actions.Overlay.toggle
      }, [
        h('div', null, 'qux')
      ]),
      Code({
        state
      })
    ])
})

hyperapp.Overlay.init()
hyperapp.Router.init()
