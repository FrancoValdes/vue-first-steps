Vue.component('hijo',{
    template: //html 
    `
    <div class="py-5 p-5 bg-success">
        <h4>componente hijo</h4>
        <p>{{ numero }}</p>
    </div>
    `,
    props: ['numero']
})