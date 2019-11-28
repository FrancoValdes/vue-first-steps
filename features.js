const app = new Vue({
    el: '#app',
    data: {
        information: 'Fruits',
        frutas: [
            { nombre: 'manzana', cantidad: 0 },
            { nombre: 'platano', cantidad: 6 },
            { nombre: 'naranja', cantidad: 16 }
        ],
        nuevaFruta: '',
        cantidad: 0,
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: this.cantidad
            })
            this.nuevaFruta = ''
            this.cantidad = 0
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0
            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
        }
    },
    
})