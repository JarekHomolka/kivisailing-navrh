// KiviSailing mockup – sdílená hlavička, patička, ikony a přepínač měny CZK/EUR.
(function () {
  const I = {
    sail: '<svg viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M30 8 L30 108"/><path d="M33 12 C62 40 78 76 82 104 L33 104 Z" fill="currentColor" fill-opacity=".08"/><path d="M40 40 L68 40 M38 62 L76 62 M36 84 L80 84" stroke-opacity=".35"/><text x="46" y="80" font-family="Barlow Condensed, Arial" font-weight="800" font-size="16" fill="#d0342c" stroke="none">ILCA</text><path d="M18 108 L92 108"/></svg>',
    hull: '<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M8 34 L112 34 C108 50 96 60 70 62 L30 62 C18 60 10 50 8 34 Z" fill="currentColor" fill-opacity=".08"/><path d="M58 34 L58 6"/><path d="M60 62 L60 76"/></svg>',
    rudder: '<svg viewBox="0 0 80 120" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M30 10 L50 10 L50 30 L44 112 C40 116 36 116 34 112 L30 30 Z" fill="currentColor" fill-opacity=".08"/><path d="M50 18 L72 14"/></svg>',
    strap: '<svg viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="20" width="100" height="20" rx="10" fill="currentColor" fill-opacity=".08"/><path d="M30 20 L30 40 M90 20 L90 40" stroke-opacity=".4"/><circle cx="12" cy="30" r="4"/><circle cx="108" cy="30" r="4"/></svg>',
    vest: '<svg viewBox="0 0 100 110" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M30 8 L42 8 C44 18 56 18 58 8 L70 8 L88 30 L84 100 L16 100 L12 30 Z" fill="currentColor" fill-opacity=".08"/><path d="M50 26 L50 100"/><path d="M18 56 L82 56 M17 76 L83 76" stroke-opacity=".4"/></svg>',
    hike: '<svg viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M22 8 L78 8 L80 60 L70 112 L54 112 L50 62 L46 112 L30 112 L20 60 Z" fill="currentColor" fill-opacity=".08"/><path d="M24 40 L48 40 M52 40 L76 40" stroke-opacity=".4"/></svg>',
    boot: '<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M20 10 L52 10 L54 44 L96 50 C108 52 112 60 110 68 L18 68 Z" fill="currentColor" fill-opacity=".08"/><path d="M18 60 L110 60" stroke-opacity=".4"/></svg>',
    dolly: '<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 30 L110 30 M30 30 L40 56 M90 30 L80 56 M40 56 L80 56"/><circle cx="40" cy="64" r="9" fill="currentColor" fill-opacity=".08"/><circle cx="80" cy="64" r="9" fill="currentColor" fill-opacity=".08"/><path d="M110 30 L116 20"/></svg>',
    spar: '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 108 L100 12"/><path d="M28 108 L106 18" stroke-opacity=".3"/><circle cx="62" cy="58" r="4" fill="currentColor"/></svg>',
    optimist: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M40 10 L40 82"/><path d="M42 16 L80 28 L82 70 L42 76 Z" fill="currentColor" fill-opacity=".08"/><path d="M14 82 L86 82 L80 92 L20 92 Z"/></svg>',
    finn: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M40 6 L40 84"/><path d="M42 10 C70 30 82 60 84 80 L42 80 Z" fill="currentColor" fill-opacity=".08"/><path d="M14 84 L88 84 C84 92 76 94 60 94 L30 94 C20 94 16 90 14 84 Z"/></svg>',
    wave: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 50 C20 38 32 38 44 50 C56 62 68 62 80 50 C86 44 90 42 94 42"/><path d="M8 70 C20 58 32 58 44 70 C56 82 68 82 80 70" stroke-opacity=".5"/><circle cx="72" cy="24" r="10"/></svg>',
    shirt: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M34 10 L20 16 L6 36 L20 44 L24 38 L24 90 L76 90 L76 38 L80 44 L94 36 L80 16 L66 10 C62 18 38 18 34 10 Z" fill="currentColor" fill-opacity=".08"/></svg>',
    tag: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M50 10 L88 10 L88 48 L46 90 L10 54 Z" fill="currentColor" fill-opacity=".08"/><circle cx="72" cy="26" r="6"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8"/><path d="M14.7 6.3 9 12l3 3"/><path d="M3 21l6-6"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M2 6h12v10H2zM14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    return: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><circle cx="12" cy="15" r="5"/><path d="M8 3h8l-2 7h-4z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 4h2l2.4 11h11L21 7H6.2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    logo: '<svg viewBox="0 0 40 40" fill="none"><path d="M14 4 C26 12 32 24 33 34 L14 34 Z" fill="#1f5fae"/><path d="M11 8 L11 34 L3 34 C5 22 8 14 11 8 Z" fill="#0b2545"/><path d="M1 37 C10 33 30 33 39 37" stroke="#1f5fae" stroke-width="2.2"/></svg>'
  };
  window.KIVI_ICONS = I;

  document.querySelectorAll('[data-i]').forEach(el => { el.insertAdjacentHTML('afterbegin', I[el.dataset.i] || ''); });

  const page = document.body.dataset.page;
  const header = `
  <div class="topbar"><div class="wrap">
    <div class="usp"><span><b>Doprava zdarma</b> nad 3 000 Kč</span><span>Skladem v Lipůvce u Brna</span><span>Poradíme s výběrem – jezdíme závody</span></div>
    <div>+420 728 087 125 · info@kivisailing.cz</div>
  </div></div>
  <header class="header"><div class="wrap">
    <button class="burger" aria-label="Menu">${I.menu}</button>
    <a class="brand-logo" href="uvod.html" aria-label="KiviSailing – domů"><img src="assets/logo-kivisailing.png" alt="KiviSailing"></a>
    <nav class="nav">
      <a href="kategorie.html" class="${page === 'cat' ? 'active' : ''}">ILCA</a><a href="kategorie.html">Optimist</a><a href="kategorie.html">Finn</a><a href="kategorie.html">Oblečení</a><a href="kategorie.html">Použité</a><a href="uvod.html#sluzby">Servis &amp; půjčovna</a>
    </nav>
    <label class="search">${I.search}<input id="q" type="search" placeholder="Hledat plachtu, kování, vestu…"></label>
    <div class="tools">
      <div class="toggle lang"><button aria-pressed="true">CZ</button><button aria-pressed="false">EN</button></div>
      <div class="toggle cur"><button data-cur="czk" aria-pressed="true">Kč</button><button data-cur="eur" aria-pressed="false">€</button></div>
      <a class="cart-btn" href="pokladna.html">${I.cart}<span class="lbl price-sm" data-czk="11 990 Kč" data-eur="480 €">11 990 Kč</span><span class="badge">2</span></a>
    </div>
  </div></header>`;
  const footer = `
  <footer class="footer"><div class="wrap">
    <div><a class="brand-logo" href="uvod.html" aria-label="KiviSailing – domů"><img src="assets/logo-kivisailing.png" alt="KiviSailing"></a>
      <p style="max-width:34ch">Jachtařské vybavení, které sami používáme na závodech. Prodej, servis a půjčovna lodí ILCA.</p>
      <div class="pay-logos"><span>VISA</span><span>Mastercard</span><span>Apple Pay</span><span>Google Pay</span><span>QR Platba</span></div></div>
    <div><h4>Obchod</h4><ul><li>ILCA</li><li>Optimist</li><li>Finn</li><li>Oblečení</li><li>Použité zboží</li></ul></div>
    <div><h4>Nákup</h4><ul><li>Doprava a platba</li><li>Vrácení zboží</li><li>Obchodní podmínky</li><li>Ochrana osobních údajů</li></ul></div>
    <div><h4>Kontakt</h4><ul><li>KiviSailing, s.r.o.</li><li>Lipůvka 523, 679 22</li><li>IČ 17480540</li><li>+420 728 087 125</li></ul></div>
    <div class="legal"><span>© 2026 KiviSailing, s.r.o.</span><span>Návrh designu – mockup, ceny v Kč jsou ilustrativní</span></div>
  </div></footer>`;
  const h = document.getElementById('site-header'); if (h) h.outerHTML = header;
  const f = document.getElementById('site-footer'); if (f) f.outerHTML = footer;

  function setCur(c) {
    document.querySelectorAll('[data-czk]').forEach(el => {
      const v = el.dataset[c]; const old = el.dataset[c + 'Old'];
      el.innerHTML = (old ? `<s>${old}</s>` : '') + v;
    });
    document.querySelectorAll('[data-cur]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cur === c)));
    try { localStorage.setItem('kivi-cur', c); } catch (e) {}
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-cur]'); if (b) setCur(b.dataset.cur); });
  let saved = 'czk'; try { saved = localStorage.getItem('kivi-cur') || 'czk'; } catch (e) {}
  setCur(new URLSearchParams(location.search).get('cur') || saved);
})();
