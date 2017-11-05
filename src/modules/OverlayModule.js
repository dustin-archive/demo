const { addEventListener } = window

const OverlayModule = {
  state: {
    overlay: null
  },
  actions: {
    init (_, { reset }) {
      addEventListener('click', e =>
        !e.target.classList.contains('_overlay') && reset())
    },
    reset: _ => ({
      overlay: null
    }),
    toggle: ({ overlay }, _, data) => ({
      overlay: overlay === data ? null : data
    })
  }
}

export { OverlayModule }
