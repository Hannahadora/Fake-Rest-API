<template>
  <div id="app">
    <SignUp />
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
  }
</style>
