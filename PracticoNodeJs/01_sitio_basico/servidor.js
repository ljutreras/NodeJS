var http = require('http'); //Libreria de node que nos permite utilizar procesos de HTTP

http.createServer(function ( request, respuesta){ //Creamos el servidor junto a una funcion(Respuesta debe ser el segundo parametro)
    respuesta.writeHead(200,{'Content-Type':'text/plain'});//tipo de documento(200 codigo HTTP todo funciona bien), Tipo de contenido
    respuesta.write("Hola Nginx - Prueba1");//Respuesta a escribir
    respuesta.end();//Cerrar la respuesta

}).listen(3000,'localhost');//Escuchar un puerto especifico (Puerto no en uso, 'localhost)

console.log("El servidor se muestra en http://localhost:3000");

//Se debe reiniciar NODE cada vez que ejecutemos un cambio

/*
npm install -g nodemon
nodemon servidor.js

nodemon hace que no tengas que detener el proceso en cada cambio, lo hace automaticamente
*/

/*  WWW.BREW.SH 
    instalador de paquetes*/