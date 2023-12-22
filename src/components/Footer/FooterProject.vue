<template>
  <footer class="ms_black p-5">
    <div class="container ms_c_w">
        <div class="row justify-content-between align-items-center ms_center">
            <div class="col-12 col-md-4 ms_margin"><main-mamps class="ms_h"/></div>
            <div class="col-12 col-md-3 mt-4 ms-5 ms_m_0">
                <h5>Europerforazioni</h5>
                <div class="">
                    <ul class="p-2 text-start">
                        <li class="nav-item p-0" v-for="(link, index) in dati.links" :key="index">
                            <router-link class="nav-link active ms_hovere p-0 mb-2 ms_center" @click="nextIndex(index), setId(), scrollMeto()" aria-current="page" :to="link.href">{{link.text}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="col-12 col-md-12">
                    <span class="mb-2 d-inline-block fs-5">Contati:</span>
                    <h6>Cell: +39 347 629 1538</h6>
                    <h6>Cell: +39 328 424 3921</h6>
                    <h6>Email: dittalettieri@libero.it</h6>         
                </div>
                <div class="col-12 col-md-12 mt-3">
                   <a class="ms_c_w" href="https://www.facebook.com/giuseppe.lettieri.374" target="_blank"><i class="fa-brands fa-facebook mx-4 fs-4"></i></a><!--  <a class="ms_c_w" href="https://www.instagram.com/europerforazioni_lettieri/" target="_blank"><i class="fa-brands fa-instagram fs-4"></i></a> -->
                </div> 
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import MainMamps from '../Generals/MainMamps.vue'
import { dati } from "../../js/LinkRouter"
import { mapMutations } from 'vuex'
export default {
    components:{
        MainMamps,
    },
    data: function(){
        return{
            dati: dati,
            activeIndex: dati.variables.activeIndex,
            nextIndex: dati.methods.nextIndex,
            isFalse: dati.methods.isFalse,
            id: null,
            boolean: false,
        }
    },
     methods:{
     ...mapMutations(['impostaid']), // Mappa la mutazione da Vuex
     ...mapMutations(['impostaBoolean']), // Mappa la mutazione da Vuex

        setId(){
            this.id = this.activeIndex;
            this.boolean = true

            this.impostaid(this.id); // Chiama la mutazione per cambiare il valore
            this.impostaBoolean(this.boolean);
        },

        scrollMeto(){
            window.scrollTo(0, 0);
        }
    } 

}
</script>

<style lan
MainMampsg="scss" scoped>
.ms_black{
    background-color: black;
}

.ms_h{
    height: 200px;
}

.ms_c_w{
    color: white;
}

li{
    list-style-type: none;
}

@media screen and (max-width: 767px) {
    .ms_center{
        text-align: center;
    }
    .ms_m_0{
        margin-left: 0 !important;
    }
    .ms_margin{
        margin-bottom: 40px;
    }
}
</style>