Vue.component('hijo',{
    template: //html 
    `
    <div class="py-5 p-5">
    <button class="bg-success" @click="$store.commit('aumentar')">+</button>
    <h1>numero: {{$store.state.numero}}
    </div>
    `
})