<template>
  <div id="app" class="container">

    <h1>Vue JS</h1>

    <Post>
      <h2 slot="cabecalho">Component no Vue</h2>

      <template slot="conteudo">
        <p>Components sao pecas importantes</p>
        <span>....</span>
      </template>
      
      <small slot="rodape">autor do post..</small>

    </Post>


  </div>
</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>

