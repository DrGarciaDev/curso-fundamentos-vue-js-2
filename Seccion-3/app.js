var myApp = new Vue({
    el:"#app",
    data:{
        votos:0,
        nombre:"",
        apellidos:""
    },
    methods:{
        votar:function(){
            this.votos++;
            console.log('Funcion votar con Vue');
        }
    },
    computed:{
        nombreCompleto:function(){
            return this.nombre + " " + this.apellidos;
        }
    }
});