<template>
  <section>
    <div class="container ms_color">
        <div class="row">
            <div class="col-12 col-md-6 p-5 ms_f_s" :class="{'ms_box': isTrue === true}"><h1>{{ title }}</h1><h2>{{ minititle }}</h2></div>
            <div class="col-12 col-md-6 p-5 ms_f_s_20" :class="{'ms_box': isTrue === false}">
                {{ presentazione }}
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
props: ["title", "minititle", "presentazione", "isTrue"]
}
</script>

<style scoped lang="scss">
.ms_box{
    background-color: rgba(176, 196, 222, 0.1);

}

.ms_color{
    color: #3E3E3E;
}

.ms_f_s_20{
    font-size: 20px;
}

</style>