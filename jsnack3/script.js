// CHIEDIAMO ALL'UTENTE DI INSERIRE 4 CIFRE NEL PROMPT
let numero = prompt("Inserisci un numero di 4 cifre:");

// VERIFICHIAMO CHE IL NUMERO SIA DI 4 CIFRE
if (numero.length !== 4) {
    document.getElementById("addition").innerText = ("Cifra non valida, inserisci un numero di 4 cifre.")
}
