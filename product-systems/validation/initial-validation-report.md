# Initial Validation Report

Date: 2026-07-10

## Verdict

The first three systems are **not yet ready to sell as fully working operating systems**.

They are currently **strong workflow prototypes** with demos, trackers, SOPs, templates, reports, and offer pages.

They become pilot-ready only after the validation fixes below are completed.

## What works now

### Invoice Admin

Works as a workflow prototype:

- invoice records can be represented in a tracker
- supplier register exists
- exception queue exists
- statuses exist
- SOP exists
- weekly report template exists
- demo dashboard explains the flow

Not fully proven yet:

- report numbers are demo/static, not generated from tracker calculations
- CSV does not enforce required fields
- approval gates are documented but not technically enforced
- document/folder links are placeholder examples
- no real email/PDF intake has been tested

### Sales Admin

Works as a workflow prototype:

- lead records can be represented in a tracker
- quote/follow-up queue exists
- statuses exist
- SOP exists
- weekly report template exists
- demo dashboard explains the flow

Not fully proven yet:

- follow-up overdue logic is not automatically calculated
- open quote value is demo/static, not generated from live records
- first-response timing is not technically enforced
- no real WhatsApp/email/form intake has been tested
- CSV does not enforce required fields or status rules

### Client Admin

Works as a workflow prototype:

- onboarding records can be represented in a tracker
- document checklist exists
- statuses exist
- SOP exists
- weekly report template exists
- demo dashboard explains the flow

Not fully proven yet:

- Ready to Start / Active gates are documented but not technically enforced
- document checklist does not automatically block incomplete onboarding
- report numbers are demo/static, not generated from tracker calculations
- folder status is manual
- no real onboarding case has been tested

## Critical gaps before paid pilot

### 1. Live tracker formulas or logic

Each system needs working calculated views:

- count by status
- overdue items
- missing required fields
- ownerless active records
- next actions due
- weekly summary numbers

### 2. Required-field validation

Each system needs rules that flag incomplete records.

Examples:

- Invoice Admin: Ready for Review requires supplier, amount, document, status, owner.
- Sales Admin: Quote Sent requires quote date and follow-up due date.
- Client Admin: Active requires documents/payment/agreement/folder/handover checks.

### 3. Stop/go gates

Risky statuses must be blocked or visibly flagged.

Examples:

- Invoice cannot be Approved without approval owner.
- Sales quote cannot be left without follow-up date.
- Client cannot become Active while required onboarding items are incomplete.

### 4. Report generation

Weekly reports must be generated from tracker data, not written manually from memory.

### 5. Real pilot simulation

Each system must be tested with realistic records:

- 10 invoices
- 10 leads
- 5 onboarding cases

## Readiness status by system

| System | Prototype Ready | Pilot Ready | Reason |
|---|---:|---:|---|
| Invoice Admin | Yes | No | Needs formulas, validation, report generation, and real record test |
| Sales Admin | Yes | No | Needs overdue/follow-up logic, report generation, and real lead test |
| Client Admin | Yes | No | Needs onboarding gate enforcement, report generation, and real case test |

## Next build sprint

Build the **working spreadsheet/system logic layer** for all three systems.

This means:

1. Define required fields.
2. Define status transition rules.
3. Define calculated flags.
4. Define report calculations.
5. Create a test run file showing pass/fail results.

## No-sell rule

Do not sell these as working systems until at least one system passes an internal validation run with realistic records.

Best first system to validate: **Invoice Admin**.
