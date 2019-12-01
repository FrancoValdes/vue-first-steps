Vue.component('saludo', {
    template:  //html
    `
    <div>
            <h1>{{ saludo }}</h1>
            <h3>{{ contador }}</h3>
            
            <button @click="contador++">SUMAR 1</button>
    </div>
    `,
    data() {
        return { 
            saludo: 'holahola',
            contador: 0
     }
    }
})