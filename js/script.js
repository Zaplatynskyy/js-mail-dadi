// * Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// * Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Controllo email
let button = document.querySelector('.btn');
const emailUtenti = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'qui90@gmail.it', 'quo90@hotmail.com', 'qua90@hotmail.it'];

button.addEventListener("click",
    function() {
        let emailUtente = document.getElementById('mail').value;
        const message = document.querySelector('.message');
        message.className = 'message';

        let booleano = false;

        for(let i = 0; i < emailUtenti.length; i++) {
            if (emailUtente == emailUtenti[i]) {
                booleano = true;
            }
        }

        if (booleano) {
            message.classList.add('green');
            message.innerHTML = 'Accesso Consentito';
        } else {
            message.classList.add('red');
            message.innerHTML = 'Accesso NON Consentito';
        }

        document.getElementById('mail').value = '';
    }
);

// Gioco a dadi
let numeroPc = Math.floor(Math.random() * 6 + 1);
let numeroUtente = Math.floor(Math.random() * 6 + 1);

console.log('risultato del computer', numeroPc);
console.log('risultato dell\'utente', numeroUtente);

if (numeroPc < numeroUtente) {
    console.log('Hai vinto!!!');

} else if (numeroPc > numeroUtente) {
    console.log('Hai perso!');

} else if (numeroPc == numeroUtente) {
    console.log('Pareggio!!');
    
}





