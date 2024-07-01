const nomiAutorizzati = ["simone d'urso", "laura corrado", "alessandro farina", "gioele micca", "rivaldo gjoni"];

let btn_verifica = document.getElementById("btn-verifica");
btn_verifica.addEventListener("click", function () {

    let nomeInput = document.getElementById("nome").value;
    let autorizzato = false;

    for (let i = 0; i < nomiAutorizzati.length; i++) {

        if (nomiAutorizzati[i] === nomiInput) {
            autorizzato = true;
        }
    }

})