// *Snack2*
// Il software deve chiedere per 5 volte all’utente
//  di inserire un numero.
// Il programma stampa la somma di tutti i numeri 
// inseriti.


let stampaNumeri = document.getElementById("stampa")

let som = 0

let i = 0

while (i < 5) {

    let richiesta = parseInt(prompt("inseiriere numero"))

    som = som + richiesta
    console.log(som);
    

i++    
}

stampaNumeri.innerHTML += `Il totale somma è: ${som}`


// for (let i = 0; i < 5; i++) {

//     let richiesta = parseInt(prompt("inseiriere numero"))

//     som = som + richiesta
//     console.log(som);
    
// }















