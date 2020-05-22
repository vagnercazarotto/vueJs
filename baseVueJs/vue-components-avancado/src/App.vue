<template>
  <div id="app">

    <h1>Vue JS</h1>

    <Post>
      <h2 slot="cabecalho">Component no Vue</h2>
      <p slot="conteudo">Components sao pecas importantes</p>
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

