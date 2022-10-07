const http = require('http')
// http est un module de Node permettant de gérer un serveur HTTP, CAD un serveur web sur lequel on va pouvoir lancer des requêtes.

const hostname = '127.0.0.1'
const port = 3000 ;

const server = http.createServer((req, res) => { // req => requête et res => response
    res.statusCode = 200; // code standardisé pour dire Ok la réponse est bonne et tout s'est bien déroulé.
    res.setHeader('Content-Type, text/html'); // une méta donnée non visible
    res.end('Hello world!'); // contenu textuel visible

}) // On a utilisé la méthode createServer de notre module http pour créer notre serveur

//B - démarrer le serveur

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})