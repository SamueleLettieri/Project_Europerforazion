<template>
  <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="navbar-brand ms_img"><router-link to="/" @click="isFalse()"><img src="../../assets/img/logo_europerforazioni.jpeg" alt=""></router-link></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <router-link class="nav-link active" :class="{'ms_active': activeIndex === index}" @click="nextIndex(index)" aria-current="page" :to="link.href"><h6>{{link.text}}</h6></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default { 
    data: function(){
        return{
            activeIndex: -1,
            links:[
                {
                    href: '/Chi_Siamo',
                    text: 'Chi Siamo'
                },
                {
                    href: '/Servizi',
                    text: 'Servizi'
                },
                {
                    href: '/Contatti',
                    text: 'Contatti'
                },
            ]
        }
    },
    methods: {
        nextIndex(index){
            this.activeIndex = index;
            console.log(index);
        },

        isFalse(){
            this.activeIndex= -1;
        }
    }
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

    img{
        width: 100px;
        height: 80px;
    }

    .ms_active{
        color: rgb(0, 47, 255) !important;
    }
}
</style>