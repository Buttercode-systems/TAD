# Invoice Admin Validation

## Validation purpose

Prove that Invoice Admin is operationally useful before selling it as a paid pilot.

The system must show whether supplier documents are captured, checked, approved, filed, and reported properly.

## Required fields

Every invoice/document record must have:

- received date
- source
- supplier name
- document type
- invoice/reference number where applicable
- total amount where applicable
- status
- assigned owner
- next action for active records
- document link before filing

## Status logic

### New

Allowed only when item has just entered the tracker.

Fail if older than 1 business day.

### Needs Capture

Use when the item exists but key fields are not yet captured.

Must have owner and next action.

### Missing Info

Use when required supplier/document details are missing.

Must state missing info and who must be contacted.

### Possible Duplicate

Use when invoice number, supplier, amount, or date appears similar to an existing item.

Must block approval until reviewed.

### Ready for Review

Allowed only when required fields are captured and no critical exception is open.

### Waiting for Approval

Use when human decision is needed.

Must have approval owner.

### Approved

Allowed only after human approval.

Does not mean paid.

### Filed

Allowed only when document link and folder link exist.

### Paid

Allowed only when payment status is confirmed by a trusted source or manually confirmed by the client.

## Critical failure conditions

The system fails validation if:

- invoice can be marked Approved without approval owner
- invoice can be marked Filed without document/folder link
- missing information is not visible
- duplicate warnings do not block approval
- weekly report counts cannot be traced back to tracker statuses
- payment readiness is confused with actual payment execution

## Test scenarios

### INV-T01 Complete invoice intake

Input: known supplier, invoice number, invoice date, due date, total amount, VAT, category, document link.

Expected: Ready for Review.

Pass: record has owner and next action.

### INV-T02 Missing VAT details

Input: invoice includes VAT but supplier VAT number missing.

Expected: Missing Info.

Pass: missing field is listed and next action requests supplier VAT number.

### INV-T03 Possible duplicate

Input: invoice appears similar to prior invoice.

Expected: Possible Duplicate.

Pass: approval is blocked until duplicate decision is recorded.

### INV-T04 New supplier high-value invoice

Input: new/unknown supplier and amount above threshold.

Expected: Waiting for Approval.

Pass: supplier approval owner is assigned.

### INV-T05 Due soon

Input: due date within 48 hours.

Expected: escalated next action.

Pass: owner and due-soon note visible.

### INV-T06 Filing readiness

Input: approved invoice with document and folder link.

Expected: Filed.

Pass: file naming convention is applied.

### INV-T07 Report accuracy

Input: tracker has records across statuses.

Expected: weekly report counts match tracker counts.

Pass: no report number is guessed.

## Pilot-ready threshold

Invoice Admin is pilot-ready when:

- INV-T01 to INV-T07 pass
- no critical failure exists
- client can understand the exception queue
- weekly report can be produced without guessing
