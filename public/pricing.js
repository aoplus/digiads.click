/* DigiAds PPP pricing. Static HTML is INR; this swaps price text, the tax line and form budget bands after load.
 * Order: ?region= override, saved toggle, /api/geo (1500 ms), browser timezone. Never redirects and never checks the user agent. */
(function () {
  'use strict';
  var KEY = 'digiads_pricing_zone', d, root = document.documentElement;
  try { d = JSON.parse(document.getElementById('pricing-data').textContent); } catch (e) { return; }
  var ZONES = { IN: 1, INTL_T1: 1, INTL_T2: 1 };
  function zoneFor(cc) { cc = String(cc || '').toUpperCase(); return cc === 'IN' ? 'IN' : d.t1.indexOf(cc) > -1 ? 'INTL_T1' : 'INTL_T2'; }
  function fromParam() { var p = null; try { p = new URLSearchParams(location.search).get('region'); } catch (e) { return null; } if (!p) return null; p = p.toUpperCase(); return p === 'INTL' ? 'INTL_T1' : ZONES[p] ? p : zoneFor(p); }
  function saved() { try { var v = localStorage.getItem(KEY); return ZONES[v] ? v : null; } catch (e) { return null; } }
  function money(key, z) { var p = d.prices[key]; if (!p) return null; return z === 'IN' ? '₹' + p.IN.toLocaleString('en-IN') : '$' + p[z].toLocaleString('en-US'); }
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function apply(z) {
    root.setAttribute('data-zone', z);
    each('[data-price]', function (e) { var t = money(e.getAttribute('data-price'), z); if (t) e.textContent = t; });
    each('[data-tax]', function (e) { e.textContent = d.tax[z]; });
    each('[data-zone-label]', function (e) { e.textContent = z === 'IN' ? 'IN · INR ₹' : 'Global · USD $'; });
    each('[data-zone-set]', function (b) { var on = (b.getAttribute('data-zone-set') === 'IN') === (z === 'IN'); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    each('input[name=pricing_zone]', function (e) { e.value = z; });
    each('input[name=currency]', function (e) { e.value = z === 'IN' ? 'INR' : 'USD'; });
    each('select[data-budget]', function (s) { var cur = s.selectedIndex; s.innerHTML = ''; d.bands[z].forEach(function (b) { var o = document.createElement('option'); o.textContent = b; s.appendChild(o); }); s.selectedIndex = Math.max(cur, 0); });
    window.digiadsPricing = { zone: z, currency: z === 'IN' ? 'INR' : 'USD' };
  }
  var detected = null;
  function choose(z, persist) { if (persist) { try { localStorage.setItem(KEY, z); } catch (e) { /* storage is optional */ } } apply(z); }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-zone-set]'); if (!b) return;
    var want = b.getAttribute('data-zone-set'); choose(want === 'IN' ? 'IN' : (detected && detected !== 'IN' ? detected : 'INTL_T1'), true);
  });
  var forced = fromParam() || saved();
  if (forced) { if (forced !== 'IN') detected = forced; choose(forced, false); return; }
  var tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { tz = ''; }
  var fallback = (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') ? 'IN' : 'INTL_T1';
  var done = false;
  function finish(z) { if (done) return; done = true; if (z !== 'IN') detected = z; choose(z, false); }
  try {
    var ctl = new AbortController(), t = setTimeout(function () { ctl.abort(); }, 1500);
    fetch('/api/geo', { cache: 'no-store', signal: ctl.signal }).then(function (r) { return r.ok ? r.json() : Promise.reject(); }).then(function (j) { clearTimeout(t); finish(j && j.country && j.country !== 'XX' && j.country !== 'T1' ? zoneFor(j.country) : fallback); }).catch(function () { clearTimeout(t); finish(fallback); });
  } catch (e) { finish(fallback); }
})();
