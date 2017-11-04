const { addEventListener } = window

const OverlayStore = {
  state: {
    overlay: null
  },
  actions: {
    init () {
      addEventListener('click', e => {
        if (!e.target.classList.contains('_overlay')) {
          return { overlay: null }
        }
      })
    },
    toggle: ({ overlay }, _, name) => ({
      overlay: overlay === name ? null : name
    })
  }
}

export { OverlayStore }
