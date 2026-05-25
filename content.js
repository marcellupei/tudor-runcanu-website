/* ============================================================
   CONȚINUTUL SITE-ULUI  --  acesta este SINGURUL fișier
   pe care trebuie să îl editezi ca să schimbi textul,
   demo-urile audio sau videoclipurile.

   Reguli simple:
   - Textul se scrie între ghilimele "..."
   - Fiecare rând dintr-o listă se termină cu virgulă ,
   - Nu șterge acoladele { } sau parantezele [ ]
   - După ce salvezi, site-ul se actualizează singur

   Vezi GHID-EDITARE.md pentru pașii completi.
   ============================================================ */

window.SITE = {

  /* ---------- 1. DATELE DE BAZĂ ---------- */

  name: "Tudor Runcanu",
  role: "Artist voice over și narator",

  // Titlul mare de pe prima pagină
  tagline: "O voce pentru fiecare poveste.",

  // Date de contact -- ÎNLOCUIEȘTE cu datele reale.
  // Lasă gol ""  dacă nu vrei să apară un câmp.
  email: "adresa@exemplu.ro",
  phone: "07xx xxx xxx",
  city: "România",

  // Fotografie portret (apare pe pagina Despre).
  // Urcă fișierul în folderul assets/ și scrie numele aici, ex: "assets/tudor.jpg"
  // Lasă gol ""  dacă nu ai încă o poză -- locul rămâne ascuns.
  photo: "",

  // Linkuri rețele sociale -- lasă gol ""  dacă nu ai unul
  youtube:   "https://www.youtube.com/",
  instagram: "",
  facebook:  "",
  linkedin:  "",


  /* ---------- 2. PRIMA PAGINĂ (Acasă) ---------- */

  heroIntro:
    "De la spoturi de câteva secunde până la capitole întregi de carte, " +
    "lucrez cu vocea ca să transmit exact ce ai de spus: clar, natural " +
    "și ușor de ascultat.",


  /* ============================================================
     3. COMERCIAL  --  voce pentru reclame, ghiduri și business
     ============================================================ */
  comercial: {

    summary:
      "Reclame, ghiduri video și materiale de business. Mesajul tău, " +
      "spus clar și în tonul potrivit pentru brand.",

    intro:
      "O reclamă bună se aude o dată și se ține minte. Înregistrez voce " +
      "pentru spoturi, video-uri explicative și materiale interne, în tonul " +
      "potrivit pentru publicul și momentul tău.",

    services: [
      {
        title: "Reclame radio & TV",
        text: "Spoturi care se rețin. Ton energic sau cald, livrare la timp, în formatul de care ai nevoie."
      },
      {
        title: "Ghiduri & video explainer",
        text: "Voce limpede pentru tutoriale, materiale de onboarding și clipuri care explică un produs."
      },
      {
        title: "Prezentări & materiale de business",
        text: "Narațiune pentru prezentări de companie, video-uri corporate și comunicare internă."
      },
      {
        title: "E-learning & cursuri",
        text: "Voce prietenoasă și constantă pentru cursuri online și module de training, oricât de lungi."
      },
      {
        title: "IVR & mesaje telefonice",
        text: "Mesaje de întâmpinare și de ghidare pentru centrale telefonice, înregistrate profesionist."
      },
      {
        title: "Branding audio & podcast",
        text: "Introduceri, semnături sonore și voce pentru identitatea audio a brandului."
      }
    ],

    demos: [
      {
        title: "Demo reclame",
        kind: "audio",
        src: "audio/demo-reclame.mp3",
        note: "Spoturi radio și TV, tonuri diferite."
      },
      {
        title: "Demo explainer & corporate",
        kind: "audio",
        src: "audio/demo-corporate.mp3",
        note: "Ghiduri video și prezentări de business."
      }
    ]
  },


  /* ============================================================
     4. FILM & ANIMAȚIE  --  dublaj, personaje, documentar
     ============================================================ */
  film: {

    summary:
      "Dublaj, voci de personaj și narațiune pentru film, desen animat " +
      "și conținut video.",

    intro:
      "Imaginea cere o voce care se potrivește cu ea. Lucrez la dublaj, " +
      "personaje pentru animație și narațiune, cu registre și energie " +
      "variabile, în funcție de proiect.",

    services: [
      {
        title: "Dublaj film & serial",
        text: "Voce sincronizată cu imaginea, pentru personaje din filme și seriale."
      },
      {
        title: "Voce pentru animație",
        text: "Personaje pentru desene animate, jocuri și conținut animat, cu registre variate."
      },
      {
        title: "Narațiune documentar",
        text: "Voce așezată și credibilă pentru documentare și materiale de tip reportaj."
      },
      {
        title: "Trailere & promo",
        text: "Voce cu prezență pentru trailere, teasere și promo-uri."
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
        note: "Voci pentru film și animație."
      },
      {
        title: "Demo narațiune documentar",
        kind: "youtube",
        src: "https://www.youtube.com/",
        note: "Fragment de narațiune."
      }
    ]
  },


  /* ============================================================
     5. AUDIOBOOK  --  canalul de YouTube
     ============================================================ */

  channelName: "Numele Canalului",

  channelSummary:
    "Cărți citite cap-coadă, în limba română, gratuit pe YouTube.",

  channelIntro:
    "Un canal dedicat cărților citite cu voce tare, în limba română. " +
    "Capitole întregi, povești și literatură, pentru oricine vrea să " +
    "asculte o carte bună.",

  audiobooks: [
    {
      title: "Titlul cărții sau al capitolului",
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
    "Lucrez cu vocea pentru că un text bun merită să fie și bine spus. " +
    "Fie că e vorba de un spot de zece secunde sau de un roman întreg, " +
    "caut de fiecare dată tonul care face mesajul ușor de ascultat și de ținut minte.",

    "Îmi place să înțeleg întâi proiectul: cui i se adresează, ce ton cere " +
    "și unde va fi ascultat. Abia apoi intru în cabină. O voce potrivită nu " +
    "e una care impresionează, ci una care servește textul.",

    "În paralel cu proiectele comerciale și de film, construiesc un canal " +
    "de audiobook în limba română, un loc unde cărțile pot fi ascultate " +
    "cap-coadă. Este felul meu de a readuce lectura cu voce tare acolo unde îi e locul."
  ],

  aboutFacts: [
    "Înregistrări în studio propriu",
    "Livrare rapidă a fișierelor",
    "Limba română, accent neutru",
    "Reclame, film, animație și audiobook"
  ]

};
