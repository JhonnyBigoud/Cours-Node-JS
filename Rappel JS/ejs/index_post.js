const express = require('express');
const app = express();
const port = 3000;

const articles = [

    {
        title: 'Débuter avec Node.js',
        category: 'Developpement web',
    },
    {
        title: 'Node.js vs PHP',
        category: 'Developpement web',
    },
    {
        title: 'Les sockets en C',
        category: 'Programmation',
    },
    {
        title: 'Quel système d\'exploitation utiliser ?',
        category: 'Informatique',
    },

]

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) =>{
    res.render('pages/home');
})

app.get('/hello/:name', (req, res) => {

    res.render('pages/posts_list', {name: req.params.name});
})


app.get('/posts', (req, res) => {

    res.render('pages/posts_list', { posts : articles});
})


app.listen(port, ()=> {
    console.log(`serveur lancé sur le port ${port}`);
})