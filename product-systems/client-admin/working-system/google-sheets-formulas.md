# Client Admin Google Sheets Formulas

These formulas turn the Client Admin tracker into a working manual system in Google Sheets.

Assume row 2 is the first data row.

## Required field check

Column `missing_required_fields` should identify missing fields.

Important: an onboarding record can be incomplete while honestly in early or blocked statuses such as `Documents Requested`, `Waiting for Client`, `Internal Setup`, `Payment/Agreement Pending`, or `Stuck`. It fails only when it tries to move into advanced statuses such as `Ready to Start` or `Active` while gates are incomplete.

```gs
=TEXTJOIN(";", TRUE,
 IF(C2="", "client_name", ""),
 IF(H2="", "service_package", ""),
 IF(I2="", "status", ""),
 IF(AND(NOT(OR(I2="Active",I2="Cancelled")), J2=""), "assigned_to", ""),
 IF(AND(NOT(OR(I2="Active",I2="Cancelled")), R2=""), "next_action", ""),
 IF(AND(OR(I2="Ready to Start",I2="Active"), M2=""), "agreement_status", ""),
 IF(AND(OR(I2="Ready to Start",I2="Active"), N2=""), "payment_status", "")
)
```

## Missing document count

```gs
=COUNTIFS('Document Checklist'!$B:$B,A2,'Document Checklist'!$F:$F,"Missing")+COUNTIFS('Document Checklist'!$B:$B,A2,'Document Checklist'!$F:$F,"Partial")
```

## Gate blocked

```gs
=IF(AND(OR(I2="Ready to Start",I2="Active"),OR(U2>0,AND(M2<>"Signed",M2<>"Not applicable"),AND(N2<>"Paid",N2<>"Not applicable"),O2<>"Yes",Q2<>"Yes")),"Yes","No")
```

## Folder blocked

```gs
=IF(AND(OR(I2="Ready to Start",I2="Active"),OR(O2<>"Yes",P2="")),"Yes","No")
```

## Handover blocked

```gs
=IF(AND(OR(I2="Ready to Start",I2="Active"),Q2<>"Yes"),"Yes","No")
```

## Ownerless active record

```gs
=IF(AND(NOT(OR(I2="Active",I2="Cancelled")),J2=""),"Yes","No")
```

## Overdue next action

Uses the test/control date in `Settings!$B$2`.

```gs
=IF(AND(S2<>"",S2<Settings!$B$2,NOT(OR(I2="Active",I2="Cancelled"))),"Yes","No")
```

## Status block reason

```gs
=TEXTJOIN("; ",TRUE,
 IF(AND(OR(I2="Ready to Start",I2="Active"),U2>0),"Blocked: missing/partial documents",""),
 IF(AND(OR(I2="Ready to Start",I2="Active"),AND(M2<>"Signed",M2<>"Not applicable")),"Blocked: agreement not signed",""),
 IF(AND(OR(I2="Ready to Start",I2="Active"),AND(N2<>"Paid",N2<>"Not applicable")),"Blocked: payment not confirmed",""),
 IF(W2="Yes","Blocked: folder missing or link blank",""),
 IF(X2="Yes","Blocked: internal handover incomplete",""),
 IF(Y2="Yes","Blocked: active record has no owner","")
)
```

## Can progress

```gs
=IF(AA2="","Yes","No")
```

## Validation status

```gs
=IF(OR(AND(T2<>"",OR(I2="Ready to Start",I2="Active")),V2="Yes",W2="Yes",X2="Yes",Y2="Yes"),"Fail","Pass")
```

## Weekly report calculations

### Total records

```gs
=COUNTA('Onboarding Tracker'!A2:A)
```

### Documents requested

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Documents Requested")
```

### Waiting for client

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Waiting for Client")
```

### Payment/agreement pending

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Payment/Agreement Pending")
```

### Ready to start

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Ready to Start")
```

### Active

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Active")
```

### Stuck

```gs
=COUNTIF('Onboarding Tracker'!I2:I,"Stuck")
```

### Failed validation records

```gs
=COUNTIF('Onboarding Tracker'!AC2:AC,"Fail")
```

### Missing/partial document count

```gs
=COUNTIF('Document Checklist'!F2:F,"Missing")+COUNTIF('Document Checklist'!F2:F,"Partial")
```
