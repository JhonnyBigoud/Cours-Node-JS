const axios = require('axios');
const {response} = require('express');

async function main() {

    const currency = process.argv[2] ? process.argv[2] : 'USD';

    try {

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