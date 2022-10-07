const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));
// Le dossier qui est utilisé sera le dossier 'public'. Et il va contenir mes fichiers statiques.

app.get('/', (req, res) => { 
    res.send('Hello, world!'); 
})

app.get('/bonjour', (req, res) => { 
    res.send('<h1>Bonjour tout le monde ! </h1>'); 
})

app.get('/fichier/html', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/page2.html'));
    console.log("__dirname", __dirname); 
    console.log(path.join(__dirname, 'views/page2.html')); 
})

app.listen(port, ()=> {


    console.log(`serveur lancé sur le port ${port}`);
})