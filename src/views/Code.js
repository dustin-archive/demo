import { h } from 'hyperapp'

const Code = data =>
  h('div', {
    style: {
      whiteSpace: 'pre'
    }
  }, JSON.stringify(data.state, null, '  '))

export { Code }
