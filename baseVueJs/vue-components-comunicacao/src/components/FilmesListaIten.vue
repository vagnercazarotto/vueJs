<template>
    <li class="list-group-item">
        <span> {{ filmeTituloComputado }} :: {{ ano }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
  props: {
    filmeTitulo: {
      type: String
    },
    ano: {
      type: Number,
      required: true
    }
  },
  created () {
    console.log('Filme Titulo ', this.filmeTitulo)
    console.log(typeof this.filmeTitulo)
  },
  computed: {
    filmeTituloComputado () {
      return `Titulo :: ${this.filmeTitulo}`
    }
  }
}
</script>
