# Live Sheet Test Result — Invoice Admin

Use this after creating the live Google Sheet.

## Test date

YYYY-MM-DD

## Sheet environment

- Google Sheet created: Yes/No
- Demo/synthetic data only: Yes/No
- Real client data excluded: Yes/No

## Formula test results

| Formula area | Expected | Actual | Pass/Fail | Notes |
|---|---|---|---|---|
| Required field check | Missing fields visible | | | |
| Due-soon flag | Due-soon items show Yes | | | |
| Approval blocked | Approval risks show Yes | | | |
| File blocked | Filed without links fails | | | |
| Ownerless active | Active no-owner records fail | | | |
| Overdue next action | Past-due active items fail | | | |
| Validation status | 7 Pass / 3 Fail | | | |
| Status block reason | Bad status movement explains why | | | |

## Expected failing records

- INV-008
- INV-009
- INV-010

## Weekly report formula results

| Metric | Expected from test data | Actual | Pass/Fail |
|---|---:|---:|---|
| Total records | 10 | | |
| Ready for review | 2 | | |
| Waiting for approval | 1 | | |
| Missing info | 1 | | |
| Possible duplicates | 1 | | |
| Filed | 2 | | |
| Failed validation records | 3 | | |

## Final verdict

- [ ] Pass — move to private pilot-test environment
- [ ] Fail — fix formulas before any pilot

## Fixes required

1.
2.
3.
