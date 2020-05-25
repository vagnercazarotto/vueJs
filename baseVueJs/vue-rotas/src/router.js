import Vue from 'vue'
import VueRouter from 'vue-router'
// coponents
import Contatos from './views/contatos/Contatos'
import ContatosHome from './views/contatos/ContatosHome'
import ContatosDetalhes from './views/contatos/ContatosDetalhes'
import Home from './views/Home'


// tell Vue what native plug in we should use
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos',
      component: Contatos,
      children: [
        { path: ':id', component: ContatosDetalhes, name: 'contato' },
        { path: '', component: ContatosHome }
      ] 
    }, // meus-contatos.com/contatos
    { path: '/', component: Home }
  ]
})