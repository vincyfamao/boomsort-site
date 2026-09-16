// BoomSort — selettore lingua condiviso da tutte le pagine.
// Default: inglese (coerente col markup, che è già scritto lang="en"
// di serie: niente flash-of-both-languages al primo caricamento).
(function () {
  function apply(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    try { localStorage.setItem('boomsort-lang', lang); } catch (e) {}
  }

  window.setSiteLang = apply;

  var saved = null;
  try { saved = localStorage.getItem('boomsort-lang'); } catch (e) {}
  if (saved === 'it' || saved === 'en') apply(saved);
  else apply('en');
})();
