# Invoice Admin Message Templates

## Request missing invoice information

Hi {{supplier_name}},

We received {{document_reference}}, but we need the following information before it can be reviewed:

{{missing_information}}

Please send the updated details when you can.

Thank you.

## Approval request

Hi {{approval_owner}},

The following invoice is ready for review:

Supplier: {{supplier_name}}
Invoice: {{invoice_number}}
Amount: {{total_amount}}
Due date: {{due_date}}
Notes: {{notes}}

Please confirm whether this should be approved, rejected, or queried.

## Duplicate warning

Hi {{approval_owner}},

This invoice may be a duplicate and needs review before we continue.

Supplier: {{supplier_name}}
Invoice: {{invoice_number}}
Amount: {{total_amount}}
Possible match: {{possible_match}}

Please confirm whether this is a duplicate or a separate invoice.

## Supplier bank detail change warning

Hi {{approval_owner}},

This supplier appears to have changed banking details. Please verify directly with the supplier using a trusted contact method before any payment action is taken.

Supplier: {{supplier_name}}
Invoice: {{invoice_number}}
Amount: {{total_amount}}

## Weekly summary email

Hi {{client_name}},

Here is this week's Invoice Admin summary:

- Invoices received: {{received_count}}
- Approved: {{approved_count}}
- Waiting for approval: {{waiting_count}}
- Missing info: {{missing_count}}
- Possible duplicates: {{duplicate_count}}
- Filed documents: {{filed_count}}

Items needing your attention:

{{attention_items}}

Regards,
The Admin Department
