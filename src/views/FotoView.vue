<template>
  <section id="Foto" class="ms_margin_top">
    <div class="container">
      <div class="row">
        <card-foto />
      </div>
    </div>
  </section>
</template>

<script>
import CardFoto from '@/components/MainAlbum/CardFoto.vue'
export default {
  components: { CardFoto },
  
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.ms_margin_top{
  margin-top: $Margin_Top;
}
</style>