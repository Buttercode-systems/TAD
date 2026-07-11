# Phase 3 — Admin Audit v2 Public-Evidence Validation

Date: 2026-07-11

## Boundary

This validation uses real South African businesses as public workflow anchors. It tests the Admin Audit logic against different operating models without contacting the businesses or using private information.

It does not claim that these businesses have the simulated problems. Public sources reveal workflow structure, but usually do not reveal actual delays, staff adherence, debtor performance or exception backlogs. The automated cases therefore contain explicit test assumptions and are not business diagnoses.

## Anchors and expected audit behaviour

### Trafalgar Property Management

Public evidence includes property management, property finance, online services, portals and reporting.

Source: https://www.trafalgar.co.za/

Simulation purpose: a high-pressure property-request and approval case must rank **Property Admin** first.

### Zone Fitness

Public evidence includes online joining, multiple branches, timetables, defined membership products, debit orders and cancellation rules.

Sources:

- https://zonefitness.co.za/
- https://zonefitness.co.za/faq/

Simulation purpose: a member-risk and follow-up case must rank **Member Admin** first.

### Sorbet

Public evidence includes online booking by treatment, time and staff member, reminders, loyalty and service recovery.

Source: https://www.sorbet.co.za/

Simulation purpose: a booking-confirmation pressure case must rank **Practice / Booking Admin** first while retaining the no-patient-data boundary.

### Rentokil South Africa

Public evidence includes surveys, written risk assessments, recurring service plans, account ownership, treatment records and online reporting.

Source: https://www.rentokil.co.za/

Simulation purpose: a recurring-service onboarding and documentation case must rank **Client Admin** first.

### Stuttaford Van Lines — negative control

Public evidence includes quote follow-up, a single coordinator, inventory records, move reporting and formal supplier controls.

Sources:

- https://www.stuttafordvanlines.co.za/free-quote/
- https://www.stuttafordvanlines.co.za/national-move/
- https://www.stuttafordvanlines.co.za/services/move-management/
- https://www.stuttafordvanlines.co.za/about-us/supply-chain-management/

Simulation purpose: when supplier controls are rated mature and no invoice warning signal is supplied, the audit must **not** falsely rank Invoice Admin first.

## Audit v2 output

The audit now produces:

- a four-step guided diagnostic;
- admin leakage and coordination-load indicators;
- evidence quality based on inspectable workflow artefacts;
- a fix-first department;
- explanations for the top three departments;
- the weakest operating controls;
- a four-stage 14-day controlled pilot;
- department-specific success measures;
- a printable report and prefilled review email.

The page uses the same paper, ledger accent, typography, square cards, border grid, navigation and button language as the rest of The Admin Department.

## Safety assertions

Tests verify that the audit:

- does not call `fetch()`;
- does not use `localStorage` or `sessionStorage`;
- warns against sensitive data;
- preserves the Practice Admin public-data boundary;
- retains the existing Admin HQ regression suite.

## Remaining validation gate

Public-evidence simulations validate decision logic, safety and workflow coverage. They do not prove that a real owner will complete the audit, purchase the recommended setup or use it successfully. That requires a consenting controlled pilot.
