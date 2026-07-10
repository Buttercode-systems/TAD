# Sales Admin Working System v1

This folder turns Sales Admin from a demo into a testable operating system.

It defines:

- required fields
- status rules
- calculated flags
- weekly report calculations
- 10-record test data
- pass/fail expectations

## Working-system rule

The tracker must be able to show:

- urgent leads without owners
- active leads without next actions
- quote-sent records without follow-up dates
- overdue follow-ups
- lost/cold leads without reasons
- weekly report counts
- open quote value

If those cannot be calculated from the tracker, the system is not ready for a paid pilot.

## Workbook artifact

Local workbook artifact created:

- `sales-admin-working-system-v1.xlsx`

Workbook tabs:

- README
- Lead Tracker
- Follow-up Queue
- Weekly Report
- Settings
- Validation Results

## Current gate

Sales Admin is now **Gate 1.5 — Local workbook validated**.

It is not Gate 2 until uploaded and tested inside Google Sheets.
