const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) =>{
    res.render('pages/home');
        /**ici ejs fait tout tout seul, on lui indique simplement la page à retourner 
     * comment ?
     * Express anticipe le fait que nous allons créer un dossier "views" qui va contenir 
     * des fichiers qui lui serviront (paramètrage par défaut => 'view engine' + 'ejs'(fichier en .ejs))
     * Ainsi, lorsque nous indiquons 'home' dans le render, 
     * il va simplement chercher le fichier correspondant
    */
})

app.get('/hello/:name', (req, res) =>{

    // Méthode 1
    // const data = {

    //     name: 'Paul', 
    // }

    // Méthode 2
    // const data = {
    //    name : req.params.name,

    // }

    // res.render('pages/hello', data);

    res.render('pages/hello', {name: req.params.name});
    // Tout ce qui est dans l'url est dans params.
})







app.listen(port, ()=> {
    console.log(`serveur lancé sur le port ${port}`);
})
// Toujours le laisser en bas.