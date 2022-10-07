const axios = require('axios');
const {response} = require('express');


async function main() {

    

    console.log(process.argv); 

    const currency = process.argv[2];

    console.log(currency);

    // const currency = process.argv[2];

    // console.log(currency);

    // const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

    // const updateAt = response.data.time.updated; 

    // const rate = response.data.bpi[currency].rate;


    // console.log(` > 1 BTC = ${rate} ${currency} (${updateAt})`);






}

main();