import { h } from 'hyperapp'

const Drop = (state, actions, data, children) =>
  h('div', {
    class: 'drop _overlay'
  }, [
    h('button', {
      onclick (e) {
        e.stopPropagation()
        actions.OverlayStore.toggle(data)
      }
    }, data),
    h('div', {
      class: 'drop-region',
      style: state.OverlayStore.overlay !== data && {
        display: 'none'
      }
    }, children)
  ])

export { Drop }
