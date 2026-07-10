# Handover Test Script

Use this to test whether someone other than the builder can run the system.

## Purpose

The system fails if it only works when the builder explains it.

A normal operator must be able to:

- understand the tracker
- process sample records
- identify blocked items
- update statuses
- explain the weekly report
- know when to escalate

## Tester profile

The tester should be someone who did not build the system.

They do not need to be technical.

## Test setup

Give the tester:

- system workbook
- SOP
- message templates
- weekly report tab/template
- this script

Do not explain the system verbally before the test, except to say:

> Please use the materials to process the sample records and explain what you would do daily.

## Test tasks

### Task 1 — Explain daily routine

Ask the tester:

> What would you do every day in this system?

Expected:

- check new records
- check failed/blocked records
- update statuses
- assign owners/next actions
- review weekly report metrics

### Task 2 — Process three records

Ask the tester to process:

1. one clean record
2. one missing-information record
3. one blocked/risky record

Expected:

- clean record progresses
- missing info is flagged
- blocked record does not move forward silently

### Task 3 — Explain failed record

Ask:

> Why did this record fail validation?

Expected:

Tester can point to status block reason or missing fields.

### Task 4 — Prepare short weekly update

Ask tester to summarize:

- total records
- stuck/failed records
- owner decisions needed
- next actions

### Task 5 — Escalation decision

Ask:

> Which records need human approval before moving forward?

Expected:

Tester identifies risky approval points.

## Fail conditions

The system fails handover if:

- tester cannot explain statuses
- tester cannot find failed records
- tester does not know next action
- tester moves risky record forward silently
- tester cannot explain weekly report
- tester needs builder explanation for basic use

## Pass condition

The system passes if the tester can complete tasks with the written materials and only minor clarification.
