<template>
  <div id="app" class="container">

    <h1>Vue JS</h1>
    <PostLista :posts="posts" />

  </div>
</template>

<script>

import PostLista from './components/PostLista.vue'

export default {
  components: {
    PostLista
  },
  data () {
    return {
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

