import { h } from '../h'

const Search = (state, actions, data) => _ =>
  h('input', {
    type: 'text',
    value: decodeURIComponent(state.RouterModule.query.search),
    onkeypress (e) {
      if (e.keyCode === 13) {
        actions.RouterModule.route({
          query: {
            search: encodeURIComponent(e.target.value)
          }
        })
      }
    }
  })

export { Search }
