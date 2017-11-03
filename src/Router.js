import { encode, decode } from '@whaaaley/query-string'

const Router = {
  state: {
    query: {},
    path: '/'
  },
  actions: {
    update () {
      const { hash } = window.location
      const index = hash.indexOf('?')
      return {
        query: decode(hash.slice(index)),
        path: hash.slice(1, index === -1 ? hash.length : index)
      }
    },
    route (state, _, { path, query }) {
      window.location.hash = (path || state.path) + encode(query || state.query)
    },
    init (_, { update }) {
      update()
      window.onhashchange = _ => update()
    }
  }
}

export { Router }
