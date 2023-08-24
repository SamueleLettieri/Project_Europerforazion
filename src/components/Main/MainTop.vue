<template>
  <section class="mt-5 ms_back pt-5 pb-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-5 ms_box_img text-center"><img src="../../assets/trivella-4.jpeg" alt=""></div>
            <div class="col-12 col-md-6 col-lg-5 ms_box_img fs-5">
                <h2>Europerforazioni</h2>
                <p>Siamo <strong>specialisti</strong> di riferimento nell'ambito delle <strong>perforazioni e palificazioni</strong> con una lunga tradizione di dedizione.</p> 
                <p>La nostra passione ci guida nell'offrire soluzioni <strong>affidabili</strong> frutto di un'<strong>esperienza</strong> consolidata nel tempo.</p>
                <p>La nostra <strong>competenza</strong> ci permette di <strong>soddisfare</strong> ogni requisito, assicurando <strong>risultati di eccellenza</strong> e costruendo rapporti duraturi con la nostra preziosa clientela.</p>
                <h4>Cell: +39 347 629 1538</h4>
                <h4>Email: dittalettieri@libero.it</h4>
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
    background-color: $Back_color;

    p{
        margin-bottom: 3px;
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
@media screen and (max-width: 475px) {
    .ms_box_img{
        text-align: center;
    }
}
</style>