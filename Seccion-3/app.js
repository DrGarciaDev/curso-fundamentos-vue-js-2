var myApp = new Vue({
    el:"#app",
    data:{
        votos:0,
    },
    methods:{
        votar:function(){
            this.votos++;
            console.log('Funcion votar con Vue');
        }
    }
});