import { h } from 'hyperapp'

const style = {
  whiteSpace: 'pre'
}

const Code = code => h('div', { style }, code)

export { Code }
