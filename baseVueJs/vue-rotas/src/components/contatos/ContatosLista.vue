<template>
    
    <div>
        <h3 class="font-weight-light"> Contatos </h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <ContatoListaItem 
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>

        <p v-else> Nenhum contato cadastrado</p>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>

</template>

<script>
import ContatoListaItem from './ContatosListaItem'

export default {
    components: {
        ContatoListaItem
    },
    data() {
        return {
            contatos: [
                { id:1, nome: 'Name A', email: 'a@gmail.com' },
                { id:2, nome: 'Name B', email: 'b@gmail.com' },
                { id:3, nome: 'Name C', email: 'c@gmail.com' }
            ]
        }
    },
    methods: {
        voltar() {
            this.$router.back()
        }
    }
}
</script>