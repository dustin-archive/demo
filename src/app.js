'use strict'

import { h, app } from 'hyperapp'
import { Router } from './Router'
import { RouterView } from './RouterView'

const Nav = (state, actions) =>
  h('ul', null, [
    h('li', null, [
      h('a', { href: '#/about' }, 'about')
    ]),
    h('li', null, [
      h('a', { href: '#/contact' }, 'contact')
    ]),
    h('li', null, [
      h('a', { href: '#/dashboard' }, 'dashboard'),
      h('ul', null, [
        h('li', null, [
          h('a', { href: '#/dashboard' }, 'dashboard profile')
        ]),
        h('li', null, [
          h('a', { href: '#/dashboard' }, 'dashboard listings')
        ]),
        h('li', null, [
          h('a', { href: '#/dashboard' }, 'dashboard settings')
        ])
      ])
    ]),
    h('li', null, [
      h('a', { href: '#/404' }, 'not found')
    ])
  ])

const hyperapp = app({
  modules: { Router },
  view: (state, actions) =>
    h('div', null, [
      Nav(state, actions),
      h('br'),
      RouterView(state, actions)
    ])
})

// Subscriptions
hyperapp.Router.init()
