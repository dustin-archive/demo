import { encode, decode } from '@whaaaley/query-string'

const Router = {
  state: {
    query: {},
    path: '/'
  },
  actions: {
    init (_, { update }) {
      console.log('i am initializing!')
      update()
      window.addEventListener('hashchange', _ => update())
    },
    route (state, _, { path, query }) {
      console.log('i am routing!')
      window.location.hash = (path || state.path) + encode(query || state.query)
    },
    update (state, actions, data) {
      console.log('i am updating!')
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
