<template>
  <div class="home">
    <main-top />
    <main-servizi />
    <MainCarosel />
    <main-video />
  </div>
</template>

<script>
import MainCarosel from '@/components/Main/MainCarosel.vue' 
import MainTop from '@/components/Main/MainTop.vue'
import MainServizi from '@/components/Main/MainServizi.vue'
import MainVideo from '@/components/Main/MainVideo.vue'

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MainCarosel, 
    MainTop,
    MainServizi,
    MainVideo,
    

  }
}
</script>
