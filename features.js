var vn = new Vue({
    el: '#app',
    data: {
        saludo: 'hola'
    }
})

const component = new Vue.component('saludo',{
    template: ` <div>
    <h1>{{ saludo }}, </h1
    <p>{{this.saludo }}</p>        
</div>
`
})