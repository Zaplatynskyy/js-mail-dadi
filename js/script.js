// * Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// * Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Controllo email
let button = document.querySelector('.row.mail .btn');
let emailUtenti = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'qui90@gmail.it', 'quo90@hotmail.com', 'qua90@hotmail.it'];

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
            document.querySelector('.row.table').classList.add('display_on');
            document.querySelector('.row.mail').classList.add('display_off');
        } else {
            message.classList.add('red');
            message.innerHTML = 'Accesso NON Consentito';
        }

        document.getElementById('mail').value = '';
    }
);

// Gioco a dadi

let play = document.querySelector('.row.table .btn');
play.addEventListener("click",
    function () {
        let numeroPc = Math.floor(Math.random() * 6 + 1);
        let numeroUtente = Math.floor(Math.random() * 6 + 1);
        document.getElementById('num_pc').innerHTML = numeroPc;
        document.getElementById('num_utente').innerHTML = numeroUtente;
        
        let messaggio = document.getElementById('messaggio');
        messaggio.innerHTML = 'Pareggio!!';
        messaggio.className = 'orange';

        if (numeroPc < numeroUtente) {
            messaggio.innerHTML = 'Hai vinto!!!';
            messaggio.className = 'green';

        } else if (numeroPc > numeroUtente) {
            messaggio.innerHTML = 'Hai perso!';
            messaggio.className = 'red';
        } 
    }
);





