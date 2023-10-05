import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Geolocation from 'vue3-geolocation';

import { createStore } from 'vuex'
const store = createStore({
    state: {
        id: null, // Valore da cambiare
        boolean: null,
    },
    mutations: {
        impostaid(state, nuovoid) {
            state.id = nuovoid;
        },

        impostaBoolean(state, nuovoBoolean) {
            state.boolean = nuovoBoolean;
        },
    },
})


createApp(App).use(router).use(Vue3Geolocation).use(store).mount('#app')
