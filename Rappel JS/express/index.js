const express = require('express');
// on va rechercher le code d'express qui est inséré dans ce fichier via la constante express.

const app = express(); // initialisation d'express sous forme de fonction, elle-même stockée dans une variable.
const port = 3000;

app.get('/', (req, res) => { //1er argument -> '/' pour la route ici notre index.js(accueil)

    res.send('Hello, world!'); // On envoie la réponse client.

})
// on construit la route

app.listen(port, ()=> {

    //Listen = écoute ce qui va se passer sur le port (argument 1), 
    // puis éxécute cette fonction CALLBACK au lancement du serveur.

    console.log(`serveur lancé sur le port ${port}`);
})