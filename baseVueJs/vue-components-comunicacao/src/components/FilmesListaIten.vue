<template>
<!--     <li class="list-group-item">
        <span> {{ filmeTituloComputado }} :: {{ ano }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li> -->
    <div>
        <input type="text" :value="titulo" :placeholder="$attrs.placeholder" />
    </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String
    },
    ano: {
      type: Number,
      required: true
    }
  },
  created () {
    console.log('Filme Titulo ', this.titulo)
    console.log(typeof this.titulo)
  },
  computed: {
    filmeTituloComputado () {
      return `Titulo :: ${this.titulo}`
    }
  }
}
</script>
