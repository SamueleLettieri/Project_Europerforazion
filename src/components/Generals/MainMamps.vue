<template>
  <div class="ms_maps mt-2 position-relative">
    <a :href="link" target="_blank">
      <span class="d-inline-block ms_p-absolute ms_btn rounded-5 ms_pad"><i class="fs-3 fa-solid fa-location-dot"></i></span>
      <img class="ms_opacity" src="../../assets/img/google-mamp.png" alt="">
    </a>
  </div>
</template>

<script>

export default {

  components: {

  },

  data() {
    return{
      link: "https://www.google.com/maps/place/Europerforazioni+Sas/@38.6812054,15.9269484,17z/data=!3m1!4b1!4m6!3m5!1s0x1315705665625935:0x5ff5d6d34b3cb254!8m2!3d38.6812054!4d15.9269484!16s%2Fg%2F11h13rq7p?entry=ttu",
    }
  },

}
</script>

<style scoped lang="scss">
.ms_maps{
  background-color: black;
  width: 100%; 
  height: 300px;
  box-shadow:  2px  2px 5px rgba(165, 165, 165, 0.461),
              -2px -2px 5px rgba(165, 165, 165, 0.461),
               2px -2px 5px rgba(165, 165, 165, 0.461),
              -2px  2px 5px rgba(165, 165, 165, 0.461);
}

.ms_opacity{
  opacity: 0.3;
}

.ms_btn{
  color: white;
  background-color: rgb(230, 230, 230);
  border: 1px solid white;
}

.ms_maps:hover{
  .ms_btn{
    background-color: blue;
  }
}

.ms_pad{
  padding: 13px 18px;
}

.ms_p-absolute{
  position: absolute;
  top: 40%;
  left: 42%;
  z-index: 1;
}

img{
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 475px) {
    .ms_maps{
      height: 250px;
    }
}
</style>