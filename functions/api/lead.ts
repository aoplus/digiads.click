interface Env {
  ERP_API_KEY: string;
  ERP_API_SECRET: string;
}

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' },
});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ERP_API_KEY || !env.ERP_API_SECRET) {
    return json({ error: 'Lead capture is not configured yet.' }, 503);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid form data.' }, 400);
  }

  const value = (name: string, max = 500) => String(payload[name] || '').trim().slice(0, max);
  const name = value('name', 140);
  const business = value('business', 140);
  const phone = value('phone', 40);
  const need = value('need', 280);
  const message = value('message', 1200);

  if (!name || !phone) return json({ error: 'Please enter your name and WhatsApp number.' }, 400);

  const response = await fetch('https://aoplus.in/api/resource/Lead', {
    method: 'POST',
    headers: {
      Authorization: `token ${env.ERP_API_KEY}:${env.ERP_API_SECRET}`,
      'content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      lead_name: name,
      company_name: business || undefined,
      mobile_no: phone,
      notes: [`DigiAds.click campaign enquiry`, `Campaign: Ganeshotsav Growth Special`, need && `Need: ${need}`, message && `Message: ${message}`].filter(Boolean).join('\n'),
    }),
  });

  if (!response.ok) {
    console.error('ERP lead submission failed', response.status);
    return json({ error: 'We could not save your enquiry. Please WhatsApp us instead.' }, 502);
  }

  return json({ ok: true });
};
