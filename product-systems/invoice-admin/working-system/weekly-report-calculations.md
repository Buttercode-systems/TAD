# Weekly Report Calculations — Invoice Admin

Use these calculations in the `Weekly Report` tab.

Assume the tracker tab is named `Invoice Tracker`.

## Total invoices/documents received

```gs
=COUNTA('Invoice Tracker'!A2:A)
```

## Ready for review

```gs
=COUNTIF('Invoice Tracker'!M2:M, "Ready for Review")
```

## Waiting for approval

```gs
=COUNTIF('Invoice Tracker'!M2:M, "Waiting for Approval")
```

## Missing information

```gs
=COUNTIF('Invoice Tracker'!M2:M, "Missing Info")
```

## Possible duplicates

```gs
=COUNTIF('Invoice Tracker'!M2:M, "Possible Duplicate")
```

## Filed

```gs
=COUNTIF('Invoice Tracker'!M2:M, "Filed")
```

## Paid

```gs
=COUNTIF('Invoice Tracker'!Q2:Q, "Paid")
```

## Failed validation records

```gs
=COUNTIF('Invoice Tracker'!AE2:AE, "Fail")
```

## Due soon

```gs
=COUNTIF('Invoice Tracker'!Z2:Z, "Yes")
```

## Approval blocked

```gs
=COUNTIF('Invoice Tracker'!AA2:AA, "Yes")
```

## File blocked

```gs
=COUNTIF('Invoice Tracker'!AB2:AB, "Yes")
```

## Ownerless active records

```gs
=COUNTIF('Invoice Tracker'!AC2:AC, "Yes")
```

## Overdue next actions

```gs
=COUNTIF('Invoice Tracker'!AD2:AD, "Yes")
```

## Total value waiting for approval

```gs
=SUMIF('Invoice Tracker'!M2:M, "Waiting for Approval", 'Invoice Tracker'!I2:I)
```

## Total value ready for review

```gs
=SUMIF('Invoice Tracker'!M2:M, "Ready for Review", 'Invoice Tracker'!I2:I)
```

## Total value with failed validation

```gs
=SUMIF('Invoice Tracker'!AE2:AE, "Fail", 'Invoice Tracker'!I2:I)
```

## Top attention table

Filter active failed or blocked records:

```gs
=FILTER('Invoice Tracker'!A2:X, ('Invoice Tracker'!AE2:AE="Fail") + ('Invoice Tracker'!AA2:AA="Yes") + ('Invoice Tracker'!AD2:AD="Yes"))
```

## Report quality rule

No weekly report number may be typed manually if it can be calculated from the tracker.
