// * Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// * Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

let button = document.querySelector('.btn');
const emailUtenti = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'qui90@gmail.it', 'quo90@hotmail.com', 'qua90@hotmail.it'];

button.addEventListener("click",
    function() {
        let emailUtente = document.getElementById('mail').value;
        console.log('Email inserita: ' + emailUtente);

        let booleano = false;

        for(let i = 0; i < emailUtenti.length; i++) {
            if (emailUtente == emailUtenti[i]) {
                booleano = true;
            }
        } 

        if (booleano) {
            console.log('accesso consentito');
        } else {
            console.log('accesso non consentito');
        }
        
    }
);

