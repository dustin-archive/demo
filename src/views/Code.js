import { h } from 'picodom'

const style = {
  whiteSpace: 'pre'
}

const Code = (state, actions, views, data) =>
  h('div', { style }, JSON.stringify(data, null, '  '))

export { Code }
