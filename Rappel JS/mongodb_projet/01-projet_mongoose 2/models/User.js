//https://mongoosejs.com/docs/guide.html#models

const mongoose = require('mongoose');
const {Schema } = mongoose; //récupérér l'objet Schema depuis monngoose dans la variable Schema


const userSchema = new Schema({

    // email : String,
    // firstname : String,
    // Lastname: String,
    // age: Number,

    //passer des propriétés via des objets
    email: {type : String, unique:true},
    firstname: {type : String, require:true},
    lastname: String,
    age: {type : Number, min: 0},
    /**
     * Ensemble de regles/contraintes que l'on va pouvoir préciser à mongoose
     */
})

// A partir de notre Schema nous allons pouvoir créer notre modèle

//Un modele dans mongoose ==> une collection dans mongoDb
const User = mongoose.model('User', userSchema);
/**
 * 1er arg : nom du modèle (= nom du fichier)
 * 2eme arg : nom du schema
 */


module.exports = User;//Nous exportons nortre model afin de pouvoir l'utiliser depuis au autre script