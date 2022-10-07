const mongoose = require('mongoose');
const User = require ('./models/User');

async function main() {

    await mongoose.connect('mongodb://localhost/ex_mongoose');

    console.log('connexion ok');

        const users = await User.find();
        // console.log(users);   // __v pour versionkey par défaut à 0 à la création

        const jean = await User.findById('6319c0df365082a09d4c2b6b');
        // console.log(jean);

        const alice = await User.find({firstname:'Alice'});
        // console.log(alice);

        const age = await User.find({age: {$gte: 15}});   // great than or egal >=
        console.log(age);

        // Voir doc : https://mongoosejs.com/docs/api.html#model_Model-find

    mongoose.disconnect();
}

main();