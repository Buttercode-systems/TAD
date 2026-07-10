# Pilot Access Control Template

Use one per pilot client.

## Client

Client name:
Pilot system:
Pilot dates:
Workspace link:

## Roles

| Role | Name | Email | Access Level | Notes |
|---|---|---|---|---|
| Client owner/decision maker | | | Viewer/Editor/Approver | |
| Client admin user | | | Editor | |
| Approval owner | | | Approver | |
| The Admin Department operator | | | Editor | |
| Report recipient | | | Viewer | |

## Access levels

### Viewer

Can view tracker and reports only.

### Editor

Can add/update records but cannot approve risky actions unless also listed as approver.

### Approver

Can make approval decisions for risky workflow steps.

Examples:

- invoice approval
- supplier approval
- quote decision
- client marked ready/active
- sensitive document release

## Data rules

- Real client data stays in the private workspace.
- Public GitHub repo stores templates only.
- Only approved users get access.
- Remove access when pilot ends.
- Do not share sheet links publicly.

## Approval rules

| Action | Approval owner | Notes |
|---|---|---|
| Mark invoice approved | | |
| Mark invoice paid/payment-ready | | |
| Send quote follow-up | | |
| Mark lead won/lost | | |
| Mark client ready to start | | |
| Mark client active | | |

## Access review

Review access:

- [ ] before pilot starts
- [ ] weekly during pilot
- [ ] when pilot ends
