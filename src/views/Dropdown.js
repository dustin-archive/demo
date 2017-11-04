import { h } from 'hyperapp'

const Dropdown = ({ overlay, toggle, name }, children) =>
  h('div', {
    class: 'dropdown _overlay'
  }, [
    h('button', {
      onclick (e) {
        e.stopPropagation()
        toggle(name)
      }
    }, name),
    h('div', {
      class: 'dropdown-region',
      style: overlay !== name && {
        display: 'none'
      }
    }, children)
  ])

export { Dropdown }
