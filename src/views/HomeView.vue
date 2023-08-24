<template>
  <div class="home">
    <main-top />
    <MainCarosel /> 
  </div>
</template>

<script>
import MainCarosel from '@/components/Main/MainCarosel.vue' 
import MainTop from '@/components/Main/MainTop.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MainCarosel, 
    MainTop

  }
}
</script>
