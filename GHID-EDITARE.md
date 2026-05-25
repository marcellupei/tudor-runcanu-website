# Ghid de editare a site-ului

Acest ghid e pentru Tudor. Nu ai nevoie de cunostinte tehnice.
Tot ce apare pe site (text, demo-uri, videoclipuri, fotografie) se schimba
dintr-un singur fisier: **`content.js`**.

Dupa ce salvezi o modificare, site-ul se actualizeaza singur in aproximativ
un minut.

---

## Cum editezi (direct din browser)

Site-ul sta pe GitHub. Poti edita totul din browser, fara sa instalezi nimic.

1. Intra pe pagina proiectului pe **github.com** (linkul ti-l da Marcel).
2. Apasa pe fisierul **`content.js`**.
3. Apasa pe iconita de **creion** (Edit), sus in dreapta.
4. Fa modificarile.
5. Coboara si apasa butonul verde **Commit changes**.
6. Gata. In ~1 minut modificarea apare pe site.

---

## Reguli de baza

- Textul se scrie mereu intre ghilimele: `"asa"`.
- Nu sterge acoladele `{ }` sau parantezele patrate `[ ]`.
- Fiecare rand dintr-o lista se termina cu **virgula** `,`.
- Daca ceva se strica, anuleaza ultima modificare si incearca din nou.

---

## Cum e organizat `content.js`

Fisierul are sase parti, marcate clar cu titluri:

1. **Datele de baza** -- nume, rol, email, telefon, fotografie, retele sociale.
2. **Prima pagina** -- textul de pe Acasa.
3. **Comercial** -- descriere, tipuri de proiecte si demo-uri.
4. **Film & Animatie** -- descriere, tipuri de proiecte si demo-uri.
5. **Audiobook** -- numele canalului si videoclipurile de pe YouTube.
6. **Despre** -- paragrafele de pe pagina Despre.

---

## Cum adaugi un demo (Comercial sau Film)

Demo-urile stau in doua locuri: in sectiunea `comercial` (la `demos`) si in
sectiunea `film` (la `demos`). Functioneaza la fel.

Un demo poate fi un **fisier audio** sau un **videoclip YouTube**.

**Demo audio (mp3):**

```js
{
  title: "Demo reclame",
  kind: "audio",
  src: "audio/demo-reclame.mp3",
  note: "O scurta descriere"
}
```

**Demo video YouTube:**

```js
{
  title: "Demo naratiune",
  kind: "youtube",
  src: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  note: "O scurta descriere"
}
```

Ca sa adaugi un demo nou: copiaza un bloc `{ ... }`, lipeste-l langa cel
existent (cu virgula intre ele) si modifica-l.

### Cum urci un fisier audio

1. Pe github.com intra in folderul **`audio`**.
2. Apasa **Add file -> Upload files**.
3. Trage fisierul `.mp3` in pagina si apasa **Commit changes**.
4. In `content.js`, la demo-ul respectiv, scrie numele exact al fisierului:
   `src: "audio/numele-fisierului.mp3"`.

Foloseste nume simple: litere mici, fara spatii, fara diacritice
(ex: `demo-reclame.mp3`, nu `Demo Reclame.mp3`).

---

## Cum adaugi un audiobook (videoclip de pe canal)

In sectiunea **`audiobooks`** gasesti blocuri de forma:

```js
{
  title: "Titlul cartii sau al capitolului",
  author: "Autorul",
  src: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
}
```

Copiaza un bloc, modifica `title` si `author`, si pune la `src` linkul
complet de YouTube. Orice forma de link merge.

---

## Cum adaugi fotografia ta (pagina Despre)

1. Pe github.com intra in folderul **`assets`**.
2. Apasa **Add file -> Upload files** si urca poza (ex: `tudor.jpg`).
3. Apasa **Commit changes**.
4. In `content.js`, sus, la campul `photo`, scrie numele fisierului:
   `photo: "assets/tudor.jpg"`.

Cat timp campul `photo` e gol `""`, locul fotografiei ramane ascuns, deci
pagina arata bine si fara poza. O poza portret verticala, cu lumina buna,
arata cel mai bine.

---

## Cum schimbi tipurile de proiecte (cardurile)

In sectiunile `comercial` si `film`, la `services`, fiecare card e un bloc:

```js
{ title: "Reclame radio & TV", text: "Descrierea cardului." }
```

Modifica textele, sau copiaza un bloc ca sa adaugi un card nou.

---

## Datele de contact

Sus de tot in `content.js`: `email`, `phone`, `youtube`, `channelName` etc.
Inlocuieste textul dintre ghilimele. Daca lasi un camp gol `""`, el nu mai
apare pe site.

---

Tot continutul de care e nevoie e strans in documentul de brief din Google
Drive, primit de la Marcel. Daca te blochezi, scrie-i lui. Modificarile
vechi raman salvate pe GitHub, asa ca nimic nu se pierde.
