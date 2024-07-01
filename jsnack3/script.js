// CHIEDIAMO ALL'UTENTE DI INSERIRE 4 CIFRE NEL PROMPT
let numero = prompt("Inserisci un numero di 4 cifre:");

// VERIFICHIAMO CHE IL NUMERO SIA DI 4 CIFRE
if (numero.length !== 4) {
    document.getElementById("addition").innerText = ("Cifra non valida, inserisci un numero di 4 cifre.")
}

else {
    // SPLITTIAMO LE SINGOLE CIFRE
    let digit = numero.split("");

    // ORA SOMMIAMO LE SINGOLE CIFRE
    let addition = 0;

    for (let i = 0; i < digit.length; i++) {
        addition += parseInt(digit[i]);
    }


}