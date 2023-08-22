<template>
  <div id="app">
    <header-project />
    <router-view/>
  </div>
</template>

<script>
import HeaderProject from './components/Header/HeaderProject.vue';

export default {
  name: 'App',
  components: {
    HeaderProject
  }
}
</script>

<style lang="scss">

</style>
