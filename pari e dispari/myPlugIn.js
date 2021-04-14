
function verifica(decisione) {

    var condizione = false

    if (decisione === "pari" || decisione === "dispari"); {
        condizione = true;
    }
    return condizione
}

console.log("primo controllo: ", (verifica(decisione)))

do {
    var decisione = prompt("Decidi se vuoi i pari o dispari");

} while (!verifica(decisione))


function verificaDue(numeroUtente) {

    var condizioneDue = false
    numeroUtente = parseInt(numeroUtente);

    if (1 <= numeroUtente <= 5) {
        condizioneDue = true;
    }
    return condizioneDue
}

do {
    var numeroUtente = prompt("inserisci un  numero tra 1 e 5");

} while (!verificaDue(numeroUtente));

console.log("secondo controllo: ", (verificaDue(numeroUtente)));

numeroUtente = parseInt(numeroUtente);

var numeroAI = parseInt((Math.random() * 5) + 1);

console.log(numeroAI)



var somma = numeroAI + numeroUtente

function verificaTre(somma) {

    var pari = false
    if (somma % 2 === 0) {
        pari = true
    }
    return pari
}

console.log("Il numero è pari: ", (verificaTre(somma)));

var risultato


if (verificaTre(somma)){
    console.log ("il numero " + somma + " è pari, è la somma del tuo numero " + numeroUtente + " e il numero generato " + numeroAI);
    risultato = "pari"

}else{
    console.log ("il numero " + somma + " è dispari, è la somma del tuo numero " + numeroUtente + " e il numero generato " + numeroAI)
    risultato = "dispari"
}


if (risultato===decisione){
    console.log("HAI VINTO!!!!")
}else{console.log("HAI PERSO!!!")}