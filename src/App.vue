<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ upperCaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({
        value: 10,
        delay: 250
      })">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  methods: {
    ...mapMutations({ add: 'count/increment' }),
    ...mapActions('count', ['incrementAsync'])
  },
  // computed: mapGetters(['counter', 'doubleCounter', 'upperCaseTitle']),
  computed: {
    ...mapGetters(['upperCaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  }
}
</script>
