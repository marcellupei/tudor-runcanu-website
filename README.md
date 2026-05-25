# Website Tudor Runcanu — voice over & audiobook

Site static multi-pagina pentru Tudor Runcanu: voice over comercial,
film & animatie si un canal de audiobook in limba romana.

## Stack
- HTML/CSS/JS static, fara build step
- Design: light minimal modern (Instrument Serif + Inter)
- Tot continutul editabil sta in `content.js`
- `assets/site.js` randeaza continutul in pagini

## Structura
```
index.html         Acasa
portofoliu.html    Portofoliu (overview, link catre cele 3 zone)
comercial.html     Reclame, ghiduri, materiale de business
film-animatie.html Dublaj, animatie, documentar
audiobooks.html    Videoclipuri de pe canalul YouTube
despre.html        Bio
contact.html       Date de contact
voce.html          Redirect catre portofoliu.html (pagina veche)
content.js         <-- SINGURUL fisier de editat pentru continut
assets/            style.css, site.js, favicon.svg
audio/             fisiere .mp3 pentru demo-uri
GHID-EDITARE.md    ghid pentru Tudor (non-tehnic)
netlify.toml       config deploy
```

Navigatie: Acasa / Portofoliu / Despre / Contact.
Paginile Comercial, Film & Animatie si Audiobook au o bara de tab-uri
comuna si sunt accesibile din Portofoliu si din pagina principala.

## Deploy
GitHub repo -> Netlify (deploy automat la `git push` pe `main`),
acelasi flux ca proiectul 5-cinzeci.

### Conectare initiala (o singura data)
1. Ruleaza `git init`, `git add -A`, `git commit` nativ pe Windows.
2. Creeaza un repo nou pe GitHub si `git push -u origin main`.
3. In Netlify: Add new site -> Import from GitHub -> alege repo-ul.
4. Build command: gol. Publish directory: `.`

## Pentru Tudor
Editarea continutului se face din `content.js`. Vezi `GHID-EDITARE.md`.
