import { h } from 'hyperapp'

const Home = h('div', null, [
  h('div', null, 'home is where i live')
])

const About = h('div', null, [
  h('div', null, 'about')
])

const Contact = h('div', null, [
  h('div', null, 'contact')
])

const Dashboard = h('div', null, [
  h('div', null, 'dashboard')
])

const NotFound = h('div', null, [
  h('div', null, '404')
])

const RouterView = (state, actions) => ({
  '': Home,
  '/about': About,
  '/contact': Contact,
  '/dashboard': Dashboard
})[state.Router.path] || NotFound

export { RouterView }
