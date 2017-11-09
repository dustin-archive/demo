import { h } from 'picodom'

const Code = (_, data) =>
  h('div', {
    style: {
      whiteSpace: 'pre'
    }
  }, JSON.stringify(data, null, '  '))

export { Code }
