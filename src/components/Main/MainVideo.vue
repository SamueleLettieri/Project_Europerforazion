<template>
  <section>
    <div class="ms_box pt-5 pb-5">
      <div class="container">
        <div class="row justify-content-between ms_center">
          <div class="d-inline-block ms_relative_right col-8 col-md-4 mb-5 row"><div class=" ms_mb1 fs-5 mb-5 p-2 col-12">In questo lavoro, è stata effettuata un'operazione di pulizia utilizzando compressori ad alta pressione a una profondità di 250 metri. L'uso di compressori ad alta pressione in un ambiente così estremo sottolinea la necessità di strumenti avanzati e di professionisti qualificati.</div><video class="col-12 d-inline-block" src="../../assets/video/video1.mp4" controls></video></div>
          <div class="d-inline-block ms_relative_left col-8 col-md-4 mb-5 row"><video class="col-12 d-inline-block" src="../../assets/video/video2.mp4" controls></video><div class="fs-5 p-2 mt-1 col-12">L'uso di compressori ad alta pressione per la pulizia è una dimostrazione della nostra capacità di utilizzare tecnologie all'avanguardia per raggiungere risultati eccezionali. Siamo orgogliosi di essere una parte fondamentale di progetti che richiedono competenza tecnica e precisione.</div></div>
          <div class="d-inline-block ms_relative_right col-8 col-md-4 mb-5 row"><div class="fs-5 mb-1 p-2 col-12">Questo è linizio di un lavoro di 150 metri completato con successo in un terreno tutt'altro che ottimale .La nostra capacità di portare a termine questo lavoro nonostante le difficoltà del terreno sottolinea la dedizione del nostro personale. Siamo orgogliosi di dimostrare che non ci fermiamo davanti alle avversità per soddisfare le vostre esigenze.</div><video class="col-12 d-inline-block" src="../../assets/video/video3.mp4" controls></video></div>
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
  padding: 0 !important;
  border-radius: 20px;
  box-shadow:  5px  5px 5px rgba(165, 165, 165, 0.461),
              -5px -5px 5px rgba(165, 165, 165, 0.461),
               5px -5px 5px rgba(165, 165, 165, 0.461),
              -5px  5px 5px rgba(165, 165, 165, 0.461);
}


@media screen and (max-width: 767px) {
  .ms_center{
    justify-content: center !important;
  }
  .ms_mb1{
    margin-bottom: .25rem!important;
  }
}
</style>