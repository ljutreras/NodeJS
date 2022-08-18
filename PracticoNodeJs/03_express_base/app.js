const express = require('express');//Libreria Express
const app = express(); //aplicacion de tipo express, gestiona las rutas y los elementos dentro de express

//Gestiona la aplicacion de tipo get
app.get('/', function(peticion, respuesta){//cada vez que se active la raiz se ejecuta la funcion
    respuesta.send("Hola mundo con express")
})

app.listen(3000,function(){
    console.log("escuchando en el puerto 3000")
})