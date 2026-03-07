<thinking>
This form is used for modifying leases. The "Lease Modification Form" is used to make changes to an existing lease. This form is likely used in real estate or property management settings.
</thinking>

# lease_modification_form - Help Guide
## Purpose
The "Lease Modification Form" is used to make changes to an existing lease. This form allows users to select the category of the request, provide a description of the modifications, and specify the changes they would like to make to the lease.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "Category" dropdown menu to indicate the type of request (e.g., "Tenant Application Forms" or "Real Estate Agent Forms").
2. In the "Description" field, enter a brief explanation of the modifications being requested (e.g., "Increase rent by $100 for the next 6 months").
3. Enter the "Lease ID" number associated with the lease being modified.
4. Select the reason for the request using the "Reason for Request" dropdown menu (e.g., "Changes to Existing Lease" or "Other").
5. In the "Requested Changes" field, select multiple changes being requested (e.g., "Lease Term" and "Rent").
6. If applicable, enter the new "Move-in" and "Move-out" dates using the date pickers.
7. Enter the current and requested "Lease Term", "Rent", and "Tenant ID" numbers.
8. Finally, enter the "Agent ID" and "Submitted By" fields.

## Field-by-Field Explanation
* **Form Title** (`form_title`, text, required: false): Enter a descriptive title for the form submission.
* **Category** (`category`, select_one, required: false): Choose the category for the modification request (e.g., "Tenant Application Forms" or "Real Estate Agent Forms").
* **Description** (`description`, text, required: false): Provide a brief explanation of the modifications being requested.
* **Lease ID** (`lease_id`, text, required: false): Enter the lease ID associated with the modification.
* **Reason for Request** (`reason_for_request`, select_one, required: false): Select the reason for the modification request (e.g., "Changes to Existing Lease" or "Other").
* **Requested Changes** (`requested_changes`, select_multiple, required: false): Select multiple changes being requested (e.g., "Lease Term", "Rent", "Move-in Date").
* **Move-in Date** (`move_in_date`, date, required: false): Enter the new move-in date if applicable.
* **Move-out Date** (`move_out_date`, date, required: false): Enter the new move-out date if applicable.
* **Current Lease Term** (`current_lease_term`, number, required: false): Enter the current lease term.
* **Requested Lease Term** (`requested_lease_term`, number, required: false): Enter the requested lease term.
* **Current Rent** (`current_rent`, number, required: false): Enter the current rent.
* **Requested Rent** (`requested_rent`, number, required: false): Enter the requested rent.
* **Tenant ID** (`tenant_id`, text, required: false): Enter the tenant ID.
* **Agent ID** (`agent_id`, text, required: false): Enter the agent ID.
* **Submitted By** (`submitted_by`, text, required: false): Enter the person submitting the modification request.
* **Submitted On** (`submitted_on`, date, required: false): Enter the date the modification request was submitted.
* **Submitted To** (`submitted_to`, text, required: false): Enter the person or entity the modification request was submitted to.
