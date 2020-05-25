import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// tell Vue what native plug in we should use
Vue.use(VueRouter)

const router = new VueRouter({
  routes: []
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
