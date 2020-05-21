import Vue from 'vue'

// don't return a shared object to a component
/*const data = {
  titulo: 'curso de vue JS',
  contador: 0
}
*/

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

new Vue({
 el: '#app'
})
