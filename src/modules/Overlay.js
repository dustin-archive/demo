const Overlay = {
  state: {},
  actions: {
    init: (s, actions) => {
      const reset = actions.reset
      window.addEventListener('click', e =>
        !e.target.classList.contains('_overlay') && reset())
    },
    reset: s => ({
      overlay: null
    }),
    toggle: state => data => ({
      overlay: state.overlay === data ? null : data
    })
  }
}

export { Overlay }
