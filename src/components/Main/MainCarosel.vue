<template>
  <section>
    <div class="ms_box pt-5 pb-5">
      <div class="container">
        <div class="row justify-content-between ms_center">
          <div class="ms_box_img d-inline-block ms_relative_right col-8 col-sm-5 col-md-5 col-lg-3"><img :src="imgs[activIndex].img" alt="" /></div>
          <div class="ms_box_img d-inline-block ms_relative_left col-sm-5 col-md-5 col-lg-3 ms-5 ms_none"><img :src="imgs[imgIndex].img" alt="" /></div>
          <div class="ms_box_img d-inline-block ms_relative_right col-lg-3 mx-5 ms_none_md"><img :src="imgs[imgI].img" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
      activIndex: 0,
      imgIndex: 1,
      imgI: 2,
      imgs:[
        {
          img: require("../../assets/img/trivella-1.jpeg")
        },
        {
          img: require("../../assets/img/trivella-2.jpeg")
        },
        {
          img: require("../../assets/img/trivella-3.jpeg")
        },
        {
          img: require("../../assets/img/trivella-4.jpeg")
        },
        {
          img: require("../../assets/img/trivella-5.jpeg")
        },
      ]
    }
  },

  methods: {
    next(){
      this.activIndex++ ;
      this.imgIndex++ ;
      this.imgI++ ;

      if(this.activIndex === this.imgs.length){
        this.activIndex = 0;
      }
      
      if(this.imgIndex === this.imgs.length){
        this.imgIndex = 0;
      }

      if(this.imgI === this.imgs.length){
        this.imgI = 0;
      }
    },
      
  },

  mounted() {
    this.interval = setInterval(this.next, 4000); 
  },   

  beforeUnmount() {
    clearInterval(this.interval);
  },

}

</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

.ms_box {
  height: 630px;
}

.ms_relative_right{
    position: relative;
    top: 190px;
  }
.ms_relative_left{
  position: relative;
}
  
.ms_box_img {
  padding: 0 !important;
  border-radius: 20px;
  box-shadow:  5px  5px 5px rgba(165, 165, 165, 0.461),
              -5px -5px 5px rgba(165, 165, 165, 0.461),
               5px -5px 5px rgba(165, 165, 165, 0.461),
              -5px  5px 5px rgba(165, 165, 165, 0.461);

}
img{
  right: 0px;
  width: 100%;
  height: 350px;
  border-radius: 20px;
  animation: changeImage 4s infinite;
}

@keyframes changeImage {
  0%{
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}  


@media screen and (max-width: 575px) {
  .ms_center{
    justify-content: center !important;
  }
  .ms_none{
    display: none !important;
  }
  .ms_none_md{
    display: none !important;
  }
}

@media screen and (max-width: 992px) {
  .ms_none_md{
    display: none !important;
  }
  img{
    height: 270px;
  }
  .ms_relative_right{
    top: 0px;
  }
  .ms_box {
    height: 365px;
  }
}
</style>