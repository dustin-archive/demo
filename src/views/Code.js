import { h } from 'picodom'

const style = {
  whiteSpace: 'pre'
}

const Code = (state, actions, data) =>
  h('div', { style }, JSON.stringify(data, null, '  '))

export { Code }
