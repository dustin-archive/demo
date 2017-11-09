const Overlay = {
  state: {
    overlay: null
  },
  actions: {
    init ({ actions }) {
      window.addEventListener('click', e =>
        !e.target.classList.contains('_overlay') && actions.reset())
    },
    reset: () => ({
      overlay: null
    }),
    toggle: ({ state }, data) => ({
      overlay: state.overlay === data ? null : data
    })
  }
}

export { Overlay }
