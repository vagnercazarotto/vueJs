import Vue from 'vue'

/*
Vue.component('pjn-component', { 
  data: function() {
    return {
      titulo: 'curso de vue JS',
      contador: 0
    }
  },
  methods: {
    incrementar: function(){
      this.contador++
    }
  },
  template:`
    <div>
      <h1>{{ titulo }} </h1>
      <button @click="incrementar">Clicado {{ contador }} vezes!</button>
    </div>
  `  
})
*/

const pnjComponent = {
    data: function() {
      return {
        titulo: 'curso de vue JS',
        contador: 0
      }
    },
    methods: {
      incrementar: function(){
        this.contador++
      }
    },
    template:`
      <div>
        <h1>{{ titulo }} </h1>
        <button @click="incrementar">Clicado {{ contador }} vezes!</button>
      </div>
    `
}



new Vue({
 el: '#app1',
 components: {
   'pjn-component': pnjComponent
 }
})

new Vue({
  el: '#app2'
 })
 
