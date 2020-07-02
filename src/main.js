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

const routes = [
  { path: '/start',  component: Start },
  { path: '/login', component: Login },
  { path: '/agree', component: UserAgreement },
  { path: '/search', component: Search },
  { path: '/home', component: Home, children: [
    { path: '', component: Index },
  ]},
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
