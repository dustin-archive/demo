import { h } from 'hyperapp'

const Home = h('div', null, [
  h('div', null, 'home')
])

const About = h('div', null, [
  h('div', null, 'about')
])

const Catalog = h('div', null, [
  h('div', null, 'catalog')
])

const Contact = h('div', null, [
  h('div', null, 'contact')
])

const Dashboard = h('div', null, [
  h('div', null, 'dashboard')
])

const Inventory = h('div', null, [
  h('div', null, 'inventory')
])

const Post = h('div', null, [
  h('div', null, 'post')
])

const Profile = h('div', null, [
  h('div', null, 'profile')
])

const Settings = h('div', null, [
  h('div', null, 'settings')
])

const Update = h('div', null, [
  h('div', null, 'update')
])

const NotFound = h('div', null, [
  h('div', null, '404')
])

const RouterView = (state, actions) => ({
  '': Home,
  '/about': About,
  '/catalog': Catalog,
  '/contact': Contact,
  '/dashboard': Dashboard,
  '/inventory': Inventory,
  '/post': Post,
  '/profile': Profile,
  '/settings': Settings,
  '/update': Update
})[state.Router.path] || NotFound

export { RouterView }
