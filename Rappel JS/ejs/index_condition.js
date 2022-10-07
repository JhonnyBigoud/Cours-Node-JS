const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) =>{
    res.render('pages/home');
})

app.get('/hello/:name', (req, res) => {

    res.render('pages/conditions', {name: req.params.name});
})




app.listen(port, ()=> {
    console.log(`serveur lancé sur le port ${port}`);
})