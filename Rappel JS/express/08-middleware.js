const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));

/**Qu'est-ce qu'un MIDDLEWARES ?
 * Il s'afit d'un logiciel qu'on va éxécuter au milieur de notre programme
 * Pour Express les middlewares sont simplement des petits morceaux de code
 * qui vont être utilisé le long de notre programme
 * (Executé à un certain  instant dans le cycle de vie du traitement éffectué par notre programme)
 * Cette notion de cycle de vie est importante puisque c'est sur elle que va reposer notre notion 
 * de MIDDLEWARES
 * 
 * En grs un middleware est une fonction qui va avoir accès à 3 choses :
 * 
 * syntaxe:
 *  function(req, res, next){
 * 
 *  }
 * 
 * paramètres:
 * req : déjà vu
 * res : dejà vu
 * next : ? (on va le voir)
 * 
 * Appeler un middleware :
 * app.use( notre_middleware); app.get(notre_middleware); app.post(notre_middleware)
 */

    //création d'un middleware
    const logRequest = (req, res, next)=>{

        console.log(`${new Date().toLocaleDateString()} - 
        [${req.method}] ${req.originalUrl}`);

        req.user = {id : 5};
        /**Le middleware nous donne la possibilité de créer une propriété et d y indiquer une valeur  
         * Cette propriété pourra être utilisée dans un app.use/get ou post
        */

        next();
    }

    //Appel à notre middleware
    app.use(logRequest);


app.get('/',logRequest, (req, res) =>{
    /**
     * On peut placer notre middleware dans l'execution d'une route
     * cela equivaut à demander à Express :
     * Lorsque tu seras qur cette URL, éxécute moi ce bourt d'instruction à ce moment precis
     */

    res.send('Hello word !');
})



app.get('/bonjour', logRequest, (req, res) => {
    
    console.log(req.user); //notre id: 5 est donc utilisable ici

    res.send('<h1>Bonjour tout le monde ! </h1>');
});

app.get('/articles/:id', (req, res) =>{
    res.send(`Article #${req.params.id} du blog`);

})


app.get('/Bonjour', (req, res) => {
    const text = `Bonjour ${req.query.prenom} ${req.query.nom}`;
    res.send(text);
})


app.get('/fichier/html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/page2.html'));
    console.log("__dirname", __dirname);
    console.log(path.join(__dirname, 'views/page2.html'));
})



app.listen(port, ()=>{

    console.log(`serveur lancé sur le port ${port}`);
})