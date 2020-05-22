import Vue from 'vue'
import App from './App.vue'


/* Vue.component('Assincrono', (resolve) => {

  setTimeout(() => {
    resolve({
      template: '<h2> Component Assincrono </h2>'
    })
  }, 2000)
// chamar reject
}) */

Vue.component('Assincrono',
    () => import('./components/Sobre')
  )


new Vue({
  render: h => h(App),
}).$mount('#app')
