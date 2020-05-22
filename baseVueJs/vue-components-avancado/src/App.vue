<template>
  <div id="app">

    <h1>Vue JS</h1>

    <Post titulo="Component no Vue"/>
    <Post titulo="Passando props via props"/>

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

