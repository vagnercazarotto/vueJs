<template>
  <div id="app">

    <h1>Vue JS</h1>

    <Post>
      <h2>Component no Vue</h2>
      <p>Components sao pecas importantes</p>
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

