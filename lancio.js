// BoomSort — dal 20/10/2026 l'app è sull'App Store: la pagina mostra sempre «Scarica su App Store»,
// con il link vero, senza più controlli sulla data o sull'App Store. (Prima di questo giorno lo
// script decideva fra «dal 20 ottobre» e «Scarica»; si è tolta la condizione perché la ricerca
// italiana dell'App Store era in ritardo sulla pagina, e il sito restava indietro.)
document.documentElement.classList.add('lanciato');
