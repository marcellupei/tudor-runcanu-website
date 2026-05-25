/* ============================================================
   CONTINUTUL SITE-ULUI  --  acesta este SINGURUL fisier
   pe care trebuie sa il editezi ca sa schimbi textul,
   demo-urile audio sau videoclipurile.

   Reguli simple:
   - Textul se scrie intre ghilimele "..."
   - Fiecare rand dintr-o lista se termina cu virgula ,
   - Nu sterge acoladele { } sau parantezele [ ]
   - Dupa ce salvezi, site-ul se actualizeaza singur

   Vezi GHID-EDITARE.md pentru pasii completi.
   ============================================================ */

window.SITE = {

  /* ---------- 1. DATELE DE BAZA ---------- */

  name: "Tudor Runcanu",
  role: "Artist voice over si narator",

  // Titlul mare de pe prima pagina
  tagline: "O voce pentru fiecare poveste.",

  // Date de contact -- INLOCUIESTE cu datele reale.
  // Lasa gol ""  daca nu vrei sa apara un camp.
  email: "adresa@exemplu.ro",
  phone: "07xx xxx xxx",
  city: "Romania",

  // Fotografie portret (apare pe pagina Despre).
  // Urca fisierul in folderul assets/ si scrie numele aici, ex: "assets/tudor.jpg"
  // Lasa gol ""  daca nu ai inca o poza -- locul ramane ascuns.
  photo: "",

  // Linkuri retele sociale -- lasa gol ""  daca nu ai unul
  youtube:   "https://www.youtube.com/",
  instagram: "",
  facebook:  "",
  linkedin:  "",


  /* ---------- 2. PRIMA PAGINA (Acasa) ---------- */

  heroIntro:
    "De la spoturi de cateva secunde pana la capitole intregi de carte, " +
    "lucrez cu vocea ca sa transmit exact ce ai de spus: clar, natural " +
    "si usor de ascultat.",


  /* ============================================================
     3. COMERCIAL  --  voce pentru reclame, ghiduri si business
     ============================================================ */
  comercial: {

    summary:
      "Reclame, ghiduri video si materiale de business. Mesajul tau, " +
      "spus clar si in tonul potrivit pentru brand.",

    intro:
      "O reclama buna se aude o data si se tine minte. Inregistrez voce " +
      "pentru spoturi, video-uri explicative si materiale interne, in tonul " +
      "potrivit pentru publicul si momentul tau.",

    services: [
      {
        title: "Reclame radio & TV",
        text: "Spoturi care se retin. Ton energic sau cald, livrare la timp, in formatul de care ai nevoie."
      },
      {
        title: "Ghiduri & video explainer",
        text: "Voce limpede pentru tutoriale, materiale de onboarding si clipuri care explica un produs."
      },
      {
        title: "Prezentari & materiale de business",
        text: "Naratiune pentru prezentari de companie, video-uri corporate si comunicare interna."
      },
      {
        title: "E-learning & cursuri",
        text: "Voce prietenoasa si constanta pentru cursuri online si module de training, oricat de lungi."
      },
      {
        title: "IVR & mesaje telefonice",
        text: "Mesaje de intampinare si de ghidare pentru centrale telefonice, inregistrate profesionist."
      },
      {
        title: "Branding audio & podcast",
        text: "Introduceri, semnaturi sonore si voce pentru identitatea audio a brandului."
      }
    ],

    demos: [
      {
        title: "Demo reclame",
        kind: "audio",
        src: "audio/demo-reclame.mp3",
        note: "Spoturi radio si TV, tonuri diferite."
      },
      {
        title: "Demo explainer & corporate",
        kind: "audio",
        src: "audio/demo-corporate.mp3",
        note: "Ghiduri video si prezentari de business."
      }
    ]
  },


  /* ============================================================
     4. FILM & ANIMATIE  --  dublaj, personaje, documentar
     ============================================================ */
  film: {

    summary:
      "Dublaj, voci de personaj si naratiune pentru film, desen animat " +
      "si continut video.",

    intro:
      "Imaginea cere o voce care se potriveste cu ea. Lucrez la dublaj, " +
      "personaje pentru animatie si naratiune, cu registre si energie " +
      "variabile, in functie de proiect.",

    services: [
      {
        title: "Dublaj film & serial",
        text: "Voce sincronizata cu imaginea, pentru personaje din filme si seriale."
      },
      {
        title: "Voce pentru animatie",
        text: "Personaje pentru desene animate, jocuri si continut animat, cu registre variate."
      },
      {
        title: "Naratiune documentar",
        text: "Voce asezata si credibila pentru documentare si materiale de tip reportaj."
      },
      {
        title: "Trailere & promo",
        text: "Voce cu prezenta pentru trailere, teasere si promo-uri."
      },
      {
        title: "Voci de personaj",
        text: "Mai multe voci distincte, pentru proiecte care cer un cast variat."
      }
    ],

    demos: [
      {
        title: "Demo dublaj & personaje",
        kind: "audio",
        src: "audio/demo-personaje.mp3",
        note: "Voci pentru film si animatie."
      },
      {
        title: "Demo naratiune documentar",
        kind: "youtube",
        src: "https://www.youtube.com/",
        note: "Fragment de naratiune."
      }
    ]
  },


  /* ============================================================
     5. AUDIOBOOK  --  canalul de YouTube
     ============================================================ */

  channelName: "Numele Canalului",

  channelSummary:
    "Carti citite cap-coada, in limba romana, gratuit pe YouTube.",

  channelIntro:
    "Un canal dedicat cartilor citite cu voce tare, in limba romana. " +
    "Capitole intregi, povesti si literatura, pentru oricine vrea sa " +
    "asculte o carte buna.",

  audiobooks: [
    {
      title: "Titlul cartii sau al capitolului",
      author: "Autorul",
      src: "https://www.youtube.com/"
    },
    {
      title: "Al doilea titlu",
      author: "Autorul",
      src: "https://www.youtube.com/"
    }
  ],


  /* ---------- 6. PAGINA DESPRE ---------- */

  aboutHeading: "Despre",
  aboutText: [
    "Lucrez cu vocea pentru ca un text bun merita sa fie si bine spus. " +
    "Fie ca e vorba de un spot de zece secunde sau de un roman intreg, " +
    "caut de fiecare data tonul care face mesajul usor de ascultat si de tinut minte.",

    "Imi place sa inteleg intai proiectul: cui i se adreseaza, ce ton cere " +
    "si unde va fi ascultat. Abia apoi intru in cabina. O voce potrivita nu " +
    "e una care impresioneaza, ci una care serveste textul.",

    "In paralel cu proiectele comerciale si de film, construiesc un canal " +
    "de audiobook in limba romana, un loc unde cartile pot fi ascultate " +
    "cap-coada. Este felul meu de a readuce lectura cu voce tare acolo unde ii e locul."
  ],

  aboutFacts: [
    "Inregistrari in studio propriu",
    "Livrare rapida a fisierelor",
    "Limba romana, accent neutru",
    "Reclame, film, animatie si audiobook"
  ]

};
