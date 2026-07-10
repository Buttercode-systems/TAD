# Sales Admin Google Sheets Formulas

These formulas turn the Sales Admin tracker into a working manual system in Google Sheets.

Assume row 2 is the first data row.

## Required field check

Column `missing_required_fields` should identify missing fields.

Important: a lead can be incomplete while honestly in early/capture statuses. It fails only when it has risky workflow gaps such as quote sent without follow-up, active record without owner/next action, or lost/cold without reason.

```gs
=TEXTJOIN(";", TRUE,
 IF(C2="", "source", ""),
 IF(D2="", "contact_name", ""),
 IF(AND(F2="",G2=""), "contact_method", ""),
 IF(H2="", "service_needed", ""),
 IF(J2="", "urgency", ""),
 IF(K2="", "status", ""),
 IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), L2=""), "assigned_to", ""),
 IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), S2=""), "next_action", ""),
 IF(OR(K2="Quote Sent",K2="Follow-up Due"), IF(P2="", "quote_sent_date", ""), ""),
 IF(OR(K2="Quote Sent",K2="Follow-up Due"), IF(R2="", "follow_up_due", ""), ""),
 IF(OR(K2="Quote Sent",K2="Follow-up Due"), IF(Q2="", "quote_amount", ""), ""),
 IF(OR(K2="Lost",K2="Cold"), IF(U2="", "lost_cold_reason", ""), "")
)
```

## Needs-response overdue

Uses the test/control date in `Settings!$B$2`.

```gs
=IF(AND(OR(K2="New",K2="Needs Response"), M2<>"Yes", B2<Settings!$B$2), "Yes", "No")
```

## Quote follow-up missing

```gs
=IF(AND(K2="Quote Sent", R2=""), "Yes", "No")
```

## Follow-up overdue

```gs
=IF(AND(R2<>"", R2<Settings!$B$2, NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed"))), "Yes", "No")
```

## Ownerless active record

```gs
=IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), L2=""), "Yes", "No")
```

## No next action on active record

```gs
=IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), S2=""), "Yes", "No")
```

## Lost/cold reason missing

```gs
=IF(AND(OR(K2="Lost",K2="Cold"), U2=""), "Yes", "No")
```

## Validation status

```gs
=IF(OR(AND(W2<>"", OR(K2="Quote Sent",K2="Follow-up Due",K2="Won",K2="Lost",K2="Cold",K2="Closed")), Y2="Yes", AA2="Yes", AB2="Yes", AC2="Yes"), "Fail", "Pass")
```

## Status block reason

```gs
=TEXTJOIN("; ", TRUE,
 IF(AND(K2="Quote Sent", R2=""), "Quote Sent blocked: follow-up due date missing", ""),
 IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), L2=""), "Active lead blocked: assigned owner missing", ""),
 IF(AND(NOT(OR(K2="Won",K2="Lost",K2="Cold",K2="Closed")), S2=""), "Active lead blocked: next action missing", ""),
 IF(AND(OR(K2="Lost",K2="Cold"), U2=""), "Lost/Cold blocked: reason missing", ""),
 IF(Z2="Yes", "Follow-up is overdue", "")
)
```

## Can progress

```gs
=IF(AE2="", "Yes", "No")
```

## Weekly report calculations

### Total leads

```gs
=COUNTA('Lead Tracker'!A2:A)
```

### Needs response

```gs
=COUNTIF('Lead Tracker'!K2:K, "Needs Response")
```

### Quotes sent

```gs
=COUNTIF('Lead Tracker'!K2:K, "Quote Sent")
```

### Follow-ups due

```gs
=COUNTIF('Lead Tracker'!K2:K, "Follow-up Due")
```

### Won leads

```gs
=COUNTIF('Lead Tracker'!K2:K, "Won")
```

### Lost/cold leads

```gs
=COUNTIF('Lead Tracker'!K2:K, "Lost")+COUNTIF('Lead Tracker'!K2:K, "Cold")
```

### Failed validation records

```gs
=COUNTIF('Lead Tracker'!AD2:AD, "Fail")
```

### Open quote value

```gs
=SUMIFS('Lead Tracker'!Q2:Q, 'Lead Tracker'!K2:K, "Quote Sent")+SUMIFS('Lead Tracker'!Q2:Q, 'Lead Tracker'!K2:K, "Follow-up Due")
```
