export const dati = {
    links: [
        {
        href: '/Chi_Siamo',
        text: 'Chi Siamo'
        },
        {
        href: '/Servizi',
        text: 'Servizi'
        },
        {
        href: '/Foto',
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
