// // class voiture { // En JS, une classe n'est rien d'autre qu'un TEMPLATE de notre Objet

// //     constructor(marque, année, kilométrage) { // méthode propre à la classe
// //         this.marque = marque ; // "La marque de l'objet crée prend la marque passée en paramètre.
// //         this.année = année ;
// //         this.kilométrage = kilométrage ;

// //     }

// //     afficherInfo() {
// //         console.log("====Informations =====");
// //         console.log(`>Marque: ${this.marque}`);
// //         console.log(`>Année: ${this.année}`);
// //         console.log(`>Km: ${this.kilométrage}`);
// //     }
// // }


// // const v1 = new Voiture("Peugeot", 2013, 250000);

// // console.log(v)
// // v1.afficherInfo();
// // v1.marque = "Hyundaï";
// // v1.année = 2010;
// // v1.kilométrage = 11000;
// // v1.afficherInfo();

// // ---------------------------------------------------------------------------------------------


// // console.log(" 1 - lancement Timer");

// // setTimeout(() => {
// //     console.log("2 - Hello");
// // }, 2000);

// // console.log("3 - Lancement terminé");

// // ---------------------------------------------------------------------------------------------

// function attendre2secondes() {
//     new Promise((resolve, reject) => {
//     // soit elle est résolue, soit elle est rejetée.
//         setTimeout(() => {
//             console.log("Time éxécuté");

//             resolve("résolu");
//         }, 2000)
//     }); 
// }

// console.log("1- lancement timer");
// // attendre2secondest().then((data) => {
// attendre2secondes.then((data) => {
//     // Attend d'abord la promesse puis ENSUITE(then), éxcute moi l'instruction(fonction anonyme)
//     console.log(data); // La variable data ici va nous retourner le contenu de notre resolve, ici la chaîne de caractères "résolu".
//     console.log("3- Timer Terminé");
// })


Function attendre2secondes2(){


    new Promise((resolve, reject) =>{

                setTimeout(()=>{

                    console.log("2 - Timer exécuté");

                    resolve("resolu")

                }, 2000);

            });
}

async function main(){

    console.log ("1 - lancement timer");
    

    await attendre2secondes2() ; // Le await ne s'utilise qu'en cas de promise dans la fonction.
        //En gros attend obligatoirement que la promesse soit tenu

    console.log(" 3 - Fin);
}


