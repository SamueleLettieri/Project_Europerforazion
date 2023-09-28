<template>
  <section class="ms_back">
    <div class="ms_back_img ms_dnone">
        <div class="ms_color pt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-md-6 col-lg-5 ms_box_img text-center mb-5 mt-5"><img src="../../assets/img/trivella-4.jpeg" alt=""></div>
                    <div class="col-12 col-md-6 col-lg-5 ms_box_img fs-5">
                        <h2>Europerforazioni</h2>
                        <p>Siamo <strong>specialisti</strong> di riferimento nell'ambito delle <strong>perforazioni e palificazioni</strong> con una lunga tradizione di dedizione.</p> 
                        <p>La nostra passione ci guida nell'offrire soluzioni <strong>affidabili</strong> frutto di un'<strong>esperienza</strong> consolidata nel tempo.</p>
                        <p>La nostra <strong>competenza</strong> ci permette di <strong>soddisfare</strong> ogni requisito, assicurando <strong>risultati di eccellenza</strong> e costruendo rapporti duraturi con la nostra preziosa clientela.</p>
                        <h4>Cell: +39 347 629 1538</h4>
                        <h4>Cell: +39 328 424 3921</h4>
                        <h4>Email: dittalettieri@libero.it</h4>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";
.ms_back{ 

    p{
        margin-bottom: 3px;
    }
    .ms_color{
        background-color: rgba(183, 206, 221, 0.79);
    }
    .ms_back_img{
        background-image: url(../../assets/img/Biglietto_da_visita.jpg);
        background-size: 90%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
    }

    .ms_box_img{
        padding: $Px0;
        img{
            border-radius: 50%;
            object-fit: cover;
            width: 350px;
            height: 350px;
            object-position: bottom;
            
        }
    }
}
@media screen and (max-width: 767px) {
    .ms_box_img{
        text-align: center;
        
    }
   
}
</style>