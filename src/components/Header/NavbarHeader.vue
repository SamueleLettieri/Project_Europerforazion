<template>
  <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="navbar-brand ms_img"><router-link to="/" @click="isFalse(), nextValue()"><img src="../../assets/img/logo_europerforazioni.jpeg" alt=""></router-link></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in dati.links" :key="index">
              <router-link class="nav-link active ms_hovere" :class="{'ms_active': activeIndex === index || id === index}" @click="nextIndex(index), nextValue()" aria-current="page" :to="link.href"><h6>{{link.text}}</h6></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { dati } from "../../js/LinkRouter"
import { mapState } from 'vuex'
export default { 
  data: function(){
      return{
        dati: dati,
        activeIndex: dati.variables.activeIndex,
        nextIndex: dati.methods.nextIndex,
        isFalse: dati.methods.isFalse,
      }
  },

  methods: {
    nextValue(){
      if(this.id !== null){
        this.$store.commit('impostaid', null);
        this.$store.commit('impostaBoolean', null);
      }
    },

    newBoolean(){
      if(this.boolean === true){
        this.activeIndex = null;
      }
      this.activeIndex
    },
  },

  watch: {
    boolean(newVal) {
      if (newVal === true) {
        this.newBoolean();
      }
    }
  },

  computed: {
    ...mapState(['id']), // Mappa lo stato da Vuex
    ...mapState(['boolean']), // Mappa lo stato da Vuex
  },
}
</script>

<style scoped lang="scss">
nav{
position: fixed;
right: 0;
top: 0;
left: 0;
background-color: white !important;
z-index: 1;
border-bottom: 1px solid lightgray;

    img{
        width: 100px;
        height: 80px;
    }

    .ms_active{
        color: rgb(0, 47, 255) !important;
    }

    .ms_hovere:hover{
        color: rgb(0, 47, 255) !important;
    }

}
</style>