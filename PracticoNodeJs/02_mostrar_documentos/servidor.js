const http = require('http');
const fs = require('fs'); //Fail System


http.createServer(function(peticion, respuesta){

    respuesta.writeHead(200, {'Content-Type':'text/html'});

    switch (peticion.url){ //Si el usuario se encuentra en la ruta: ...
        
        case '/':
            plantilla = "inicio.html";
            break;
        case '/nodejs':
            plantilla = "sobreNode.html";
            break;
        default:
            plantilla = '404.html';
            break;
    }

    fs.readFile("./plantillas/" + plantilla, function(error, datos){//en caso de entrar a '/' plantillas/index.html , case /nodejs  plantillas/sobreNode.html

        respuesta.write(datos);
        respuesta.end();

    } ); 
}).listen(3000,'localhost');