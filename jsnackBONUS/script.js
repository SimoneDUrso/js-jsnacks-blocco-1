let addition = 0;

for (let i = 0; i < 10; i++) {
    let numero = (prompt("Inserisci un numero:"));

    numero = parseFloat(numero);

    if (numero === numero) {
        addition += numero;
    }

    else {
        console.log("Il valore inserito non è un numero valido. Verrà ignorato.");
    }
}

console.log(`La somma totale dei numeri inseriti è: ${addition}`);