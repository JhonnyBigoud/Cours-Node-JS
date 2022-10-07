const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.get('/', (req, res) => { 
    res.send('Hello, world!'); 
})

app.get('/bonjour', (req, res) => { 
    res.send('<h1>Bonjour tout le monde ! </h1>'); 
})

app.get('/fichier/html', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/page1.html'));

    //sendFile va aller chercher un fichier dans notre arborescence l'attribut 'path' et la méthode 'join' va nous permettre de concaténer notre route.js au chemin de page.html.
    // url: /fichier/html/views/page1.html

    console.log("__dirname", __dirname); // chemin du fichier
    console.log(path.join(__dirname, 'views/page1.html')); // concaténation
})

app.listen(port, ()=> {


    console.log(`serveur lancé sur le port ${port}`);
})