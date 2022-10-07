const axios = require('axios');
const {response} = require('express');

async function main() {


    try {

        let currency;

        if(process.argv[2]) { // si mon argument 2 existe
            
            currency = process.argv[2].toUpperCase;
            // On s'assure ainsi d'utiliser la méthode toUpperCase sur variable non vide
        }else{
            currency = 'USD';
        }
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

        const {data} = await axios.get(url);

        if(!data.bpi[currency]) {

            throw new Error('Devise inconnue');
        }

        const updateAt = data.time.updated;
        
        const rate = data.bpi[currency].rate;

        console.log(` > 1 BTC = ${rate} ${currency} (${updateAt})`);

}
    catch(err) {


        console.log(err.toString());
    }
}

main();