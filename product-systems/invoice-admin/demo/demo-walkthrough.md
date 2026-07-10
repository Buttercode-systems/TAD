# Invoice Admin Demo Walkthrough

Use this as a 5-minute sales demo.

## 1. Open with the pain

Say:

> Most invoice admin does not fail because people are careless. It fails because invoices arrive from too many places and approvals depend on memory.

Ask:

- Where do your supplier invoices arrive now?
- Who checks whether details are missing?
- How do you know what still needs approval?
- How are documents filed after review?

## 2. Show the dashboard

Open `demo-dashboard.html`.

Point out:

- invoices received
- ready for review
- missing info
- possible duplicates
- filed documents

Say:

> The first goal is visibility. Before we automate anything, we make sure every invoice has a clear status, owner, and next action.

## 3. Show the tracker rows

Explain each example:

- ABC Supplies: normal invoice ready for review.
- Quick Repairs: invoice blocked because VAT number is missing.
- Metro Cleaning Supplies: new supplier needs approval.
- BuildMart Hardware: possible duplicate.
- City Stationery: receipt filed.

Say:

> This is how we stop documents from sitting in email with no owner.

## 4. Show the exception queue

Open `exception-queue.csv`.

Say:

> The exception queue is where the value is. It tells the business exactly what is blocking invoice admin: missing info, duplicates, approval delays, unknown suppliers, due-soon items.

## 5. Show the weekly report

Open `filled-weekly-report.md`.

Say:

> At the end of each week, the owner does not need to ask what happened. The system shows what came in, what was filed, what needs approval, and what decisions are required.

## 6. Explain what setup includes

Say:

> We install the tracker, folder structure, statuses, approval rules, message templates, and weekly report. We start manual and controlled. After the workflow works, we can add automation behind the scenes.

## 7. Close

Say:

> The best next step is to run this against 5–10 of your real invoice emails or documents. That will show exactly where your current invoice admin is leaking time.

## Common objections

### “We already use spreadsheets.”

Response:

> Good. We are not trying to replace every tool. We are making the spreadsheet/workflow reliable: clear statuses, owners, exceptions, and reports.

### “Can this connect to accounting software?”

Response:

> Eventually, yes, if needed. But first we make sure the capture and approval workflow is clean. Bad data should not be pushed into accounting software.

### “Will AI approve invoices?”

Response:

> No. The system can help capture and flag items, but approval stays with a person.

### “How quickly can this be installed?”

Response:

> A simple first version can be installed once we know your invoice sources, approval owners, folder structure, and report needs.
