/**/var nodoNumeroDomanda;
/**/var nodoTestoDomanda;
/**/var nodoRisposta0;
/**/var nodoTestoRisposta0;
/**/var nodoRisposta1;
/**/var nodoTestoRisposta1;
/**/var nodoRisposta2;
/**/var nodoTestoRisposta2;
/**/var nodoAvanti;
/**/var nodoRisultato;
/**/var nodoInizia;
/**/var numeroDomande;
/**/var numeroDomandaCorrente;
/**/var risposteDate;

/**/function gestoreLoad () {
/**/    try {
/**/        nodoNumeroDomanda = document.getElementById("numeroDomanda");
/**/        nodoTestoDomanda = document.getElementById("testoDomanda");
/**/        nodoRisposta0 = document.getElementById("risposta0");
/**/        nodoTestoRisposta0 = document.getElementById("testoRisposta0");
/**/        nodoRisposta1 = document.getElementById("risposta1");
/**/        nodoTestoRisposta1 = document.getElementById("testoRisposta1");
/**/        nodoRisposta2 = document.getElementById("risposta2");
/**/        nodoTestoRisposta2 = document.getElementById("testoRisposta2");
/**/        nodoAvanti = document.getElementById("avanti");
/**/        nodoRisultato = document.getElementById("risultato");
/**/        nodoInizia = document.getElementById("inizia");
/**/        nodoAvanti.onclick = gestoreClickAvanti;
/**/        nodoInizia.onclick = gestoreClickInizia;
/**/        numeroDomande = quiz.length;
/**/        nuovoQuiz();
/**/    } catch ( e ) {
/**/        alert("gestoreLoad " + e);
/**/    }
/**/}

/**/window.onload = gestoreLoad;

/**/function nuovoQuiz () {
/**/    numeroDomandaCorrente = 0;
/**/    aggiornaDomanda(numeroDomandaCorrente);
/**/    scriviMessaggio(nodoRisultato, "");
/**/    risposteDate = [];
/**/}

/**/function aggiornaDomanda (i) {
/**/    scriviMessaggio(nodoNumeroDomanda,
/**/    "Domanda " + (i + 1) + " di " + numeroDomande);
/**/    var parte = quiz[i];
/**/    scriviMessaggio(nodoTestoDomanda, parte.domanda)
/**/    scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
/**/    scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
/**/    scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
/**/    nodoRisposta0.checked = false;
/**/    nodoRisposta1.checked = false;
/**/    nodoRisposta2.checked = false;
/**/}
   
/**/var quiz = [
/**/    { // domanda 1
/**/    domanda : "Quando viene pubblicato il manga per la prima volta?",
/**/    risposte : [
/**/    "1975",
/**/    "1991",
/**/    "1997"
/**/    ],
/**/    rispostaEsatta : 2
/**/    },
/**/    { // domanda 2
/**/    domanda : "Quando viene trasmesso per la prima volta in Italia l'anime?",
/**/    risposte : [
/**/    "1997",
/**/    "2001",
/**/    "1999"
/**/    ],
/**/    rispostaEsatta : 1
/**/    },
/**/    { // domanda 3
/**/    domanda : "Quale frutto del diavolo ha mangiato Luffy?",
/**/    risposte : [
/**/    "Fior Fior",
/**/    "Gom Gom",
/**/    "Yomi Yomi"
/**/    ],
/**/    rispostaEsatta : 1
/**/    },
/**/    { // domanda 4
/**/    domanda : "Chi tra i membri della ciurma ha la taglia da ricercato più bassa?",
/**/    risposte : [
/**/    "Tony Tony Chopper",
/**/    "Nami",
/**/    "Franky"
/**/    ],
/**/    rispostaEsatta : 0
/**/    },
/**/    { // domanda 5
/**/        domanda : "Chi tra i membri della ciurma ha la taglia da ricercato pià alta, escluso Luffy?",
/**/        risposte : [
/**/        "Jinbe",
/**/        "Sanji",
/**/        "Zoro"
/**/        ],
/**/        rispostaEsatta : 2
/**/    },
/**/    { // domanda 6
/**/        domanda : "Quanti membri della ciurma hanno mangiato i frutti del diavolo?",
/**/        risposte : [
/**/        "4",
/**/        "3",
/**/        "5"
/**/        ],
/**/        rispostaEsatta : 0
/**/    },
/**/    { // domanda 7
/**/        domanda : "Come si chiama la nave costruita da Franky per la ciurma?",
/**/        risposte : [
/**/        "Thousand Sunny",
/**/        "Going Merry",
/**/        "Thriller Bark"
/**/        ],
/**/        rispostaEsatta : 0
/**/    }
/**/];

/**/function scriviMessaggio (nodo, messaggio) {
/**/    var nodoTesto = document.createTextNode(messaggio);
/**/    if (nodo.childNodes.length == 0) {
/**/        nodo.appendChild(nodoTesto);
/**/    } else {
/**/        nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/    }
/**/}

/**/function gestoreClickAvanti () {
/**/    try {
/**/        if (numeroDomandaCorrente == numeroDomande) {
/**/            return;
/**/        }
/**/        if (nodoRisposta0.checked) {
/**/            risposteDate[numeroDomandaCorrente] = 0;
/**/        } else if (nodoRisposta1.checked) {
/**/            risposteDate[numeroDomandaCorrente] = 1;
/**/        } else if (nodoRisposta2.checked) {
/**/            risposteDate[numeroDomandaCorrente] = 2;
/**/        } else {
/**/            return;
/**/        }
/**/        numeroDomandaCorrente++;
/**/        if (numeroDomandaCorrente == numeroDomande) {
/**/            var esito = calcolaEsito();
/**/            var s;
/**/            if (esito == 1) {
/**/                s = "1 risposta esatta su " + numeroDomande;
/**/            } else {
/**/                s = esito + " risposte esatte su " + numeroDomande;
/**/            }
/**/            scriviMessaggio(nodoRisultato, s);
/**/        } else {
/**/            aggiornaDomanda(numeroDomandaCorrente);
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickAvanti " + e);
/**/    }
/**/}

/**/function calcolaEsito () {
/**/    var numeroRisposteEsatte = 0;
/**/    for (var i = 0; i < quiz.length; i++) {
/**/        var parte = quiz[i];
/**/        if (parte.rispostaEsatta == risposteDate[i]) {
/**/            numeroRisposteEsatte++;
/**/        }
/**/    }
/**/    return numeroRisposteEsatte;
/**/}

/**/function gestoreClickInizia () {
/**/    try {
/**/        nuovoQuiz();
/**/    } catch ( e ) {
/**/        alert("gestoreClickInizia " + e);
/**/    }   
/**/}          