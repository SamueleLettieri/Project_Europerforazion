import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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


createApp(App).use(router).use(store).mount('#app')
