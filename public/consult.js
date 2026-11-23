/* DigiAds consultation form. Every link to wa.me on the site opens this form instead; the request goes to our CRM, not to a chat app.
 * WhatsApp stays available as a fallback link inside the form. Ctrl/Cmd-click and middle-click still open the original link. */
(function () {
  'use strict';
  var API = 'https://kya.digiads.click/api/consult', box = null, lastFocus = null;
  function el(t, a, c) { var e = document.createElement(t); for (var k in (a || {})) e.setAttribute(k, a[k]); (c || []).forEach(function (x) { e.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); }); return e; }
  function css() {
    if (document.getElementById('dgq-css')) return; var s = document.createElement('style'); s.id = 'dgq-css';
    s.textContent = '.dgq-ov{position:fixed;inset:0;z-index:2147482000;background:#0007;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:16px}.dgq{background:#fff;color:#16161a;border-radius:14px;max-width:460px;width:100%;margin:auto;padding:20px;font:15px/1.5 Inter,system-ui,sans-serif;box-shadow:0 10px 40px #0004}' +
      '.dgq h2{margin:0 0 4px;font-size:20px}.dgq p{margin:4px 0 10px;color:#4a4a52}.dgq label{display:block;font-weight:600;font-size:13px;margin-top:10px}.dgq input,.dgq textarea{width:100%;padding:10px;border:1px solid #cfcfc9;border-radius:8px;font:inherit;margin-top:4px;background:#fff;color:#16161a}' +
      '.dgq .c{display:flex;gap:8px;align-items:flex-start;font-weight:400;font-size:13px}.dgq .c input{width:auto;margin-top:3px}.dgq button{padding:11px 16px;border-radius:10px;border:0;background:#3d3df5;color:#fff;font:600 15px Inter,system-ui,sans-serif;cursor:pointer;margin-top:14px}.dgq button.o{background:none;color:#3d3df5;border:1px solid #3d3df5;margin-left:8px}' +
      '.dgq .e{color:#b42318;font-size:14px;min-height:20px}.dgq .hp{position:absolute;left:-9999px;height:0;overflow:hidden}.dgq a{color:#3d3df5}.dgq input:focus-visible,.dgq textarea:focus-visible,.dgq button:focus-visible{outline:3px solid #3d3df5;outline-offset:2px}' +
      '@media(prefers-color-scheme:dark){.dgq{background:#1a1a1e;color:#f1f1f3}.dgq p{color:#c4c4cc}.dgq input,.dgq textarea{background:#101014;color:#f1f1f3;border-color:#3a3a42}.dgq button.o,.dgq a{color:#a9a9ff;border-color:#8c8cff}}';
    document.head.appendChild(s);
  }
  function track(n) { try { if (window.digiadsConsent) window.digiadsConsent.track(n, { page: location.pathname }); } catch (e) { /* analytics is optional */ } }
  function close() { if (box) { box.remove(); box = null; document.removeEventListener('keydown', onKey); if (lastFocus && lastFocus.focus) lastFocus.focus(); } }
  function onKey(e) { if (e.key === 'Escape') close(); }
  function open(wa, text) {
    close(); css(); lastFocus = document.activeElement; track('consult_open');
    var name = el('input', { name: 'name', autocomplete: 'name', required: '', maxlength: '80' }), email = el('input', { name: 'email', type: 'email', autocomplete: 'email', required: '', maxlength: '120' }),
      phone = el('input', { name: 'phone', type: 'tel', autocomplete: 'tel', required: '', maxlength: '30', placeholder: '+91 ...' }), msg = el('textarea', { name: 'message', rows: '3', maxlength: '600', placeholder: 'Tell us about your business and what you want help with (optional)' }),
      hp = el('input', { name: 'company_website', tabindex: '-1', autocomplete: 'off', 'aria-hidden': 'true' }), cons = el('input', { type: 'checkbox', id: 'dgq-c' }), err = el('div', { class: 'e', role: 'alert' }), go = el('button', { type: 'submit' }, ['Request a consultation']);
    var form = el('form', { novalidate: '' }, [el('label', {}, ['Name', name]), el('label', {}, ['Email', email]), el('label', {}, ['Phone or WhatsApp number', phone]), el('label', {}, ['Message', msg]), el('div', { class: 'hp' }, [hp]),
      el('label', { class: 'c', for: 'dgq-c' }, [cons, el('span', {}, ['I agree that AO+ may contact me by email, phone or WhatsApp about my request and related services. I can withdraw at any time. ', el('a', { href: '/privacy' }, ['Privacy policy'])])]), err, go,
      el('button', { type: 'button', class: 'o' }, ['Cancel'])]);
    form.lastChild.onclick = close;
    var dlg = el('div', { class: 'dgq', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Request a consultation' }, [el('h2', {}, ['Talk to us']), el('p', {}, ['Leave your details and we will get back to you. No payment needed.']), form,
      el('p', { style: 'font-size:13px;margin-top:14px' }, ['Prefer chat? ', el('a', { href: wa, 'data-dgq-skip': '', target: '_blank', rel: 'noopener' }, ['Message us on WhatsApp'])])]);
    box = el('div', { class: 'dgq-ov' }, [dlg]); box.addEventListener('mousedown', function (e) { if (e.target === box) close(); });
    document.body.appendChild(box); document.addEventListener('keydown', onKey); name.focus();
    form.onsubmit = function (e) {
      e.preventDefault(); err.textContent = '';
      if (!cons.checked) { err.textContent = 'Please tick the box so we can contact you.'; return; }
      go.disabled = true; go.textContent = 'Sending...';
      fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.value, email: email.value, phone: phone.value, message: (msg.value + (text ? '\n[Interest: ' + text + ']' : '')).slice(0, 600), page: location.pathname, consent: true, company_website: hp.value }) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (x) {
          if (!x.ok) { err.textContent = (x.j && x.j.error) || 'Something went wrong. Please try again.'; go.disabled = false; go.textContent = 'Request a consultation'; return; }
          track('consult_submit'); dlg.innerHTML = ''; dlg.appendChild(el('h2', {}, ['Thank you'])); dlg.appendChild(el('p', {}, ['We have received your request and will contact you on the email or number you gave.'])); var b = el('button', { type: 'button' }, ['Close']); b.onclick = close; dlg.appendChild(b); b.focus();
        }).catch(function () { err.textContent = 'Could not send. Please try again, or use WhatsApp below.'; go.disabled = false; go.textContent = 'Request a consultation'; });
    };
  }
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href*="wa.me"]'); if (!a || a.hasAttribute('data-dgq-skip')) return;
    e.preventDefault(); var t = ''; try { t = new URL(a.href).searchParams.get('text') || ''; } catch (x) { /* keep empty */ } open(a.href, (t.match(/\(([^)]+)\)/) || [])[1] || '');
  });
  window.digiadsConsult = { open: function () { open('https://wa.me/917977875818', ''); } };
})();
