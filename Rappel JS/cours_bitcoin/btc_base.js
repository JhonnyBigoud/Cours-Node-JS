#!/usr/bin/env node
// console.log('Hello World !');

const axios = require('axios');
const {response} = require('express');
// Nous créons une constante que nous nommons axios dans laquelle nous allons chercher le module 'axios'.

async function main() {

    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    //get nous permet de récupérer l'URL de notre API
    //await : attend la promesse avant d'éxécuter la suite du programme

    // console.log(reponse);
    const updateAt = response.data.time.updated; // récupère la date actuel.

    const rate = response.data.bpi['EUR'].rate;
    // rate = cours actuel, afficher le console.log(rate) pour avoir l affichage de l objet EUR.
    console.log(` > 1 BTC = ${rate} EUR (${updateAt})`);

};

main();