
'use strict'

import { patch } from 'picodom'

import app from './paperapp'
import * as actions from './actions'
import * as views from './views'

let old

const appActions = app({
  actions,
  views,
  render (views) {
    const node = views.App()
    // patch(document.body, old, node)
    patch(document.body, node)
    old = node
  }
})

appActions.Overlay.init()
appActions.Router.init()
