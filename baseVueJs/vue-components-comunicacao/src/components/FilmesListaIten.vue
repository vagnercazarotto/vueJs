<template>
    <li class="list-group-item">
        <span> {{ filmeTituloComputado }} </span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
  props: ['filmeTitulo'],
  created () {
    console.log('Filme Titulo ', this.filmeTitulo)
  },
  computed: {
    filmeTituloComputado () {
      return `Titulo :: ${this.filmeTitulo}`
    }
  }
}
</script>
