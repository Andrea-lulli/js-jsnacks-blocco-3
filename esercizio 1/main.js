//*Snack1*
// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli
// nell’array fino a quando la somma degli elementi
// è minore di 50.


let numeri = [""]

 for (let i = 0; i < numeri.length ; i++) {

    let richiestaNumeri = parseInt(prompt("Inseirisci Numero"));
    numeri.push(richiestaNumeri)  
        console.log(numeri);
    if (numeri[i] <= 50 ) {
        console.log("basta");
    }

}
