<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
// @flow

import {INVOICES, PAYMENT_1, PAYMENT_2} from './data'

import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello,
  },

  created () {
    setTimeout(() => {
      this.$store.commit('SET_INVOICES', INVOICES)
      this.$store.commit('ADD_PAYMENT', PAYMENT_1)
      this.$store.commit('ADD_PAYMENT', PAYMENT_2)
    }, 2000)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
