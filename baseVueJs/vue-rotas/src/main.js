import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contatos from './views/contatos/Contatos'
import Home from './views/Home'

Vue.config.productionTip = false

// tell Vue what native plug in we should use
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contatos', component: Contatos }, // meus-contatos.com/contatos
    { path: '/', component: Home }
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
