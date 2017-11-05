import { encode, decode } from '@whaaaley/query-string'

const { addEventListener } = window

const RouterModule = {
  state: {
    query: {},
    path: '/'
  },
  actions: {
    init (_, { update }) {
      update()
      addEventListener('hashchange', _ => update())
    },
    route (state, _, { path, query }) {
      window.location.hash = (path || state.path) + encode(query || state.query)
    },
    update (state) {
      const { hash } = window.location
      const index = hash.indexOf('?')
      return {
        query: decode(hash.slice(index)),
        path: hash.slice(1, index === -1 ? hash.length : index)
      }
    }
  }
}

export { RouterModule }
