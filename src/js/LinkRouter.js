export const dati = {
    links: [
        {
        href: '/Chi_Siamo/:id',
        text: 'Chi Siamo'
        },
        {
        href: '/Servizi/:id',
        text: 'Servizi'
        },
        {
        href: '/Foto/:id',
        text: 'Foto'
        },
    ],

    variables: {
        activeIndex: null,
    },

    methods: {
        nextIndex(index){
            this.activeIndex = index;
        },

        isFalse(){
            this.activeIndex = null;
        },

    },


    
}
