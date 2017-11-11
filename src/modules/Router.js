import { encode, decode } from '@whaaaley/query-string'

const Router = {
  state: {
    query: {},
    path: '/'
  },
  actions: {
    init: (s, actions) => {
      const update = actions.update
      update()
      window.addEventListener('hashchange', _ => update())
    },
    route: state => data => {
      window.location.hash = (data.path || state.path) + encode(data.query || state.query)
    },
    update: state => {
      const { hash } = window.location
      const index = hash.indexOf('?')
      return {
        query: decode(hash.slice(index)),
        path: hash.slice(1, index === -1 ? hash.length : index)
      }
    }
  }
}

export { Router }
