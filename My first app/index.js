const express = require("express");
const path = require('path');
const args = require("./args");
const ejs = require('ejs');

const app = express();
// Exécute l'appel de la librairie express JS
const port = args.port;

// Explique à express que les fichiers de vue sont HTML (extension .html)
app.engine('.html', ejs.__express);

// Définition du répertoire "views"
app.set('views', path.join(__dirname, 'views'));

// Définition du moteur de rendu
app.set('view engine', 'html');


// Page routing
// --

// Homepage

app.get('/', (request, response) => {
    // response.send('Hello World!');
    response.render('homepage');
});

// Contact
app.get('/contact', (request, response) =>   {
    // response.send('Page de contact');
    response.render('contact');

});

// About us 
app.get('/about-us', (request, response) => {
    // response.send('Page Qui sommes-nous ?');
    response.render('about');
});


// Server start
// --
app.listen(port, () => {
    // Demarre serveur web sur le local host
    console.log(`Example app listening on port ${port}`);
});