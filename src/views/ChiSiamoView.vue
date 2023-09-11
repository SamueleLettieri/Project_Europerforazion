<template>
  <section id="Chi_Siamo" class="ms_margin_top"> 
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12  ms_box_img"><img :src="imgs[activeIndex].img" alt=""></div>
      </div>
    </div> 
    <main-presentazione title="Europerforazioni s.a.s." minititle="L'acqua è vita e noi la troviamo per te" presentazione="Dal primo decennio degli anni 2000, ci dedichiamo con impegno a fornire un servizio di perforazione pozzi di alta qualità. Il nostro team vanta oltre 30 anni di esperienza sia nel settore privato che in quello pubblico, utilizzando materiali certificati e di prim'ordine." :isTrue="true"/>
    <main-presentazione minititle="Sempre pronti a offrire la miglior soluzione" presentazione="La nostra esperienza nella perforazione di pozzi è guidata dalla nostra costante ricerca di eccellenza e dalla volontà di superare le aspettative dei nostri clienti. Ogni progetto che affrontiamo è gestito con la massima attenzione ai dettagli e un approccio basato sulla sicurezza. Abbiamo costruito una solida reputazione nel settore grazie alla nostra capacità di consegnare risultati affidabili e duraturi. Siamo orgogliosi di essere un punto di riferimento nel campo della perforazione pozzi e continueremo a lavorare duramente per mantenere questo status. Il nostro lavoro è fornire un servizio che sia al di sopra degli standard, garantendo l'accesso a risorse idriche affidabili." :isTrue="false"/>
  </section>
</template>

<script>
import MainPresentazione from '@/components/Generals/MainPresentazione.vue'
export default {
  components: { MainPresentazione },
  data(){
    return {
      activeIndex: 0,
      imgs:[
        {
          img: require("../assets/img/trivella-23.jpg"),
        },
        {
          img: require("../assets/img/trivella-24.jpg"),
        },
        {
          img: require("../assets/img/trivella-25.jpg"),
        },
        {
          img: require("../assets/img/trivella-26.jpg"),
        },
      ]
    }
  },
  methods: {
    nextIndex(){
      this.activeIndex++;
      if(this.activeIndex >= this.imgs.length){
        this.activeIndex = 0;
      }
    }
  },
  created(){
    setInterval(this.nextIndex, 5000);
  },
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.ms_margin_top{
  margin-top: $Margin_Top;
}
img{
  width: 100%;
  height: 500px;
  object-position: center;
  object-fit: cover;
}


</style>