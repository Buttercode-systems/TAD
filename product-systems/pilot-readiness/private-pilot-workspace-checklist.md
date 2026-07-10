# Private Pilot Workspace Checklist

Use this before any real client data is used.

## Workspace decision

Choose one private environment:

- [ ] Client-owned Google Drive and Google Sheets
- [ ] The Admin Department private Google Drive with client-approved access
- [ ] Private Supabase project with access controls
- [ ] Other approved private workspace: __________

## Required folders

Create:

```text
Client Name /
  00 - Access and Rules /
  01 - System Tracker /
  02 - Source Documents /
  03 - Reports /
  04 - Templates /
  05 - Archive /
```

## Workspace checks

- [ ] Public repo is not used for real client data
- [ ] Demo data is removed or clearly labelled
- [ ] Sheet owner is confirmed
- [ ] Editors are confirmed
- [ ] Viewers are confirmed
- [ ] Approval owners are confirmed
- [ ] Folder permissions are confirmed
- [ ] Weekly report recipient is confirmed
- [ ] Backup/export process is confirmed

## Data safety checks

- [ ] No supplier banking details stored publicly
- [ ] No client documents stored publicly
- [ ] No private WhatsApp/email exports stored publicly
- [ ] No API keys or credentials stored publicly
- [ ] Personal data minimized where possible

## Go-live checks

- [ ] Correct system workbook copied into private workspace
- [ ] Test formulas still work
- [ ] Dropdowns still work
- [ ] Conditional formatting still works
- [ ] Weekly report tab still calculates
- [ ] Client-specific statuses/owners added
- [ ] Access rules documented

## Stop/go

Do not begin pilot until this checklist is complete.
