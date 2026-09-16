# Sito BoomSort — istruzioni

Sito statico (HTML + CSS puro, zero dipendenze, zero build): apri
`index.html` col doppio click per vederlo subito, oppure caricalo su
qualsiasi hosting statico (GitHub Pages, Netlify, Vercel, Cloudflare
Pages, o un hosting tradizionale) trascinando questa cartella.

Grafica: illustrazioni e schermi finti sono disegnati in SVG/CSS inline, così
il sito non porta immagini che il gioco poi smentisce. (Il gioco *disegna in
codice* bombe, bidoni, effetti e interfaccia, e sintetizza la musica: le sue
uniche illustrazioni sono le arene e i fondali della home. Il sito non deve
dire "zero asset": non è più vero da quando le arene sono illustrate.)
Palette, colori delle bombe e stile dei componenti (bidoni, moltiplicatore,
card OST) presi 1:1 dal codice del gioco.

**Il marchio invece è renderizzato dall'app**, e sta in `assets/`.

> ⚠️ **In testata va `wordmark-testata.png`, non `wordmark.png`.** Il file di
> stampa ha l'aria che serve all'alone: misurato, le lettere stanno dentro il
> 30% dell'altezza. Alto 30 px in pagina significa glifi da 11 px, cioè una
> macchia rosa. Il ritaglio stretto tiene le stesse lettere al 66%: stessa
> scritta, stessa misura in pagina, leggibile. Il file arioso resta per il
> press kit, dove il margine lo si vuole.

| File | Cos'è | Dove si usa |
|---|---|---|
| `mascotte.png` | il **Portale** della home: la bomba che esce dal buco luminoso, con l'alone sotto. È quello che si vede aprendo l'app | hero della home |
| `bomba.png`    | la sola bomba centrale, senza satelliti né orbita, lo stesso dell'icona app | icona della nav, favicon |
| `wordmark.png` | la scritta BOOMSORT con l'alone al neon | nav, press kit |
| `logo.png`     | Portale + scritta, stesso spacing e offset del menu dell'app | press kit, anteprima social |
| `favicon.png`, `apple-touch-icon.png`, `social.png` | derivati | `<head>` di ogni pagina |

Perché due soggetti diversi: il Portale è largo e vive del pulse, quindi
funziona grande nell'hero ma si spappola a 32px; la bomba sola è centrata e
compatta, e nella nav non porta con sé mini-bombe che a quella misura
diventerebbero sporco.

**Bilingue, inglese di default**: ogni pagina ha tutto il testo in
inglese E italiano nel markup (classi `en`/`it`), con un selettore
EN/IT in alto a destra nella nav. La scelta si ricorda da una pagina
all'altra (`localStorage`, gestito da `lang.js`) e all'apertura la
pagina è già in inglese senza bisogno di JavaScript (nessun "flash" di
entrambe le lingue). Per aggiungere/correggere testo, cercare la coppia
`class="en"` / `class="it"` più vicina e modificare entrambe.

## Il giorno dell'uscita (22/10/2026) è automatico

`lancio.js`, letto nell'`<head>` di `index.html` e `sfida/index.html`, decide
quale versione mostrare: gli elementi `.prima-del-lancio` («Su App Store dal
20 ottobre», pulsante fermo) o `.dopo-il-lancio` («Scarica su App Store», link
a `apps.apple.com/app/id6788836304`). Prima del 20 alle 8:00 (ora italiana)
la prima; da lì chiede
all'App Store (iTunes Lookup) se l'app è già visibile e passa alla seconda
appena lo è; dal 1° novembre decide la sola data. **Il giorno del lancio non
c'è niente da ripubblicare.** Per vedere le due versioni prima: `?lancio=si`
o `?lancio=no` in fondo all'indirizzo. Se la data cambia, si cambia la riga
`LANCIO` in `lancio.js`.

## Quando si cambia lo stile o uno script: cambiare il numero `?v=`

Le pagine chiamano `styles.css?v=20261016`, `lancio.js?v=…`, `lang.js?v=…`.
GitHub Pages fa tenere i file ai browser per 10 minuti: senza il numero, chi
aveva già visitato il sito prendeva la pagina nuova con lo **stile vecchio**
(successo il 16/10/2026: Safari mostrava insieme «dal 20 ottobre» e
«Download», perché il vecchio CSS non conosceva la regola che ne nasconde uno).
Ogni volta che cambiano `styles.css` o uno degli script, si mette la data del
giorno al posto del numero in **tutte** le pagine.

## Pagine incluse

| File | Contenuto |
|---|---|
| `index.html` | Home: hero, funzionalità, modalità, spotlight sulla musica, anteprime, prezzo |
| `privacy.html` | Informativa privacy (obbligatoria per App Store Connect) |
| `terms.html` | Termini d'uso / EULA |
| `support.html` | FAQ + contatto assistenza (obbligatoria per App Store Connect) |
| `press.html` | Press kit: fact sheet, boilerplate, contatto stampa |
| `sfida/index.html` | Pagina di atterraggio per un link di sfida, per chi non ha ancora l'app |
| `styles.css` | Foglio di stile condiviso |
| `lang.js` | Selettore lingua EN/IT condiviso da tutte le pagine |

Queste sono le pagine che Apple richiede/si aspetta in fase di
submission: **Support URL** (obbligatorio, campo dedicato in App Store
Connect) e **Privacy Policy URL** (obbligatorio). Termini e Press kit
non sono strettamente richiesti da Apple ma sono standard per qualunque
app con acquisti in-app ed è utile averli pronti per il featuring.

## Dal 20/10/2026: sempre «Scarica»
L'app è uscita. `lancio.js` non controlla più né la data né l'App Store: aggiunge soltanto la classe `lanciato`, e `styles.css` nasconde sempre `.prima-del-lancio` (vale anche senza JavaScript). Si vede sempre il pulsante «Scarica su App Store» con il link `https://apps.apple.com/app/id6788836304`. Il controllo precedente (iTunes Lookup solo per l'Italia) lasciava il sito indietro: l'indice di ricerca italiano si aggiorna più tardi della pagina.

