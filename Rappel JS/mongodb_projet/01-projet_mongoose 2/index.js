const mongoose = require('mongoose');

//récuperation de notre modèle crée dans le dossier models
const User = require('./models/User');

 async function main(){
    // console.log('Hello');

    //1 - se connecter a mongodb et créer une bdd : mongoose_ex
    await mongoose.connect('mongodb://localhost/mongoose_ex');

    console.log("connexion ok")

            //Utilisation de notre modele : méthode 1
            const user1 = new User({
                email:"jean@exemple.com",
                firstname:'Jean',
                lastname:"Dupont",
                age: 38,
            });

            await user1.save();

            //methode 2:
            // const user2 = await User.create({
            //     email: "alice@labelle.org",
            //     firstname: "Alice-moli",
            //     age: 25,
            // })
            // //Plus besoin de passer par le .save pour concrétiser notre création

    console.log(user2);

            
            //la méthode .save est fourni directement par mongoose
    

    mongoose.disconnect();

};

main();
