# Invoice Generation Form - Help Guide
## Purpose
This form is designed to collect the necessary details for generating an invoice. Fill out this form to create an invoice that can be used for billing purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the **Billing Details** page. Enter the relevant information for your billing purpose.
2. Move on to the **Billing Address** page and provide your billing address.
3. Select your preferred **Payment Terms** on the **Payment Terms** page.
4. Choose your payment methods on the **Payment Method** page.
5. If required, select the due date and time for the invoice on the **Due Date** and **Due Time** pages respectively.
6. Add any additional notes or comments on the **Note** page.
7. Enter your email address on the **Email Address** page.
8. Provide your phone number on the **Phone Number** page.
9. Enter the invoice amount on the **Invoice Amount** page.
10. Select the currency of your invoice on the **Currency** page.
11. If applicable, enter the tax rate and tax exemption status on the **Tax Rate** and **Tax Exemption** pages respectively.
12. Finally, review your selections before submitting the form.

## Field-by-Field Explanation
* **Billing Details** (`page_1`, text, required: false): Enter a brief description of the billing purpose.
* **Billing Address** (`page_2`, text, required: false): Enter your billing address.
* **Payment Terms** (`page_3`, select_one, required: true): Select the payment method for the invoice (Cash, Bank Transfer, or Check).
* **Payment Method** (`page_4`, select_multiple, required: true): Choose one or more payment methods (Cash, Bank Transfer, or Check).
* **Due Date** (`page_5`, date, required: false): Enter the due date for the invoice (YYYY-MM-DD format).
* **Due Time** (`page_6`, time, required: false): Enter the due time for the invoice.
* **Note** (`page_7`, note, required: false): Add any additional notes or comments.
* **Email Address** (`page_8`, email, required: false): Enter your email address.
* **Phone Number** (`page_9`, text, required: false): Enter your phone number.
* **Invoice Amount** (`page_10`, number, required: false): Enter the amount of the invoice.
* **Currency** (`page_11`, select_one, required: true): Select the currency of your invoice (USD, EUR, or JPY).
* **Tax Rate** (`page_12`, number, required: false): Enter the tax rate (if applicable).
* **Tax Exemption** (`page_13`, select_multiple, required: true): Select the tax exemption status (None or Exempt).
* **Tax Exemption Number** (`page_14`, text, required: false): Enter your tax exemption number (if applicable).
* **Tax Exemption Number** (`page_15`, text, required: false): Enter your tax exemption number (this field appears to be a duplicate, but we'll use it as a note for tax exemption number).

Note: This guide assumes that the form fields are as described in the provided YAML inputSchema.
