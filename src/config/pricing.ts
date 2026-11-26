// Centralised pricing for the retainer and program prices on the site. Static HTML always renders INR (crawlable, no JS needed);
// public/pricing.js swaps to PPP USD after hydration. Shop audit prices (399 to 3,999) are NOT here: the shop charges in INR only.
// USD figures follow the owner's PPP rule: INTL_T1 = round50(inr / 22.5), INTL_T2 = round50(inr / 38). Growth monthly (35,000) uses the brief's explicit values.

export type Zone = 'IN' | 'INTL_T1' | 'INTL_T2';

export const T1_COUNTRIES = ['US','GB','CA','AU','NZ','IE','CH','NO','DK','SE','FI','NL','DE','FR','BE','AT','LU','SG','AE','QA','SA','KW','BH','OM','JP','IL','KR','HK','ES','IT','PT'];

export const round50 = (n: number) => Math.round(n / 50) * 50;
const derive = (inr: number) => ({ IN: inr, INTL_T1: round50(inr / 22.5), INTL_T2: round50(inr / 38) });

export const PRICES: Record<string, { IN: number; INTL_T1: number; INTL_T2: number }> = {
  'starter-monthly': derive(15000),
  'growth-monthly': { IN: 35000, INTL_T1: 1550, INTL_T2: 900 },
  'scale-monthly': derive(75000),
  'program': derive(90000),
  'ai-addon-monthly': derive(9999),
};

export const TAX: Record<Zone, string> = {
  IN: '+ 18% GST · Ad spend paid directly',
  INTL_T1: '0% GST Export (LUT) · Ad spend paid directly',
  INTL_T2: '0% GST Export (LUT) · Ad spend paid directly',
};

export const BUDGET_BANDS: Record<Zone, string[]> = {
  IN: ['Under ₹35K', '₹35K–₹75K', '₹75K–₹1.5L', '₹1.5L+'],
  INTL_T1: ['Under $1,500', '$1,500–$3,000', '$3,000–$6,000', '$6,000+'],
  INTL_T2: ['Under $900', '$900–$1,800', '$1,800–$3,500', '$3,500+'],
};

export const fmt = (key: string, zone: Zone = 'IN') => {
  const p = PRICES[key]; if (!p) return '';
  return zone === 'IN' ? '₹' + p.IN.toLocaleString('en-IN') : '$' + p[zone].toLocaleString('en-US');
};

// Marker used inside plain-text config strings: {{p:program}} becomes a price span.
export const priceSpan = (key: string) => `<span class="price-num" data-price="${key}">${fmt(key)}</span>`;
export const withPrices = (s: string) => s.replace(/\{\{p:([a-z0-9-]+)\}\}/g, (_m, k) => priceSpan(k));

// Data for the client script (inline JSON). Kept tiny.
export const pricingData = { prices: PRICES, tax: TAX, bands: BUDGET_BANDS, t1: T1_COUNTRIES };

// JSON-LD offers declaring both currencies, so structured data is transparent for India and global search.
export const offerFor = (key: string, name: string) => ([
  { '@type': 'Offer', name, priceCurrency: 'INR', price: String(PRICES[key].IN), eligibleRegion: { '@type': 'Country', name: 'IN' } },
  { '@type': 'Offer', name, priceCurrency: 'USD', price: String(PRICES[key].INTL_T1), ineligibleRegion: { '@type': 'Country', name: 'IN' } },
]);
