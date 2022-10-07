const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

//3 - une fois express-session installé, nous recuperons notre session ainsi:
const session = require('express-session');

app.use(express.static('public'));


//1- créeons ensemble un compteur de visite qui va nous permettre de compter ne nb de visites sur notre page

let views = 0; //nous initialisons notre var à 0 vues par défaut


app.get('/', (req, res) =>{
    views++;//A chaque x que cette URL sera chargé, views sera incrémenté de +1
    res.send(`Hello word ! vous avez consulté cette page : ${views} fois`);
    /**
     * A present nous avons bien un compteur, mais il est global:
     * Lorsk nous changéons de navigateur, le compte ne s'arrête pas
     * alors que nous venons d'arriver sur la page.
     * Pour ressoudre ce problème, nous allons faire un compteur personnalisé pour chaque utilisateur
     */
})


        //2 - editer notre session:
        //code aléatoire pris sur : https://randomkeygen.com/
        app.use(session({
            secret : 'gdAelCqLz7',
            resave: false,
            saveUninitialized : true

        }))

app.get('/bonjour/:prenom', (req, res) => {
    const text = `Bonjour ${req.params.prenom}`;
    res.send(text);
});

app.get('/articles/:id', (req, res) =>{
    res.send(`Article #${req.params.id} du blog`);
})


app.get('/Bonjour', (req, res) => {
    const text = `Bonjour ${req.query.prenom} ${req.query.nom}`;
    res.send(text);

})

app.get('/home', (req, res) =>{

    if(!req.session.views){
        req.session.views = 0;//valeur par défaul
    }

    req.session.views++;
    res.send(`Hello world ! vous avez consulté cette page : ${req.session.views} fois`)
})


app.get('/fichier/html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/page2.html'));

})



app.listen(port, ()=>{

    console.log(`serveur lancé sur le port ${port}`);
})