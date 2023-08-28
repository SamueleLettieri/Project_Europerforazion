<template>
  <section class="pt-5 pb-5 ms_box">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10 col-md-5 mb-4">
                <main-mamps />
            </div>
            <div class="col-10 col-md-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere nesciunt repellat obcaecati quod deleniti cumque earum iusto voluptate cupiditate nostrum ea eaque beatae, fuga quaerat perspiciatis autem neque nihil.
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
</style>