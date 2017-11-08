import { h } from '../h'

const Drop = (state, actions, data) => _ => children =>
  h('div', {
    class: 'drop _overlay'
  }, [
    h('button', {
      onclick (e) {
        e.stopPropagation()
        actions.OverlayModule.toggle(data)
      }
    }, data),
    h('div', {
      class: 'drop-region',
      style: state.OverlayModule.overlay !== data && {
        display: 'none'
      }
    }, children)
  ])

export { Drop }
