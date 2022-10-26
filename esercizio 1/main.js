//*Snack1*
// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli
// nell’array fino a quando la somma degli elementi
// è minore di 50.


let numeri = [""]

let som = 0

for (let i = 0; i < numeri.length; i++) {

    let richiestaNumeri = parseInt(prompt("Inseirisci Numero"));
    som = som + richiestaNumeri


    if (som <= 50) {
        numeri.push(richiestaNumeri)
        console.log(som);
        console.log(numeri);
    } else {
        console.log("limite raggiunto");
    }
}

