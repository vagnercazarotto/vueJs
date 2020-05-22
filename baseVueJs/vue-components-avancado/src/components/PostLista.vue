<template>
    <div>

        <h2>Lista de posts</h2>

        <PostListaitem
            v-for="post in posts"
            :key="post.id"
            :post="post" />

    </div>
</template>

<script>

import PostListaitem from './PostListaitem.vue'

export default {
    comments: {
        PostListaitem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>