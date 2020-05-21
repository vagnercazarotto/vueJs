import Vue from 'vue'

Vue.component('pjn-component', { 
  data: function() {
    return { titulo: 'curso de vue JS' }
  },
  template: '<h1>{{ titulo }} </h1>'
})

new Vue({
 el: '#app'
})
