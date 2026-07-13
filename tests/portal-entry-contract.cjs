const assert = require('node:assert/strict');
const fs = require('node:fs');

const home = fs.readFileSync('index.html', 'utf8');
const hq = fs.readFileSync('ops/index.html', 'utf8');
const portal = fs.readFileSync('portal/index.html', 'utf8');

for (const phrase of ['href="portal/"', 'Client Portal', 'href="ops/"', 'Admin HQ']) {
  assert.ok(home.includes(phrase), `homepage must include ${phrase}`);
}
assert.equal(home.includes('Process + people + DueToday'), false, 'homepage must not sell DueToday as the managed-service product');
assert.equal(home.includes('DueToday keeps the actions visible'), false, 'homepage must describe the TAD Client Portal instead');
assert.ok(home.includes('private TAD Client Portal workspace'), 'service process must name the client-facing workspace');

assert.ok(hq.includes('https://due-today-six.vercel.app/hq'), 'operator entry must use the branded Admin HQ route');
assert.ok(hq.includes('Opening TAD Admin HQ'), 'operator handoff must remain TAD branded');
assert.equal(hq.includes('DueToday authentication'), false, 'operator handoff must not expose the engine brand');

assert.ok(portal.includes('https://due-today-six.vercel.app/portal'), 'client entry must use the branded portal route');
assert.ok(portal.includes('Opening your TAD Client Portal'), 'client handoff must remain TAD branded');
assert.ok(portal.includes('decisions, workflow progress and weekly service reports'), 'client entry must explain the portal purpose');

console.log('TAD public portal entry contract passed.');
