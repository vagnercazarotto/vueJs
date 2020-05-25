<template>
    <h3 class="font-weight-light">Detalhes sobre o contato com o id: {{ id }} </h3>
</template>

<script>
export default {
    created() {
        console.log('parametos da rota', this.$route.params)
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.id = to.params.id
        next()
    }
/*     watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    } */
}
</script>