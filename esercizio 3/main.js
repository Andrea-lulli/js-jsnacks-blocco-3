// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N,
//  all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

let stampa = document.getElementById("stampa")

let numero = parseInt(prompt("inserisci numero"))

for (let i = 0; i < numero; i++) {

    let array = [i]

    for (let i = 0; i < 10; i++) {
        array = Math.floor(Math.random() * 10)
        
        stampa.innerHTML += array
        
    }
}