const Overlay = {
  state: {
    overlay: null
  },
  actions: {
    init (_, { reset }) {
      window.addEventListener('click', e =>
        !e.target.classList.contains('_overlay') && reset())
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
