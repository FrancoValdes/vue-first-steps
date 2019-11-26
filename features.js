const app = new Vue({
    el: '#app',
    data: {
        fondo: 'bg-danger',
        color: true
    },
    methods: {
        cambiarColor() {
            this.color = !this.color
        }
    },
})