<template>
  <section class="pt-5 pb-5 ms_box">
    <div class="container">
        <div class="row justify-content-between align-items-center ms_center">
            <div class="col-10 col-md-5 mb-4 mt-4">
                <main-mamps />
            </div>
            <div class="col-10 col-md-6 mt-4 fs-5">
                <h3>Euroerforazioni</h3>
                <p>Offre servizi <strong>professionali e di esperienza</strong> come:</p>
                <ul>
                    <li><strong>Pozzi Artesiani</strong>: Trivelliamo e installiamo pozzi artesiani. Offriamo un approvvigionamento d'acqua affidabile per uso domestico, agricolo e industriale.</li>
                    <li><strong>Palificazioni</strong>: Con la nostra competenza nelle palificazioni, possiamo fornire fondamenta solide e resistenti per le vostre costruzioni.</li>
                    <li><strong>Consulenza e Assistenza</strong>: offriamo consulenza e assistenza per guidarvi attraverso ogni fase del progetto. La nostra esperienza ci permette di essere il vostro partner affidabile, dalla pianificazione all'implementazione.</li>
                    <li><strong>Esperienza e Competenza</strong>: noi siamo un'azienda leader nel settore. La nostra esperienza e conoscenza ci permettono di affrontare le sfide più complesse, assicurando risultati duraturi e affidabili.</li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import MainMamps from '../Generals/MainMamps.vue'
export default {
components: { 
    MainMamps 
},

}
</script>

<style scoped lang="scss">
.ms_box{
    background-color: #F5F5F5;
}

@media screen and (max-width:  767px) {
    .ms_center{
        justify-content: center !important;
    }

}
</style>