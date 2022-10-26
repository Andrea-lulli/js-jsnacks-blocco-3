// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N,
//  all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

let stampa = document.getElementById("stampa")

let numero = parseInt(prompt("inserisci numero"))

let i = 0

while (i < numero) {

    let array = [i]

    let x = 0

    while (x < 10) {

        array = Math.floor(Math.random() * 100)

        stampa.innerHTML += array
        console.log(array);

        x++    
        }
i++    
}






// for (let i = 0; i < numero; i++) {

//     let array = [i]

//     for (let x = 0; x < 10; x++) {
//         array = Math.floor(Math.random() * 100)

//         stampa.innerHTML += array
//         console.log(array);
//     }
    
// }