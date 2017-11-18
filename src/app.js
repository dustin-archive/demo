'use strict'

import app from './paperapp'
import * as stores from './stores'
import * as views from './views'

const actions = app({
  stores,
  views
})

actions.Overlay.init()
actions.Router.init()
