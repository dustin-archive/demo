import { h } from '../h'

const style = {
  whiteSpace: 'pre'
}

const Code = (state, actions, data) => _ => h('div', { style }, JSON.stringify(data, null, '  '))

export { Code }
