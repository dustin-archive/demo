
const Overlay = {
  state: {},
  actions: {
    blur: state => data => {
      if (!data.target.classList.contains('_overlay') && state.overlay != null) {
        return { overlay: null }
      }
    },
    toggle: state => data => ({
      overlay: state.overlay === data ? null : data
    })
  }
}

export { Overlay }
