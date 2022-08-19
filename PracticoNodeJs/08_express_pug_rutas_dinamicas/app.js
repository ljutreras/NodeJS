const express = require('express');
const app = express();
const pug = require('pug');

app.use(express.static(__dirname + '/public'));//Utiliza una ruta especifica(directorio actual + '/carpetaEspecifica')

camisetasLista = [
    {
        color:"Rojo",
        imagen : "/assets/camisetaRoja.png"
    },
    {
        color:"Azul",
        imagen : "/assets/camisetaAzul.jpg"
    },
    {
        color:"Verde",
        imagen : "/assets/camisetaVerde.jpg"
    },
    {
        color:"Negra",
        imagen : "/assets/camisetaNegra.jpg"
    }
]

app.get('/',function(peticion, respuesta){

    respuesta.render('index.pug',{//sintaxis JSON
        titulo: "TEST", //Valor dinamico que llevaremos a PUG con #{clave}
        textoParrafo: "Esto es un parrafo"
    });

});

app.get('/tienda.html',function(peticion,respuesta){
    respuesta.render('tienda.pug',{
        camisetas : camisetasLista
    })
})

app.get('/tienda/comprar/:color', function(peticion, respuesta){
    
    let datosDeCamiseta = camisetasLista.filter(function(item){//Filtramos la informacion del array camisetasLista, items hace referencia a los elementos del arreglo
        if( peticion.params.color == item.color){ // SI el parametro color == al elemento color del array
            return item //Retornamos la informacion del elemento
        }
    })
    
    respuesta.render('detalles.pug',{
        color: peticion.params.color,
        datos : datosDeCamiseta
    })
})

app.listen(3000,function(){
    console.log("puerto 3000")
});

/* De haber más archivos index, el sistema tendra en cuenta el HTML, en este caso necesitamos el PUG */