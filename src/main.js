// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'
// import Home from './components/HelloFromVux'
import Start from './pages/Start'
import Login from './pages/Login'
import UserAgreement from './pages/UserAgreement'
import Home from './pages/Home'
import Search from './pages/Search'
import Index from './pages/Index/List'
import Detail from './pages/Index/detail'

import HomePage from './pages/Space/HomePage'
import Album from  './pages/Space/Album'
import Fans from './pages/Space/Fans'
import Chart from './pages/Space/Chart'

import Find from './pages/Find/List'

import Message from './pages/Message/Index'
import My from './pages/My/Index'
const routes = [
  { path: '/start',  component: Start },
  { path: '/login', component: Login },
  { path: '/agree', component: UserAgreement },
  { path: '/search', component: Search },
  { path: '/home', component: Home, children: [
    { path: '', redirect: '/home/list'},
    { path: '/home/list', component: Index },
    { path: '/home/list/:id', component: Detail },
    { path: '/home/find', component: Find},
    { path: '/home/message', component: Message},
    { path: '/home/my', component: My},
  ]},
  { path: '/homePage', component: HomePage },
  { path: '/album', component: Album },
  { path: '/fans', component: Fans },
  { path: '/chart', component: Chart },
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
