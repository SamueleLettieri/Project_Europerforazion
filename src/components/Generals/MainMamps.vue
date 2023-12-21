<template>
  <div class="ms_maps mt-2">
    <a :href="link" target="_blank"><img src="../../assets/img/google-mamp.png" alt=""></a>
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
  width: 100%; 
  height: 300px;
  box-shadow:  2px  2px 5px rgba(165, 165, 165, 0.461),
              -2px -2px 5px rgba(165, 165, 165, 0.461),
               2px -2px 5px rgba(165, 165, 165, 0.461),
              -2px  2px 5px rgba(165, 165, 165, 0.461);
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