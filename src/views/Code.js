import { h } from 'hyperapp'

const style = {
  whiteSpace: 'pre'
}

const Code = s => data => h('div', { style }, JSON.stringify(data, null, '  '))

export { Code }
