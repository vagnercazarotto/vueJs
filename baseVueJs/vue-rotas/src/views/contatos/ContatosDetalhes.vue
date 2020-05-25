<template>
    <h3 class="font-weight-light">Detalhes sobre o contato com o id: {{ this.$route.params.id }} </h3>
</template>

<script>
export default {
    created() {
        console.log('parametos da rota', this.$route.params)
    }
}
</script>