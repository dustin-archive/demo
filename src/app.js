'use strict'

import { app } from 'hyperapp'
import { Router } from './Router'
import { RouterView } from './RouterView'

app({
  modules: { Router },
  view: (state, actions) => RouterView(state, actions)
})
