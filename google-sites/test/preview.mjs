// Writes one HTML file per widget view, rendered from the placeholder fixtures,
// so the widgets can be checked in a browser without deploying.
//   node google-sites/test/preview.mjs [outDir] [nowIso]
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as fixtures from './fixtures.mjs';
import { render } from './harness.mjs';

const out = resolve(process.argv[2] || new URL('./out', import.meta.url).pathname);
const now = process.argv[3];
const views = ['opportunities', 'open-now', 'stats', 'events-home', 'events', 'showcase-home', 'showcase'];

const pages = views.map((view) => [view, view, {}]).concat([
  ['opportunities-member', 'opportunities', { email: 'student@docchula.com' }],
  ['opportunities-full', 'opportunities', { email: 'student@docchula.com', params: { full: '1' } }]
]);

mkdirSync(out, { recursive: true });
for (const [file, view, extra] of pages) {
  writeFileSync(resolve(out, file + '.html'), render(view, { fixtures, ...(now ? { now } : {}), ...extra }));
}
writeFileSync(resolve(out, 'index.html'), '<!doctype html><meta charset="utf-8"><title>Widget previews</title><ul>' +
  pages.map(([file]) => `<li><a href="${file}.html">${file}</a></li>`).join('') + '</ul>');
console.log('Wrote ' + pages.length + ' previews to ' + out);
