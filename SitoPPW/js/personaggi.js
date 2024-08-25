/**/const RITARDO = 2000;
/**/var indicePersonaggio;
/**/var numeroPersonaggio;
/**/var automatico;
/**/var nodoAvanti;
/**/var nodoIndietro;
/**/var nodoStartStop;
/**/var nodoNomePersonaggio;
/**/var nodoImgPersonaggio;
/**/var nodoDescrizionePersonaggio;

/**/function gestoreLoad () {
/**/    try {
/**/        nodoAvanti = document.getElementById("avanti");
/**/        nodoIndietro = document.getElementById("indietro");
/**/        nodoStartStop = document.getElementById("startStop");
/**/        nodoNomePersonaggio = document.getElementById("NomePersonaggio");
/**/        nodoImgPersonaggio = document.getElementById("ImgPersonaggio");
/**/        nodoDescrizionePersonaggio = document.getElementById("DescrizionePersonaggio");
/**/        nodoAvanti.onclick = gestoreClickAvanti;
/**/        nodoIndietro.onclick = gestoreClickIndietro;
/**/        nodoStartStop.onclick = gestoreClickStartStop;
/**/        nodoStartStop.value = "Start";
/**/        numeroPersonaggio = personaggi.length;
/**/        automatico = false;
/**/        indicePersonaggio = 0;
/**/        cambiaPersonaggio(0);
/**/    } catch ( e ) {
/**/        alert("gestoreLoad " + e);
/**/    }
/**/}
/**/window.onload = gestoreLoad;

/**/function gestoreClickAvanti () {
/**/    try {
/**/        if (!automatico) {
/**/            cambiaPersonaggio(+1);
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickAvanti " + e);
/**/    }
/**/}

/**/function gestoreClickIndietro () {
/**/    try {
/**/        if (!automatico) {
/**/            cambiaPersonaggio(-1);
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickIndietro " + e);
/**/    }
/**/}

/**/function cambiaPersonaggio (x) {
/**/    indicePersonaggio += x;
/**/    if (indicePersonaggio == numeroPersonaggio) {
/**/        indicePersonaggio = 0;
/**/    }

/**/    if (indicePersonaggio < 0) {
/**/        indicePersonaggio = numeroPersonaggio - 1;
/**/    }

        nodoImgPersonaggio.setAttribute("src", personaggi[indicePersonaggio].img);
        nodoNomePersonaggio.textContent = personaggi[indicePersonaggio].nome;
        nodoDescrizionePersonaggio.textContent = personaggi[indicePersonaggio].descrizione;
/**/}

/**/function gestoreClickStartStop () {
/**/    try {
/**/        if (automatico) {
/**/            nodoStartStop.value = "Start";
/**/            automatico = false;
/**/        } else {
/**/            nodoStartStop.value = "Stop";
/**/            automatico = true;
/**/            cambiaPersonaggioInAutomatico();
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickStartStop " + e);
/**/    }
/**/}

/**/function cambiaPersonaggioInAutomatico () {
/**/    try {
/**/        if (automatico) {
/**/            cambiaPersonaggio(+1);
/**/            setTimeout(cambiaPersonaggioInAutomatico, RITARDO);
/**/        }
/**/    } catch ( e ) {
/**/        alert("cambiaPersonaggioInAutomatico " + e);
/**/    }
/**/}

var personaggi = [
    {
        nome: "Monkey D. Luffy",
        img: "immagini/luffy.png",
        descrizione: "Monkey D. Luffy è un giovane pirata che sogna di diventare il Re dei Pirati trovando il leggendario tesoro chiamato One Piece. Luffy ha acquisito il potere di allungare il proprio corpo come la gomma dopo aver mangiato il Frutto del Diavolo Gom Gom. Luffy è noto per il suo carattere spensierato, determinato e profondamente leale verso i suoi amici e la sua ciurma, la Ciurma di Cappello di Paglia. Nonostante il suo atteggiamento spesso infantile e la sua apparente ingenuità, Luffy è un combattente formidabile, capace di superare ostacoli impossibili grazie alla sua creatività e alla sua incrollabile volontà."
    },
    {
        nome: "Roronoa Zoro",
        img: "immagini/zoro.jpg",
        descrizione: "Roronoa Zoro è il primo membro a unirsi alla Ciurma di Cappello di Paglia di Luffy. È un abilissimo spadaccino, noto per il suo stile unico di combattimento a tre spade, chiamato Santoryu, in cui brandisce una spada in ciascuna mano e una terza in bocca. Zoro è caratterizzato da una determinazione incrollabile e un forte senso dell'onore. Il suo obiettivo è diventare il miglior spadaccino del mondo per onorare una promessa fatta alla sua amica d'infanzia Kuina. Nonostante il suo comportamento serio e spesso taciturno, Zoro è un membro leale e protettivo della ciurma, pronto a combattere fino allo stremo per proteggere i suoi compagni."
    },
    {
        nome: "Nami",
        img: "immagini/nami.jpg",
        descrizione: "Nami è la navigatrice della Ciurma di Cappello di Paglia. È un'esperta cartografa e meteorologa, con un innato talento per la navigazione, che permette alla ciurma di affrontare i pericolosi mari del mondo di One Piece. Nami è inizialmente introdotta come una ladra, con una passione per il denaro e i tesori, ma si unisce a Luffy e alla sua ciurma dopo che lui la aiuta a liberarsi dal crudele pirata Arlong. Sotto la sua apparente avidità, Nami è profondamente leale e affezionata ai suoi compagni, e il suo desiderio più grande è disegnare una mappa completa del mondo. La sua abilità di manipolare il clima con il suo bastone Clima-Tact la rende una combattente formidabile, nonostante la sua iniziale avversione per i combattimenti."
    },
    {
        nome: "Usopp",
        img: "immagini/usopp.jpg",
        descrizione: "Usopp è il tiratore scelto della Ciurma di Cappello di Paglia. È conosciuto per la sua straordinaria abilità con la fionda e per la sua inventiva, creando armi e gadget unici, come la sua fionda speciale chiamata Kabuto. All'inizio della storia, Usopp è un gran bugiardo e ha spesso paura dei pericoli, ma con il tempo cresce come personaggio, diventando più coraggioso e determinato a proteggere i suoi amici. Il suo sogno è diventare un grande guerriero dei mari, come suo padre Yasopp, che è un membro della ciurma di Shanks il Rosso. Nonostante le sue paure, Usopp è leale e ha un grande cuore, mettendosi spesso in situazioni pericolose per il bene della sua ciurma."
    },
    {
        nome: "Sanji",
        img: "immagini/sanji.jpg",
        descrizione: "Sanji è il cuoco della Ciurma di Cappello di Paglia. È un abilissimo chef, noto per il suo amore per la cucina e il suo impegno nel preparare piatti deliziosi per i suoi compagni di ciurma. Sanji ha un forte codice d'onore che gli impedisce di colpire le donne, indipendentemente dalle circostanze. Sanji è anche un potente combattente, specializzato in un'arte marziale chiamata Black Leg (Gamba Nera), che utilizza solo le gambe per mantenere le mani intatte per cucinare. Il suo sogno è trovare l'All Blue, un leggendario mare dove si dice si incontrino tutti i pesci del mondo, permettendo così di preparare i migliori piatti. Sanji è un personaggio elegante, spesso visto con un abito nero e una sigaretta in bocca, ed è famoso per il suo atteggiamento galante e romantico verso le donne."
    },
    {
        nome: "Tony Tony Chopper",
        img: "immagini/chopper.jpg",
        descrizione: "Tony Tony Chopper è il medico della Ciurma di Cappello di Paglia. È una renna che ha mangiato il Frutto del Diavolo Homo Homo, che gli ha conferito la capacità di parlare, pensare come un essere umano e trasformarsi in varie forme, combinando caratteristiche umane e animali. Chopper è dolce, innocente e spesso si imbarazza facilmente, specialmente quando viene elogiato. Nonostante la sua apparenza adorabile, è un medico estremamente competente, con una profonda conoscenza delle erbe medicinali e della medicina. Il suo sogno è diventare un medico in grado di curare qualsiasi malattia, ispirato dal suo mentore, il Dottor Hiluluk. In battaglia, Chopper può utilizzare il Rumble Ball, una droga che gli permette di accedere a diverse trasformazioni, rendendolo un formidabile combattente."
    },
    {
        nome: "Nico Robin",
        img: "immagini/nico_robin.jpg",
        descrizione: "Nico Robin è l'archeologa della Ciurma di Cappello di Paglia. È una donna misteriosa e intelligente, con un passato tragico, essendo l'unica sopravvissuta dell'isola di Ohara, distrutta dalla Marina per il suo studio della storia proibita. Robin ha mangiato il Frutto del Diavolo Fior Fior, che le permette di far spuntare parti del suo corpo (come braccia e occhi) su qualsiasi superficie, incluso il corpo degli altri, rendendola una combattente versatile e pericolosa. Robin è calma, riflessiva e ha un grande interesse per la storia antica, in particolare per i Poignee Griffe, antiche pietre che contengono informazioni sulla vera storia del mondo, compreso il misterioso secolo buio. Il suo sogno è trovare il Rio Poignee Griffe e scoprire la verità sulla storia dimenticata del mondo."
    },
    {
        nome: "Franky",
        img: "immagini/franky.jpg",
        descrizione: "Franky è il carpentiere della Ciurma di Cappello di Paglia. È un cyborg, metà uomo e metà macchina, con un corpo potenziato da varie armi e gadget che lui stesso ha costruito. Franky è noto per la sua personalità eccentrica, il suo amore per la costruzione di navi e la sua passione per la musica. Prima di unirsi alla ciurma, Franky era il leader di una banda di demolitori e un costruttore navale a Water 7. Dopo aver aiutato la ciurma a sconfiggere il governo mondiale nell'arco di Enies Lobby, si unisce ufficialmente a loro. Franky ha costruito la nave della ciurma, la Thousand Sunny, utilizzando il leggendario legno dell'Albero Adam, rendendola una delle navi più robuste e avanzate del mondo. Franky è un personaggio energico e vivace, spesso urlando il suo slogan 'Super!' e mostrando il suo amore per il cola, che usa come carburante per alimentare il suo corpo cyborg."
    },
    {
        nome: "Brook",
        img: "immagini/brook.jpg",
        descrizione: "Brook è il musicista della Ciurma di Cappello di Paglia. È uno scheletro vivente, resuscitato grazie ai poteri del Frutto del Diavolo Yomi Yomi, che gli ha permesso di tornare in vita dopo la morte, anche se con solo le ossa rimaste del suo corpo. Brook è un musicista talentuoso, specializzato nel suonare il violino, e ha il potere di usare la musica per influenzare le emozioni e combattere. È noto per il suo spirito allegro e il suo umorismo eccentrico, spesso facendo battute sulla sua condizione di scheletro, come chiedere scherzosamente di poter vedere la biancheria intima delle donne. Prima di unirsi alla ciurma, era un membro dei Pirati Rumbar e il custode della balena Laboon, con la promessa di riunirsi con lei un giorno. Il suo sogno è di mantenere quella promessa e suonare di nuovo per Laboon. Brook è anche un abile spadaccino, usando una spada nascosta nel suo bastone da passeggio e combinando la sua abilità musicale con tecniche di combattimento uniche."
    },
    {
        nome: "Jinbe",
        img: "immagini/jinbe.jpg",
        descrizione: "Jinbe è l'ultimo membro a unirsi alla Ciurma di Cappello di Paglia. È un uomo-pesce di tipo squalo balena e un maestro del Karate degli Uomini-Pesce, una potente arte marziale che gli permette di manipolare l'acqua e combattere con grande forza e abilità. Jinbe è un personaggio nobile e rispettato, noto per la sua saggezza, lealtà e senso dell'onore. Prima di unirsi alla ciurma, è stato uno dei sette membri della Flotta dei Sette e ha ricoperto il ruolo di capitano dei Pirati del Sole, una ciurma di uomini-pesce. È anche un alleato di lunga data della famiglia di Luffy, avendo avuto un legame stretto con Ace e con l'imperatore dei mari, Barbabianca. Il suo sogno è vedere una coesistenza pacifica tra gli uomini-pesce e gli esseri umani, superando i secoli di discriminazione e odio tra le due razze. Jinbe è un guerriero coraggioso, disposto a sacrificarsi per il bene dei suoi amici e per la giustizia."
    }
]