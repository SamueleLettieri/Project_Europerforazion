<template>
  <section>
    <div class="ms_box pt-5 pb-5">
      <div class="container">
        <div class="row justify-content-between ms_center">
          <div class="ms_box_img d-inline-block ms_relative_right col-8 col-sm-4 mb-5"><video src="../../assets/video/video1.mp4" controls></video></div>
          <div class="ms_box_img d-inline-block ms_relative_left col-8 col-sm-4 mb-5"><video src="../../assets/video/video2.mp4" controls></video></div>
          <div class="ms_box_img d-inline-block ms_relative_right col-8 col-sm-4 "><video src="../../assets/video/video3.mp4" controls></video></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
    }
  },
}

</script>

<style scoped lang="scss">
@import "../../css/variables.scss";
  
video{
  right: 0px;
  width: 100%;
  height: 350px;
  border-radius: 20px;
  padding: 0 !important;
  border-radius: 20px;
  box-shadow:  5px  5px 5px rgba(165, 165, 165, 0.461),
              -5px -5px 5px rgba(165, 165, 165, 0.461),
               5px -5px 5px rgba(165, 165, 165, 0.461),
              -5px  5px 5px rgba(165, 165, 165, 0.461);
}


@media screen and (max-width: 575px) {
  .ms_center{
    justify-content: center !important;
  }
}
@media screen and (max-width: 767px) {
  video{
    height: 250px;
  }
}
</style>