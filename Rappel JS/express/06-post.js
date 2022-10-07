const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));


// documentation: http://expressjs.com/en/api.html#req.body

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/form', (req, res)=> { // Le '/form' correspond au chemin de 'action=/form' du formulaire.

    console.log(req.body);
    // la méthode body va nous permettre de récupérer ce qui a été envoyé via le form

    // Ajouter une condition
    if(req.body.password == '1234') {
        res.send('Connexion réussie!');
    }else{
        res.redirect('/fichier/html');
    }

    res.send('Formulaire traité !');
})

app.get('/', (req, res)=> {
    res.send('Hello, world!');
})

app.get('/fichier/html', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views/page3.html'));
})

app.listen(port, ()=> {

    console.log(`serveur lancé sur le port ${port}`);
})