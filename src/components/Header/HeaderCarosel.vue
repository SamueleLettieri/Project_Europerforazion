<template>
  <section>
    <div class="ms_box text-center">
      <img class="ms_relative_right" :src="imgs[activIndex].img" alt="" @click="next()">
      <img class="ms_relative_left" :src="imgs[imgIndex].img" alt="" @click="next()">
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
      activIndex: 0,
      imgIndex: 1,
      imgs:[
        {
          img: require("../../assets/trivella-1.jpeg")
        },
        {
          img: require("../../assets/trivella-2.jpeg")
        },
        {
          img: require("../../assets/trivella-3.jpeg")
        },
        {
          img: require("../../assets/trivella-4.jpeg")
        },
        {
          img: require("../../assets/trivella-5.jpeg")
        },
      ]
    }
  },
  methods: {
    next(){
      this.activIndex ++ ;
      this.imgIndex ++ ;

      if(this.activIndex === this.imgs.length){
        this.activIndex = 0;
      }
      
      if(this.imgIndex === this.imgs.length){
        this.imgIndex = 1;
      }
    },
    
  },
created() {
    this.interval = setInterval(this.next, 4000); 
  }, 
  

}

</script>

<style scoped lang="scss">
.ms_box{
  background-color: rgba(242, 179, 20, 0.52);
  height: 650px;
  img{
    width: 400px;
    height: 400px;
    border-radius: 20px;
    box-shadow:  10px  10px 5px rgba(128, 92, 0, 0.461),
              -10px -10px 5px rgba(255, 208, 0, 0.707),
               10px -10px 5px rgba(255, 208, 0, 0.368),
              -10px  10px 5px rgba(255, 208, 0, 0.368);
  }
  .ms_relative_right{
    position: relative;
    top: 233px;
    right: 40px;
  }
  .ms_relative_left{
    position: relative;
    top: 15px;
  }
}
</style>