<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
          :class="applicarClasseAtiva(filme)"
          @selecionarFilme="filmeSelecionado = $event" />
      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo
      v-if="!editar"
      :filme="filmeSelecionado"
      @editarFilme="editarFilme" />

      <FilmesListaItenEditar
      v-else
      :filme="filmeSelecionado"/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'
import { eventBus } from './../main'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data () {
    return {
      filmes: [
        { id: 1, titulo: 'Vingadores: guerra infinita! 3', ano: 2016 },
        { id: 2, titulo: 'Vingadores: guerra infinita! 33', ano: 2017 },
        { id: 3, titulo: 'Vingadores: guerra infinita! 3333', ano: 2018 }
      ],
      filmeSelecionado: undefined,
      editar: false
    }
  },
  methods: {
    applicarClasseAtiva (filmeAlterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeAlterado.id
      }
    },
    editarFilme (filme) {
      this.editar = true
      this.filmeSelecionado = filme
    },
    created () {
      eventBus.$on('selecionarFilme', (filmeSelecionado) => {
        this.filmeSelecionado = filmeSelecionado
      })
    }
  }
}
</script>
