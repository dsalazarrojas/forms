# Legal Compliance Quotation Form - Help Guide
## Purpose
The Legal Compliance Quotation Form is designed to collect and store client and quotation related details for legal compliance purposes.

## How To Complete This Form

1. To complete this form, fill in the client's name, firm's name, contact name, email, phone number, and address.
2. Select the quote date and time.
3. Enter the quote value.
4. If applicable, select the quote type (invoicing, billing, or other).
5. Set the quote status (active, pending, or cancelled).
6. If required, select the due date for the quote.
7. Set the acceptance status of the quote terms, payment terms, firm terms, and terms of service.
8. If required, select the quote terms provided to the client.
9. Select the billing terms accepted by the client.
10. Set the firm's quote terms.
11. Enter any additional notes about the quote.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter the client's name.
* **Firm Name** (`firm_name`, text, required): Enter the firm's name.
* **Contact Name** (`contact_name`, text, required): Enter the contact person's name.
* **Email** (`email`, email, optional): Enter the client's email address.
* **Phone** (`phone`, text, optional): Enter the client's phone number.
* **Address** (`address`, text, required): Enter the client's address.
* **Quote Date** (`quote_date`, date, required): Select the quote date.
* **Quote Time** (`quote_time`, time, optional): Select the quote time.
* **Quote Value** (`quote_value`, text, optional): Enter the quote value.
* **Quote Type** (`quote_type`, select_one, optional): Select the quote type (invoicing, billing, or other).
* **Quote Status** (`quote_status`, select_one, optional): Set the quote status (active, pending, or cancelled).
* **Quote Due Date** (`quote_due_date`, date, optional): Set the due date for the quote.
* **Quote Terms Accepted** (`quote_terms_accepted`, select_one, optional): Set the acceptance status of the quote terms.
* **Quote Accepted At** (`quote_accepted_at`, time, optional): Set the acceptance time of the quote terms.
* **Payment Terms Accepted** (`payment_terms_accepted`, select_one, optional): Set the acceptance status of the payment terms.
* **Firm Terms Accepted** (`quote_firm_terms_accepted`, select_one, optional): Set the acceptance status of the firm's quote terms.
* **Terms of Service Accepted** (`terms_of_service_accepted`, select_one, optional): Set the acceptance status of the terms of service.
* **Terms of Service Provided** (`quote_terms_provided`, select_one, optional): Select if terms of service were provided to the client.
* **Billing Terms Accepted** (`billing_terms_accepted`, select_one, optional): Set the acceptance status of the billing terms.
* **Firm Quote Terms** (`firm_quote_terms`, select_multiple, optional): Select the firm's quote terms.
* **Note** (`quote_note`, note, optional): Enter any additional notes about the quote.

## Tips

* Make sure to complete all required fields before saving the quote.
* Review the quote before sending it to the client to ensure all information is accurate.
* If the quote status is set to 'Active', the quote has been accepted by the client.
* Ensure that the quote due date is set correctly if a due date is applicable.
* If terms of service are not provided, set the 'Terms of Service Provided' field to 'False'.
