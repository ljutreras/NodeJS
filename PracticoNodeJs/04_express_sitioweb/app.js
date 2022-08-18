const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));//Utiliza una ruta especifica(directorio actual + '/carpetaEspecifica')

app.get('/',function(peticion, respuesta){

    respuesta.sendFile('index.html');

});

app.listen(3000,function(){
    console.log("escuchando desde el puerto 3000")
});