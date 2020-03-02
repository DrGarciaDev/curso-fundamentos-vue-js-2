var app = new Vue({
    el:"#app",
    data:{
        clave:'',
        titulo:'',
        descripcion:'',
        lista:[],
        txtBuscar:''
    },
    computed:{
        listaFiltrada:function(){
            var arreglo = this.lista;
            var consulta = this.txtBuscar;

            if(consulta !== ''){
                arreglo = arreglo.filter(function(objeto){
                    return (
                        objeto.titulo.toLowerCase() + '' + objeto.descripcion.toLowerCase()
                    ).indexOf(consulta.toLowerCase()) > -1
                });
            }

            return arreglo;
        }
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