//VERIFICA SE IL TESTO INSERITO CORRISPONDE A "PARI" O "DISPARI"
function verifica(testo) {
    var corrispondenza = false
    if (testo === "pari" || testo === "dispari") {
        corrispondenza = true
    } 
    return corrispondenza
}

//ESEGUE UN CICLO FINCHE' NON SCRIVO PARI O DISPARI
do {
    var decisione = prompt("Decidi se vuoi i pari o dispari");

} while (!verifica(decisione))

console.log("primo controllo: ", (verifica(decisione)))
console.log(decisione)

//VERIFICA SE UN NUMERO E' COMPRESO TRA 1 E 5

function verificaDue(numeroUtente) {
    numeroUtente = parseInt(numeroUtente);
    var compreso = false

    if (numeroUtente >= 1 && numeroUtente <= 5) {
        compreso = true
    } 
    return compreso
}
//ESEGUE UN CICLO FINCHE' NON INSERISCO UN  NUMERO TRA 1 E 5
do {
    var inserimenntoUtente = prompt("Inserisci un  numero tra 1 e 5");

} while (!verificaDue(inserimenntoUtente));

console.log("secondo controllo: ", (verificaDue(inserimenntoUtente)));

//CONVERTE L'INSERIMENTO IN NUMERO REALE
inserimentoUtente = parseInt(inserimenntoUtente);
console.log("il nmumero inserito è: ", inserimenntoUtente)

//GENERA NUMERO RANDOM INTELLIGENZA ARTIFICIALE
var numeroAI = parseInt((Math.random() * 5) + 1);

console.log("il numero genarto è: ", numeroAI)

//SOMMA DI VALORI NUMERICI
var somma = numeroAI + inserimentoUtente

//VERIFICA SE UN NUMERO E' PARI
function verificaTre(sePari) {

    var pari = false
    if (sePari % 2 === 0) {
        pari = true
    }
    return pari
}

console.log("Il risultato della somma è pari: ", (verificaTre(somma)));

//SCRIVE NEL CONSOLE LOG LE OPERAZIONI 
if (verificaTre(somma)) {
    console.log("il numero " + somma + " è pari, è la somma del tuo numero " + inserimentoUtente + " e il numero generato " + numeroAI);
    var risultato = "pari"

} else {
    console.log("il numero " + somma + " è dispari, è la somma del tuo numero " + inserimentoUtente + " e il numero generato " + numeroAI)
    var risultato = "dispari"
}

//ESITO PARTITA
if (risultato === decisione) {
    console.log("HAI VINTO!!!!")
} else { console.log("HAI PERSO!!!") }