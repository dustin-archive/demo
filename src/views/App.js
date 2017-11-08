import { h } from 'picodom'

const App = (state, actions, views, data) => {
  return h('div', null, [
    h('div', null, 'howdy'),
    h('br'),
    views.Code(state)
  ])
}

export { App }
