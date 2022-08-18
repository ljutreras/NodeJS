const express = require('express');
const app = express();
const pug = require('pug');

app.use(express.static(__dirname + '/public'));//Utiliza una ruta especifica(directorio actual + '/carpetaEspecifica')

app.get('/',function(peticion, respuesta){

    respuesta.render('index.pug');//Renderizamos el PUG

});

app.listen(3000,function(){
    console.log("puerto 3000")
});

/* De haber más archivos index, el sistema tendra en cuenta el HTML, en este caso necesitamos el PUG */