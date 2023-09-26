<template>
  <div>
    <div class="mx-5 p-4 ms_m0" v-if="isTrue == false">
      <div class="row" > <!-- v-if="isTrue == false" -->
        <div class="col-3 col-md-3 col-lg-2 p-2" v-for="(img, index) in newArrayImg" :key="index" @click="imgDetail(index)"><img class="ms_img" :src="img.img" alt=""></div>
      </div>
    </div>
    <div class="ms_fixed" v-else>
      <div class="position-fixed p-4 ms_right"><i class="fa-solid fa-x fs-5" style="color: #ffffff;" @click="isTrue = false"></i></div>
      <div class="position-fixed p-4 ms_top"><i class="fa-solid fa-arrow-left fs-4" style="color: #ffffff;" @click="arrowLeft()"></i></div>
      <div class="position-fixed p-4 ms_right ms_top"><i class="fa-solid fa-arrow-right fs-4" style="color: #ffffff;"></i></div>
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-12"><img class="ms_imgdetail" :src="newImg" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>  

<script>
import { DatiAlbum } from '../../js/DatiAlbum'
import { Images } from '../../js/DatiFoto'
export default {
  data: function(){
    return{
      newImg: null,
      isTrue: false,
      nextIndex: null,
      newArrayImg: [],
      ImagesAlbum: DatiAlbum.ImagesAlbum,
      Images: Images.ImagesHome,
    } 
  },

  methods:{
    generateNewArray(){
      this.Images.forEach((element) => {
        this.newArrayImg.push(element);
      });

      this.ImagesAlbum.forEach((element) => {
        this.newArrayImg.push(element);
      });
    }, 
    
    imgDetail(index){
      this.nextIndex = index;
      this.isTrue = true;
      /* console.log(this.newArrayImg[this.nextIndex].img); */
      this.newImg = this.newArrayImg[this.nextIndex].img;
      /* console.log(this.newImg); */
    },

    arrowLeft(){
      this.nextIndex--
      console.log(this.nextIndex)
    }

  },

  mounted(){
    this.generateNewArray()
  }
}
</script>

<style scoped lang="scss">
.ms_img{ 
  object-fit: cover;
  width: 100%;
  height: 250px;
}

.ms_right{
  right: 0;
}

.ms_top{
  top: 45%;
}

.ms_fixed{
  background-color: black;
  position: fixed;
  z-index: 2;
  top: 0px;
  width: 100%;
  height: 100vh;
}
.ms_imgdetail{
  object-fit: contain;
  width: 100%;
  height: 850px;
}

@media screen and (max-width: 767px) {
  .ms_m0{
    margin: 0px !important;
  }
  .ms_img{ 
    height: 100px;
  }

  .ms_imgdetail{
  object-fit: contain;
  width: 100%;
  height: 530px;
}
}
</style>