const nomiAutorizzati = ["simone d'urso", "laura corrado", "alessandro farina", "gioele micca", "rivaldo gjoni"];

let btn_verifica = document.getElementById("btn-verifica");
btn_verifica.addEventListener("click", function () {

    let nomeInput = document.getElementById("nome").value;
    let autorizzato = false;

    for (let i = 0; i < nomiAutorizzati.length; i++) {

        if (nomiAutorizzati[i] === nomeInput) {
            autorizzato = true;
        }
    }

    // STAMPIAMO I MESSAGGI CORRISPONDENTI
    if (autorizzato === true) {
        document.getElementById("message").innerHTML = "Accesso consentito, puoi partecipare!";
    }

    else {
        document.getElementById("message").innerHTML = "Accesso negato, per favore non farmi chiamare il buttafuori.";
    }

})

let btnDelete = document.getElementById("delete")
btnDelete.addEventListener("click", function () {

    document.getElementById("message").innerHTML = "";
    document.getElementById("nome").value = "";
})