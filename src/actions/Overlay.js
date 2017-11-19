
var Overlay = {
  init: function (s, actions) {
    window.addEventListener('click', function (e) {
      !e.target.classList.contains('_overlay') && actions.reset()
    })
  },
  reset: function () {
    return {
      overlay: null
    }
  },
  toggle: function (state, a, data) {
    return {
      overlay: state.overlay === data ? null : data
    }
  }
}

export { Overlay }
