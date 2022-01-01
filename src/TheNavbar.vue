<template>
  <header class="navbar">
    <strong>Счётчик {{ counter }}</strong>

    <button class="btn" @click="add">Добавить</button>
  </header>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter
      }
    },
    methods: {
      add() {
        // this.$store.commit('add', {
        //   value: 5
        // })
        this.$store.commit({
          type: 'add',
          value: 5
        })
      }
    }
  }
</script>
