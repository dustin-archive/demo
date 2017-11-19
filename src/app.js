
import { patch } from 'picodom'

import app from './paperapp'

import * as stores from './stores'
import * as views from './views'

// let node

const render = views => {
  // patch(document.body, node, (node = views.App()))
  patch(document.body, views.App())
}

const paper = app({ stores, views, render })

paper.Overlay.init()
paper.Router.init()
