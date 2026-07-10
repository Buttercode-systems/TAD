# Live Sheet Build Instructions — Invoice Admin

Use this to build the first working Invoice Admin Google Sheet.

## 1. Create tabs

Create these tabs:

1. `Invoice Tracker`
2. `Supplier Register`
3. `Exception Queue`
4. `Weekly Report`
5. `Settings`

## 2. Import tracker

Import:

- `invoice-tracker-v1.csv`

Into tab:

- `Invoice Tracker`

## 3. Add formulas

Use formulas from:

- `google-sheets-formulas.md`

Add them to the calculated columns:

- `missing_required_fields`
- `due_soon_flag`
- `approval_blocked`
- `file_blocked`
- `ownerless_active`
- `overdue_next_action`
- `validation_status`

## 4. Add dropdowns

### Status dropdown

Allowed values:

- New
- Needs Capture
- Missing Info
- Possible Duplicate
- Ready for Review
- Waiting for Approval
- Approved
- Filed
- Rejected
- Paid

### Priority dropdown

Allowed values:

- Low
- Normal
- High

### Payment status dropdown

Allowed values:

- Unpaid
- Paid
- Disputed
- Not applicable

## 5. Add conditional formatting

- `validation_status = Fail` → red row
- `due_soon_flag = Yes` → amber due date
- `approval_blocked = Yes` → amber status
- `file_blocked = Yes` → red document/folder columns
- `ownerless_active = Yes` → red owner column
- `overdue_next_action = Yes` → red next-action due date

## 6. Build weekly report tab

Add calculations:

- total invoices received
- ready for review
- waiting for approval
- missing info
- possible duplicates
- filed
- failed validation records
- overdue next actions

## 7. Test expected results

Using the 10-record test data:

- 7 records should pass
- 3 records should fail

Fail records should be:

- `INV-008`
- `INV-009`
- `INV-010`

## 8. Stop/go

If the formula results match the expected results, Invoice Admin can move to private pilot-test environment.

If not, fix formulas before using with any client data.
