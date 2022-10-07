const mongoose = require('mongoose');
const User = require('./models/User');

async function main(){

    await mongoose.connect('mongodb://localhost/mongoose_ex');

    console.log('connexion ok');

            //1 - méthode 1 : récupération de l'utilsateur à supp
            // const olivia = await User.findById
            // ('6319c32bd98257a66d0921dd');
            // console.log(olivia);

            // await olivia.delete();

            //2 - méthode 2 : findOne
                // const jean = await User.findOne({
                // email: "jean@exemple.ord"
                // });
                // console.log(jean);

                // await jean.delete();

                    //création d'un nouveau doc
                    const user2 = await User.create({
                        email: "alice@labelle.org",
                            firstname: "Alice",
                            age: 25,
                    });
                    

mongoose.disconnect();
}

main();