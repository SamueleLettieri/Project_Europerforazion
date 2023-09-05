<template>
    <section class="ms_slider-container" >
      <div>
          <div class="ms_slider">
            <div class="ms_box_img d-inline-block ms_slide" v-for="(img, index) in imgs" :key="index"><img :src="img.img" alt="" /></div>
            <div class="ms_box_img d-inline-block ms_slide" v-for="(img, index) in imgs" :key="index"><img :src="img.img" alt="" /></div>
            <div class="ms_box_img d-inline-block ms_slide" v-for="(img, index) in imgs" :key="index"><img :src="img.img" alt="" /></div>
            <div class="ms_box_img d-inline-block ms_slide" v-for="(img, index) in imgs" :key="index"><img :src="img.img" alt="" /></div>
          </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    data: function(){
      return{
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
  }
  
  </script>
  
  <style scoped lang="scss">
  @import "../../css/variables.scss";
  
  .ms_slider-container {
    overflow: hidden;
    width: 100%; /* Larghezza del container */
    position: relative;
  }

  .ms_slider {
    display: flex;
    animation: slide 15s linear infinite;
  }

  .ms_slide {
    flex: 0 0 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  @keyframes slide {
    0% {
      transform: translateX(-40px);
    }
    100% {
      transform: translateX(-115%);
    }
  }

  img{
    right: 0px;
    width: 100%;
    height: 280px;
    animation: changeImage 4s infinite;
  }
  
  </style>