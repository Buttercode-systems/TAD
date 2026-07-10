# Sales Admin and Client Admin — Next Logic Work

Invoice Admin is now at Gate 1: logic-testable.

Sales Admin and Client Admin must be brought to Gate 1 next.

## Sales Admin Gate 1 build

Create:

- `product-systems/sales-admin/working-system/README.md`
- `sales-tracker-v1.csv`
- `google-sheets-formulas.md`
- `weekly-report-calculations.md`
- `status-transition-rules.md`
- `test-run-results.md`

Required flags:

- missing contact method
- urgent lead without owner
- needs response overdue
- quote sent without follow-up date
- overdue follow-up
- active lead without next action
- lost/cold without reason

## Client Admin Gate 1 build

Create:

- `product-systems/client-admin/working-system/README.md`
- `client-onboarding-v1.csv`
- `google-sheets-formulas.md`
- `weekly-report-calculations.md`
- `status-transition-rules.md`
- `test-run-results.md`

Required flags:

- missing required document
- agreement missing
- payment not confirmed
- folder missing
- internal handover incomplete
- active status blocked
- stuck onboarding

## Priority

Do not build new product pages until these logic layers exist.

The order is:

1. Finish live Invoice Admin sheet.
2. Build Sales Admin Gate 1 logic.
3. Build Client Admin Gate 1 logic.
4. Run handover test.
