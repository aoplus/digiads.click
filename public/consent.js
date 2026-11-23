/* DigiAds consent and analytics loader.
 * Google Analytics 4 is NOT loaded, and nothing is sent to Google, until the visitor presses "Accept analytics".
 * Reject is as easy as accept. The choice is stored in this browser only (localStorage) with the wording version and the time, and expires after 180 days
 * or when the wording version changes. A browser signal "Global Privacy Control" is treated as a decline. Ads features are always off.
 * Usage: <script src="/consent.js" data-ga="G-XXXX" defer></script>   (data-events="off" disables the generic data-event click tracking)
 * Pages can call window.digiadsConsent.track(name, params) and .open() (the "Cookie settings" link: any element with data-consent-open). */
(function () {
  'use strict';
  var S = document.currentScript, GA = (S && S.getAttribute('data-ga')) || '', EVENTS = !(S && S.getAttribute('data-events') === 'off');
  var KEY = 'digiads_consent', VERSION = '2026-11-23', MAX_AGE = 180 * 864e5, PRIVACY = '/privacy';
  var granted = false, loaded = false, banner = null;

  function load() { try { var r = JSON.parse(localStorage.getItem(KEY) || 'null'); return r && r.v === VERSION && typeof r.a === 'boolean' && Date.now() - r.t < MAX_AGE ? r : null; } catch (e) { return null; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify({ v: VERSION, a: a, t: Date.now() })); } catch (e) { /* private mode: the choice lasts for this page only */ } }

  window.dataLayer = window.dataLayer || [];
  // Everything routed through gtag is dropped unless the visitor has accepted, so no page can send analytics by accident.
  window.gtag = function () { if (granted) window.dataLayer.push(arguments); };
  function raw() { window.dataLayer.push(arguments); }

  function loadGA() {
    if (loaded || !GA) return; loaded = true; window['ga-disable-' + GA] = false;
    raw('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
    raw('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    raw('js', new Date()); raw('config', GA, { allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA); document.head.appendChild(s);
  }
  function clearCookies() { // remove Google Analytics cookies set earlier on this site
    var host = location.hostname, parts = host.split('.'), domains = ['', host]; if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.')); else domains.push('.' + host);
    document.cookie.split(';').forEach(function (c) { var n = c.split('=')[0].trim(); if (n === '_ga' || n.indexOf('_ga_') === 0 || n === '_gid' || n.indexOf('_gat') === 0) domains.forEach(function (d) { document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : ''); }); });
  }
  function apply(a) {
    granted = a;
    if (a) loadGA();
    else if (loaded) { window['ga-disable-' + GA] = true; raw('consent', 'update', { analytics_storage: 'denied' }); clearCookies(); }
  }
  function choose(a) { save(a); apply(a); hide(); }

  function css() {
    if (document.getElementById('dg-consent-css')) return;
    var st = document.createElement('style'); st.id = 'dg-consent-css';
    st.textContent = '.dgc{position:fixed;z-index:2147483000;left:16px;bottom:16px;max-width:460px;background:#fff;color:#16161a;border:1px solid #d9d9d4;border-radius:14px;box-shadow:0 10px 40px #0003;padding:16px 18px;font:14px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}' +
      '.dgc h2{margin:0 0 4px;font-size:15px}.dgc p{margin:0 0 12px;color:#4a4a52}.dgc a{color:inherit;text-decoration:underline}.dgc .r{display:flex;gap:10px;flex-wrap:wrap}' +
      '.dgc button{flex:1;min-width:140px;padding:10px 14px;border-radius:10px;border:1px solid #3d3df5;background:#fff;color:#3d3df5;font:600 14px system-ui,sans-serif;cursor:pointer}.dgc button:focus-visible,.dgc a:focus-visible{outline:3px solid #3d3df5;outline-offset:2px}' +
      '.dgc .st{font-size:12px;color:#62626b;margin:8px 0 0}@media(max-width:560px){.dgc{left:10px;right:10px;bottom:10px;max-width:none}}' +
      '@media(prefers-color-scheme:dark){.dgc{background:#1a1a1e;color:#f1f1f3;border-color:#2c2c33}.dgc p{color:#c4c4cc}.dgc button{background:#1a1a1e;color:#a9a9ff;border-color:#8c8cff}.dgc .st{color:#a0a0aa}}';
    document.head.appendChild(st);
  }
  function show() {
    if (banner || !GA) return; css();
    banner = document.createElement('div'); banner.className = 'dgc'; banner.setAttribute('role', 'dialog'); banner.setAttribute('aria-label', 'Cookie and analytics choice'); banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = '<h2>Help us improve this site?</h2><p>With your permission we use Google Analytics cookies to see which pages and audits people use. They stay off unless you accept, and we do not use them for advertising. <a href="' + PRIVACY + '">Privacy policy</a></p>' +
      '<div class="r"><button type="button" data-dgc="accept">Accept analytics</button><button type="button" data-dgc="decline">No thanks</button></div><p class="st"></p>';
    banner.querySelector('.st').textContent = load() ? 'Analytics is currently ' + (granted ? 'on' : 'off') + '. Your choice is saved in this browser for 6 months.' : '';
    banner.addEventListener('click', function (e) { var b = e.target.closest('[data-dgc]'); if (b) choose(b.getAttribute('data-dgc') === 'accept'); });
    document.body.appendChild(banner);
  }
  function hide() { if (banner) { banner.remove(); banner = null; } }

  function init() {
    var stored = load();
    if (stored) apply(stored.a);
    else if (navigator.globalPrivacyControl === true) { save(false); apply(false); } // browser privacy signal: decline, and do not nag
    else show();
    document.addEventListener('click', function (e) {
      var o = e.target.closest && e.target.closest('[data-consent-open]'); if (o) { e.preventDefault(); hide(); show(); return; }
      if (!EVENTS || !granted) return;
      var a = e.target.closest && e.target.closest('[data-event]'); if (a) window.gtag('event', a.dataset.event, { location: a.dataset.location, page: location.pathname });
    });
  }
  window.digiadsConsent = { version: VERSION, analytics: function () { return granted; }, open: function () { hide(); show(); }, track: function (name, params) { if (granted) window.gtag('event', name, params || {}); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
