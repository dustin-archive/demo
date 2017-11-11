import { h } from 'hyperapp'

const Drop = (data, children) =>
  h('div', {
    class: 'drop _overlay'
  }, [
    h('button', {
      onclick (e) {
        e.stopPropagation()
        data.toggle(data.name)
      }
    }, data.name),
    h('div', {
      class: 'drop-region',
      style: data.overlay !== data.name && {
        display: 'none'
      }
    }, children)
  ])

export { Drop }
