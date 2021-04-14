function verifica(){

    var validita = false

    do {
        var parolaDaVerificare = prompt("Inserisci la parola di cui vuoi verificare le palindromia");
    
        var ricercaNumero = parseInt(parolaDaVerificare)
    
        if (Number.isNaN(ricercaNumero) && parolaDaVerificare) { validita = true };
    
    } while (!validita);
    
    var parolaDaVerificare = parolaDaVerificare.toLowerCase();

    return parolaDaVerificare

}

var parolaDaVerificare = verifica(parolaDaVerificare)

 
var lettereDellaParola = parolaDaVerificare.split("");

console.log(lettereDellaParola);


function reverser(testo) {

    var testoAlContrario = [];
    for (var i = testo.length - 1; i >= 0; i--) {
        testoAlContrario.push(testo[i]);
    }
    return testoAlContrario;
}



var lettereDellaParolaAlContrario = reverser(lettereDellaParola)

console.log(lettereDellaParolaAlContrario)




function confrontoArray(primoArray, secondoArray) {

    var identita = false

    for (var i = 0; i < primoArray.length; i++) {


        var elemento = primoArray[i];
        var elementoDue = secondoArray[i]

        console.log(elemento, elementoDue)

        if (elemento === elementoDue) { identita = true } else { identita = false }

    }

    return identita

}

console.log(confrontoArray(lettereDellaParola, lettereDellaParolaAlContrario))

if(confrontoArray(lettereDellaParola, lettereDellaParolaAlContrario)){
    console.log("La parola inserita: " + parolaDaVerificare  + " è palindroma")
} else{
    console.log("La parola inserita: " + parolaDaVerificare + " non è palindroma")
}