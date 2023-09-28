<template>
  <section id="Servizi" class="ms_margin_top">
    <div class="col-12 mt-5"><img class="col-12" src="../assets/img/Biglietto_da_visita.jpg" alt=""></div>
    <div class="container">
      <ul class="row align-items-center justify-content-center">
        <li class="p-5 fs-3 col-12 col-md-8 text-center mt-4 mb-3 " v-for="(service, index) in services" :key="index"><h2>{{ service.service }}</h2></li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  components: {  },
  data(){
    return{
      services: [
        {
          service: "Perforazione pozzi artesiani",  
        },
        {
          service: "Palificazioni",
        },
        {
          service: "Eletropompe",
        },
        {
          service: "Impianti di sollevamento acque",
        },
        {
          service: "Impianto geotermico con pozzi verticali",
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.ms_margin_top{
  margin-top: $Margin_Top;
}
img{
  object-fit: cover;
  height: 550px;
  object-position: top;
}

ul{
  padding: 0px !important;
}

li{
  display: inline-block;
  list-style: none;
  border-bottom: 1px solid lightgray;
}
</style>