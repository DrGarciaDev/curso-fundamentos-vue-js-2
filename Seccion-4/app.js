Vue.component('mi-primer-componente',{
    // include props
    props:["msg"],
    template: '<div class="alert alert-primary" role="alert">{{msg}}</div>'
});

var app = new Vue({
    el:"#app",
    data:{
    
    },
});