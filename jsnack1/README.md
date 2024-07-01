SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

<!-- SCOMPOSIZIONE PROBLEMA -->

1 - Creiamo un array con all'interno i nomi degli invitati alla festa;
2 - Creiamo una variabile per il bottone di verifica della mail;
3 - Diciamo alla variabile del bottone di restare in ascolto dell'evento "click";
4 - Creiamo dentro l'evento "click" due variabili, una chiamata "nomeInvitato" che prende il valore (.value) dell'input text che abbiamo messo nell'HTML e l'altra per una variabile FLAG con valore FALSE;
5 - Facciamo all'interno dell'evento "click" un ciclo FOR che faccia la verifica di tutti i valori presenti nell'array;
6 - ? SE nomeInvitato[i] ===  nomiAutorizzati;
    6.1 - variabile FLAG assumerà valore "true";
7 - ? SE variabile FLAG === true
    7.1 - Stampiamo "Accesso consentito, puoi partecipare!" 
8 - : ALTRIMENTI stampiamo "Accesso negato, per favore non farmi chiamare il buttafuori."