Vue.component('mi-primer-componente',{
    // include props
    props:["msg"],
    template: '<div class="alert alert-primary" role="alert"><button class="btn btn-primary" v-on:click="saludar(msg)">Saludar</button> {{msg}}</div>',
    methods:{
        saludar:function(valor){
            alert("Hola " + valor)
        }
    }

});

var app = new Vue({
    el:"#app",
    data:{
    
    },
});