const mongoose = require('mongoose');
const User = require ('./models/User');

async function main() {

    await mongoose.connect('mongodb://localhost/ex_mongoose');

    console.log('connexion ok');

    const alice = await User.findById('6319c3c49080d86153134ab2');
    // console.log(alice);

    // alice.lastname = "Dubois";   // Modification de la structure et enregistrement - méthode 1
    // console.log(alice);
    // await alice.save();

    // méthode 2 - https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate
    const id = "6319c3c49080d86153134ab2";
    const res = await User.findByIdAndUpdate(id, {firstname: 'Olivia'});
    // console.log(res);

    const res2 = await User.updateMany(
        {email: "jean@exemple.ord"}, 
        {lastname: "Dubois"}
    )

    mongoose.disconnect();
}

main();