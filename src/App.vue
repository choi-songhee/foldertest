<template>
  <div id="app">
    <Login />

    <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
