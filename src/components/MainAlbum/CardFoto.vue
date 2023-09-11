<template>
  <div>
    <div class="col-3" @click="test()">clicca</div>
  </div>
</template>

<script>
import { ImagesAlbum } from '../../js/DatiAlbum'
export default {
    ImagesAlbum: ImagesAlbum,

    methods:{
        test(){
            console.log(this.ImagesAlbum)
        }
    }
}
</script>

<style>

</style>