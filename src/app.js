'use strict'

import { h, app } from 'hyperapp'
import { Router } from './Router'
import { RouterView } from './RouterView'

const NavLink = (href, value) => h('li', null, [
  h('a', { href }, value)
])

const Nav = (state, actions) =>
  h('ul', null, [
    NavLink('#/', 'home'),
    NavLink('#/404', 'not found'),
    NavLink('#/about', 'about'),
    NavLink('#/catalog', 'catalog'),
    NavLink('#/contact', 'contact'),
    NavLink('#/dashboard', 'dashboard'),
    NavLink('#/foobar', 'foobar'),
    NavLink('#/inventory', 'inventory'),
    NavLink('#/post', 'post'),
    NavLink('#/profile', 'profile'),
    NavLink('#/settings', 'settings'),
    NavLink('#/update', 'update')
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
