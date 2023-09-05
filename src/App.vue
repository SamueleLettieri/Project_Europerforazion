<template>
  <div id="app">
    <header-project />
    <router-view/>
    <FooterProject />
  </div>
</template>

<script>
import FooterProject from './components/Footer/FooterProject.vue';
import HeaderProject from './components/Header/HeaderProject.vue';

export default {
  name: 'App',
  components: {
    HeaderProject,
    FooterProject
  }
}
</script>

<style lang="scss">

</style>
