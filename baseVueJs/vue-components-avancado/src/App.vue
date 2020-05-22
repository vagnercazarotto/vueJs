<template>
  <div id="app" class="container">

    <h1>Components Dinamicos</h1>
    <Home />
    <Sobre />

    <button @click="componentSelecionado = 'Home'"> Home </button>
    <button @click="componentSelecionado = 'Sobre'"> Sobre </button>
    <button @click="componentSelecionado = 'Assincrono'"> Assincrono </button>

    <p> {{  componentSelecionado }} </p>
    <keep-alive>
      <component :is="componentSelecionado"></component>
    </keep-alive>
    

  </div>
</template>

<script>

import Home from './components/Home'
import Sobre from './components/Sobre'

export default {
  components: {
    Home,
    Sobre
  },
  data () {
    return {
      componentSelecionado: 'Home',
      posts: [
        { id: 1, titulo: 'titludo do post', conteudo: 'Conteudo do post', autor: 'autor do post' },
        { id: 2, titulo: 'titludo do post 2', conteudo: 'Conteudo do post 2', autor: 'autor do post 2' }
      ]
    }
  }
} 
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>

