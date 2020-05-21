import Vue from 'vue'

import AppContador from './components/AppContador.vue'
import App from './App.vue'

// register a component in a global way
Vue.component('app-contador', AppContador)

new Vue({
 el: '#app',
 render: h => h(App)
})

