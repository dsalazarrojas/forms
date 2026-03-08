# it_support_billing_form - Help Guide
## Purpose
This form is used to provide billing information and payment details for IT support services.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the billing information section, including the company name, email, phone number, and billing address.
2. Select the payment terms from the options provided (e.g. Net 30, Net 15, Due Upon Receipt).
3. Choose the payment method (e.g. Bank, Credit Card, Cash).
4. Select the services that were provided (e.g. Hardware Repair, Software Support, Network Configuration).
5. Enter the service hours worked.
6. Specify the payment amount and payment date.

## Field-by-Field Explanation

* **Billing Information** (`billing_information`, text, required: false): Enter the billing information for the company, including name, email, phone number, and billing address.
* **Company Name** (`company_name`, text, required: false): Enter the company name for billing purposes.
* **Email** (`email`, email, required: false): Enter the email address associated with the account.
* **Phone Number** (`phone_number`, text, required: false): Enter the phone number associated with the account.
* **Billing Address** (`billing_address`, text, required: false): Enter the billing address for the company.
* **Billing City** (`billing_city`, text, required: false): Enter the billing city for the company.
* **Billing State** (`billing_state`, text, required: false): Enter the billing state for the company.
* **Billing Zip** (`billing_zip`, text, required: false): Enter the billing zip code for the company.
* **Billing Country** (`billing_country`, text, required: false): Enter the billing country for the company.
* **Payment Terms** (`payment_terms`, select_one, required: false): Select the payment terms (e.g. Net 30, Net 15, Due Upon Receipt).
* **Payment Method** (`payment_method`, select_one, required: false): Choose the payment method (e.g. Bank, Credit Card, Cash).
* **Services** (`services`, select_multiple, required: false): Select the services provided (e.g. Hardware Repair, Software Support, Network Configuration).
* **Service Hours** (`service_hours`, text, required: false): Enter the service hours worked.
* **Payment Amount** (`payment_amount`, number, required: false): Enter the payment amount.
* **Payment Date** (`payment_date`, date, required: false): Enter the payment date.

## Tips
* Ensure that all fields are accurate and up-to-date to avoid delays in processing.
* If unsure about any field, please consult with the IT support team for guidance.
