const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));



app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.post('/form', (req, res)=> { 

    console.log(req.body);

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


app.use((req, res)=> {

    res.status(404).send("Erreur 404, boule non trouvé");
})

app.listen(port, ()=> {

    console.log(`serveur lancé sur le port ${port}`);
})