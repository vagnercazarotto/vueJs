<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="exibirForm = !exibirForm">
                    <span>Criar </span>
                </button>
            </div>
        </div>

        

        <ul class="list-group" v-if="tarefas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                :tarefa="tarefa" />
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TarefaSalvar
            v-if="exibirForm"
            @criar="criarTarefa"/>

    </div>
</template>

<script>

import axios from 'axios'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'
import config from './../config/config'

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            tarefas: [],
            exibirForm: false
        }
    },
    created() {
        axios.get(`${config.apiURL}/tarefas`)
            .then((response) => {
                console.log(response)
                this.tarefas = response.data
            })
    },
    methods: {
        criarTarefa(tarefa){
            axios.post(`${config.apiURL}/tarefas`, tarefa)
                .then((response) => {
                    console.log('POST /tarefas', response)
                    this.tarefas.push(tarefa.data)
                    this.exibirForm = false
                })
        }
    }
}
</script>
