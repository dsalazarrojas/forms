# customer_support_plan_extension_form - Help Guide
## Purpose
This form is used to extend a customer's support plan.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the customer's desired support plan level from the list of options.
2. Enter the customer's name in the "Customer Name" field.
3. Enter the customer's company name in the "Company Name" field, if applicable.
4. Enter the customer's email address in the "Email" field in the correct format (e.g., `user@example.com`).
5. Enter the customer's phone number in the "Phone" field.
6. Select the current support plan status from the list of options.
7. Provide a reason for the support plan extension in the "Reason for Extension" field.
8. Add any additional details about the new support plan in the "New Support Plan Details" field.
9. Enter the billing information date in the "Billing Information" field.
10. Select the billing cycle time in the "Billing Cycle" field in the format `24:00-18:00`.
11. Select the desired customer signature from the list of options, indicating their agreement to the extension.
12. Enter the customer signature date in the "Customer Signature Date" field.
13. Select the customer signature time in the "Customer Signature Time" field, in the format `24:00`.
14. Finally, select the manager signature from the list of options, indicating their approval of the extension.

## Field-by-Field Explanation

* **Customer Support Plan** (`select_one`, Basic, Premium, Enterprise, required: false): Choose the desired support plan level for the customer.
* **Customer Name** (`text`, Customer Name, required: false): Enter the customer's name.
* **Company Name** (`text`, Company Name, required: false): Enter the customer's company name, if applicable.
* **Email** (`email`, Email, required: false): Enter the customer's email address in the format `user@example.com`.
* **Phone** (`text`, Phone, required: false): Enter the customer's phone number.
* **Support Plan Status** (`select_one`, Active, Inactive, required: false): Select the current support plan status.
* **Reason for Extension** (`note`, Reason for Extension, required: false): Provide a reason for the support plan extension.
* **New Support Plan Details** (`note`, New Support Plan Details, required: false): Add any additional details about the new support plan.
* **Billing Information** (`date`, Billing Information, required: false): Enter the billing information date.
* **Billing Cycle** (`time`, Billing Cycle, required: false): Select the billing cycle time in the format `24:00-18:00`.
* **Customer Signature** (`select_multiple`, I agree, I do not agree, required: false): Select the desired customer signature, indicating their agreement to the extension.
* **Customer Signature Date** (`date`, Customer Signature Date, required: false): Enter the customer signature date.
* **Customer Signature Time** (`time`, Customer Signature Time, required: false): Select the customer signature time in the format `24:00`.
* **Manager Signature** (`select_multiple`, I approve, I do not approve, required: false): Select the manager signature, indicating their approval of the extension.

## Tips

* Make sure to review the form carefully before submitting it to ensure all required fields are filled in correctly.
* Double-check the customer's email address for correct formatting.
* Ensure the billing cycle time is in the correct format (`24:00-18:00`).
