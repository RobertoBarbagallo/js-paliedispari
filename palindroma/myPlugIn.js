var validita = false

do {
    var parolaDaVerificare = prompt("Inserisci la parola di cui vuoi verificare le palindromia");

    var ricercaNumero = parseInt(parolaDaVerificare)

    if (Number.isNaN(ricercaNumero)) { validita = true };

} while (!validita);

 
var lettereDellaParola = parolaDaVerificare.split("");

console.log(lettereDellaParola);


function reverser(lettereDellaParola) {

    var lettereDellaParolaAlContrario = [];
    for (var i = lettereDellaParola.length - 1; i >= 0; i--) {
        lettereDellaParolaAlContrario.push(lettereDellaParola[i]);
    }
    return lettereDellaParolaAlContrario;
}

var lettereDellaParolaAlContrario = reverser(lettereDellaParola)

console.log(lettereDellaParolaAlContrario)

var primoArray = lettereDellaParola;
var secondoArray = lettereDellaParolaAlContrario;


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

console.log(confrontoArray(primoArray, secondoArray))

if(confrontoArray(primoArray, secondoArray)){
    console.log("La parola inserita: " + parolaDaVerificare  + " è palindroma")
} else{
    console.log("La parola inserita: " + parolaDaVerificare + " non è palindroma")
}