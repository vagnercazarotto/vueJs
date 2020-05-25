import Vue from 'vue'
import VueRouter from 'vue-router'
// coponents
import Contatos from './views/contatos/Contatos'
import Home from './views/Home'


// tell Vue what native plug in we should use
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contatos', component: Contatos }, // meus-contatos.com/contatos
    { path: '/', component: Home }
  ]
})