import { createSlice } from "@reduxjs/toolkit";

export const productsSlice= createSlice({
    name: 'products',
    initialState:{
        value:[
            // optimize antipasti
            {
                category: "Antipasti", 
                name: "Patatine", 
                price: 2, 
                description: "Porzione di patatine fritte con salse katchup, majonaise e barbeque",
                URLimage:"https://www.motopizza2.com/wp-content/uploads/2021/07/90681-1.jpg"
            },
            {
                category: "Antipasti", 
                name: "Antipasto misto", 
                price: 2, 
                description: "Porzioni di dalame, guanciale, prociutto cotto, prociutto crudo, grana padano, olive verdi",
                URLimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRQWatOmj8myeEurSoRtkugV1GEw1Hisp6g&usqp=CAU"
            },

            // optimize primi
            {
                category: "Primi", 
                name: "Farfallette al salmone", 
                price: 8, 
                description: "Pasta, salmone affumicato, panna, prezzemolo",
                URLimage:"https://blog.giallozafferano.it/ilchiccodimais/wp-content/uploads/2019/06/farfalle-al-salmone-affumicato-con-panna-ricetta-facile-e-veloce-il-chicco-di-mais.jpg"
            },
            {
                category: "Primi", 
                name: "Spaghetti al ragù", 
                price: 7.5, 
                description: "Pasta, pomodoro, ragù di maiale, carote",
                URLimage:"https://www.cuocicuoci.com/wp-content/uploads/2022/05/rigatoni-al-ragu.jpg"
            },

            // optimize pizze
            {
                category: "Pizze", 
                name: "Margherita", 
                price: 4, 
                description: "Pomodoro, mozzarella, basilico",
                URLimage:"https://ilfattoalimentare.it/wp-content/uploads/2022/12/Depositphotos_505971914_L-1.jpg"
            },
            {
                category: "Pizze", 
                name: "Romana", 
                price: 6, 
                description: "Pomodoro, mozzarella, prociuto cotto",
                URLimage:"https://www.pizzaontheroad.eu/wp-content/uploads/2019/09/ADL_4586.jpg"
            },
            {
                category: "Pizze", 
                name: "Diavola", 
                price: 7, 
                description: "Pomodoro, mozzarella, peperoncino, salame piccante",
                URLimage:"https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/03/d1.jpg"
            },

            // optimize secondi di carne
            {
                category: "Secondi carne", 
                name: "Costolette di maiale", 
                price: 8, 
                description: "Carne di maiale con salsa teriaki",
                URLimage:"https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/04/AdobeStock_491302793-1200x900.jpg"
            },
            {
                category: "Secondi carne", 
                name: "Salsiccia di pollo", 
                price: 9, 
                description: "Salsiccia di pollo",
                URLimage:"https://www.donnamoderna.com/content/uploads/2023/05/fac82ee49783838d.jpg"
            },
            // optimize secondi di pesce
            {
                category: "Secondi pesce", 
                name: "Aragosta", 
                price: 8, 
                description: "Aragosta al forno con limone e olio",
                URLimage:"https://media-assets.lacucinaitaliana.it/photos/61fac87791ff55922ebd8f79/1:1/w_2560%2Cc_limit/empty"
            },
            {
                category: "Secondi pesce", 
                name: "Pesce misto", 
                price: 9, 
                description: "Pesce spada, gamberi e seppie al forno",
                URLimage:"https://www.alberto-arienti.com/wp-content/uploads/2021/11/Antipasto-di-pesce-1300x975.jpg"
            },
            // optimize bibite
            {
                category: "Bibite", 
                name: "Acqua naturale", 
                price: 2, 
                description: "Acqua naturale",
                URLimage:"https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
            },
            {
                category: "Bibite", 
                name: "Acqua gassata", 
                price: 3, 
                description: "Acqua gassata",
                URLimage:"https://www.ristorantiweb.com/wp-content/uploads/sites/9/2015/07/SB-Prestige-Rose-Edition.jpg"
            },
            {
                category: "Bibite", 
                name: "Vino rosso", 
                price: 9, 
                description: "Vino rosso",
                URLimage:"https://ilcontadino-online.com/3734-large_default/vino-rosso-malvasia-dolce-6-x-075lt-oltrepo-.jpg"
            },
        ]
    },

    reducers:{
        add: (state, newValue)=>{
            console.log('action', newValue);
            state.value.push(newValue.payload) 
        },
        remove: (state, id)=>{
            // SALVA SOLO I DATI DA NON CANCELLARE
            let result=[]
            state.value.map(el=> {
                if (el.id != id.payload){ 
                    result.push( el )
                }
            })
            // SOVRASCRIVI
            state.value=result
        },
    }
})

export const {add, remove}= productsSlice.actions
export const productsReducer= productsSlice.reducer