
'use strict'

import { patch } from 'picodom'

import app from './paperapp'
import * as stores from './stores'
import * as views from './views'

const actions = app({
  stores,
  views,
  render (views) {
    patch(document.body, views.App())
  }
})

actions.Overlay.init()
actions.Router.init()
