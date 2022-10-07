const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => { 
    res.send('Hello, world!'); 
})

app.get('/bonjour/:prenom', (req, res) => { 


    console.log(req.params);

    const text = `Bonjour ${req.params.prenom}`;

    res.send(text);
})

app.get('/articles/:id', (req, res) => {
    console.log(req.params);
    res.send(`Article #${req.params.id} du blog`);

    console.log(req.params);
    console.log(req.query);
})

// On va adapter notre route "/bonjour..."
app.get('/bonjour', (req, res) => {

    console.log(req.params);
    console.log(req.query);

    //maintenant inscrire dans l'URL /bonjour?prenom=jean&nom=Dupont
    console.log(req.query);//vérifier dans la console

    const text = `Bonjour ${req.query.prenom} ${req.query.nom}`;
    res.send(text);
})

app.get('/fichier/html', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/page2.html'));
    console.log("__dirname", __dirname); 
    console.log(path.join(__dirname, 'views/page2.html')); 
})

app.listen(port, ()=> {

    console.log(`serveur lancé sur le port ${port}`);
})