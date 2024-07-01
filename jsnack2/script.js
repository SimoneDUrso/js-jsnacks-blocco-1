// CREAZIONE ARRAY VUOTO
let numeriDispari = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Controllo se il numero è dispari
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}