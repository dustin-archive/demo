const Overlay = {
  state: {
    overlay: null
  },
  actions: {
    init ({ actions }) {
      window.addEventListener('click', e =>
        !e.target.classList.contains('_overlay') && actions.reset())
    },
    reset: _ => ({
      overlay: null
    }),
    toggle: ({ state: overlay }, data) => ({
      overlay: overlay === data ? null : data
    })
  }
}

export { Overlay }
