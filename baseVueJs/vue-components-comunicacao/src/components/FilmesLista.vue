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

      <FilmesListaItenInfo/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data () {
    return {
      filmes: [
        { id: 1, titulo: 'Vingadores: guerra infinita! 3', ano: 2016 },
        { id: 2, titulo: 'Vingadores: guerra infinita! 33', ano: 2017 },
        { id: 3, titulo: 'Vingadores: guerra infinita! 3333', ano: 2018 }
      ],
      filmeSelecionado: undefined
    }
  },
  methods: {
    applicarClasseAtiva (filmeAlterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeAlterado.id
      }
    }
  }
}
</script>
