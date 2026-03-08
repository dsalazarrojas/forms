# CDD Payment Submissions - Help Guide
## Purpose
The CDD Payment Submissions form is used to collect payment submissions from businesses, providing a streamlined process for timely payment processing. This form ensures that all necessary details are gathered to facilitate efficient payments.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide accurate details in the "Business or Entity Name" field.
2. Enter the Federal Tax ID or EIN number.
3. Enter the contact person's name for billing purposes.
4. Enter the billing email address.
5. Enter the invoice or reference number.
6. Select the category of payment from the available options.
7. Choose the currency used for the payment.
8. Enter the payment amount.
9. Select the preferred payment method.
10. Briefly describe the services or goods being purchased.
11. Check if this is a recurring payment.
12. If applicable, enter the internal department code.
13. Select the date of submission.
14. Confirm if the corresponding invoice is attached.

## Field-by-Field Explanation
* **Business or Entity Name** (`business_entity_name`, `text`, required): Enter the correct name of the business or entity making the payment.
* **Federal Tax ID or EIN** (`tax_id_number_cdd`, `text`, required): Enter the Federal Tax ID or Employer Identification Number (EIN) of the business or entity making the payment.
* **Contact Person for Billing** (`contact_person_payment`, `text`, required): Enter the name of the person responsible for billing purposes.
* **Billing Email Address** (`billing_email_cdd`, `email`, required): Enter the email address used for billing.
* **Invoice or Reference Number** (`invoice_number_reference`, `text`, required): Enter the invoice or reference number associated with the payment.
* **Category of Payment** (`payment_category_type`, `select_one`, required): Choose the type of payment from the available options: Service Fees, Product Purchase, Licensing/Subscription, Retainer, or Other.
* **Currency** (`currency_type_cdd`, `select_one`, required): Choose the currency used for the payment: USD, EUR, GBP, or CAD.
* **Payment Amount** (`submission_amount`, `number`, required): Enter the exact amount of the payment.
* **Preferred Payment Method** (`intended_payment_method`, `select_one`, required): Choose the preferred payment method: ACH/Wire Transfer, Credit Card, Corporate Check, or Digital Wallet.
* **Description of Services/Goods** (`payment_description_notes`, `text`, required): Briefly describe what the payment is for in a few sentences.
* **Is this a recurring payment?** (`recurring_payment_check`, `select_one`, required): Check if this is a recurring payment.
* **Internal Dept/Cost Center Code** (`internal_department_code`, `text`, optional): If applicable, enter the internal department or cost center code associated with the payment.
* **Date of Submission** (`submission_timestamp_cdd`, `date`, required): Enter the date of submission in the correct format.
* **Have you attached the corresponding invoice?** (`attachment_confirmation_payment`, `select_one`, required): Confirm if the corresponding invoice is attached or if it will be sent separately.
