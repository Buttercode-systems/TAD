const assert = require('node:assert/strict');
const fs = require('node:fs');
const offer = require('../sales-admin-service.js');
const audit = require('../admin-audit-v2.js');

const page = fs.readFileSync('sales-admin-service.html', 'utf8');
const home = fs.readFileSync('index.html', 'utf8');

['Sales Admin Setup and Managed Follow-up','R1,500','R4,900','R3,900/month','sales-admin-application','application-result'].forEach((phrase) => {
  assert.ok(page.includes(phrase), `service page must include ${phrase}`);
});
assert.ok(home.includes('sales-admin-service.html'), 'home page must route to the paid offer');

const base = {
  business: 'Example Services',
  contact: 'Owner',
  email: 'owner@invalid.example',
  activeRecords: 20,
  followUpProblem: 'missed',
  tools: 'WhatsApp and Excel',
  outcome: 'Every quote needs a next action.',
  ownerAvailable: true,
  dataAuthority: true,
  boundaryAccepted: true,
};
const ready = offer.qualify(base);
assert.equal(ready.ready, true);
assert.equal(ready.score, 10);
assert.ok(offer.buildMailto(base, ready).startsWith('mailto:'));

const small = Object.assign({}, base, { activeRecords: 5 });
assert.equal(offer.qualify(small).ready, false);
const noAuthority = Object.assign({}, base, { dataAuthority: false });
assert.equal(offer.qualify(noAuthority).ready, false);

const auditInput = {
  business: 'Example Services', contact: 'Owner', email: 'owner@invalid.example',
  recordsPerWeek: 30, channels: 3, evidenceChecks: ['live_list'], signals: ['missed_followups'],
  areas: { invoice: 0, sales: 4, client: 0, property: 0, practice: 0, member: 0 },
  controls: { capture: 0, ownership: 0, next_action: 0, due_dates: 0, approvals: 2, visibility: 0, reporting: 0, documented: 0 },
};
const result = audit.scoreAudit(auditInput);
assert.equal(result.primary.key, 'sales');
assert.ok(audit.getOfferPath(auditInput, result).startsWith('sales-admin-service.html?'));

console.log('Sales Admin commercial flow contract passed.');
