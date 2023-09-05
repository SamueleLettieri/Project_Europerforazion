<template>
  <div class="home ms_margin_top">
    <main-carosel />
    <main-top />
    <main-servizi />
    <main-video />
  </div>
</template>

<script>
import MainTop from '@/components/Main/MainTop.vue'
import MainServizi from '@/components/Main/MainServizi.vue'
import MainVideo from '@/components/Main/MainVideo.vue'
import MainCarosel from '@/components/Main/MainCarosel.vue'

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    MainTop,
    MainServizi,
    MainVideo,
    MainCarosel,

  }
}
</script>

<style lang="scss" scoped>
  @import "../css/variables.scss";
.ms_margin_top{
  margin-top: $Margin_Top;
}
</style>