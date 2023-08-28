<template>
  <GoogleMap class="ms_maps mt-2" :api-key="apiKey" :center="{lat: lat, lng: lng}" :zoom="15">
    <Marker :options="{ position: {lat: lat, lng: lng} }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {

  components: {
    GoogleMap,
    Marker
  },

  data() {
    return{
      apiKey: "AIzaSyD_FQVi5pGj9bWb-SebzxQWT3C66-W8vyA",
      lat: 38.68125,
      lng: 15.92700,
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

@media screen and (max-width: 475px) {
    .ms_maps{
      height: 250px;
    }
}
</style>