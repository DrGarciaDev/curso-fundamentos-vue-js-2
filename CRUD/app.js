var app = new Vue({
    el:"#app",
    data:{
        clave:'',
        titulo:'',
        descripcion:'',
        lista:[]
    },
    methods:{
        agregar:function(clave, titulo, descripcion){
            var item = {
                clave: clave,
                titulo: titulo,
                descripcion: descripcion
            }
            app.lista.push(item);
        },
        eliminar:function(clave){
            var index = app.lista.map(function(objeto){
                return objeto.clave;
            }).indexOf(clave);

            app.lista.splice(index,1);
        }
    }
});