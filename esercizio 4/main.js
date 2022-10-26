// //*Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati a
// lla festa del grande Gatsby, chiedi all’utente il 
// suo nome e comunicagli se può partecipare o no alla 
// festa.
// Interrompi il ciclo appena il nome è stato trovato.



let nomeInvitati = ["andrea", "luca", "mirko", "gigi", "alberto"];



let listaInvitati = document.getElementById("stampa")

let richiesta = prompt("inserisci nome")


for (let i = 0; i < nomeInvitati.length; i++) {



    if (richiesta == nomeInvitati[i]) {

        stampa.innerHTML = "nome in lista";
        break;

    } else if (richiesta != nomeInvitati[i]) {
        stampa.innerHTML = "non puo partecipare alla festa";

    }

}

