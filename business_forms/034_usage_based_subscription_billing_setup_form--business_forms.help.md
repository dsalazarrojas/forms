<thinking>
To ensure the form purpose is understood by the end-user, it's essential to clarify the context and relevance of the form. This form is designed to set up usage-based subscription billing, which is a pricing model where customers are charged based on their actual usage of a product or service. This form is used to configure the billing settings for a specific customer account, ensuring that the customer is correctly billed for their usage. The form should only be filled out by authorized personnel who have the necessary permissions to set up billing settings for a customer account.

The form is likely to be filled out by someone with a basic understanding of accounting and business operations, but may not have extensive knowledge of specific payment gateways or billing software. Therefore, a clear and concise explanation of each field is essential to avoid confusion.

The form is likely to be part of a larger system, and some fields may be linked or dependent on others, so it's crucial to consider the relationships between fields when explaining each field. Additionally, some fields may have specific requirements or restrictions that need to be understood by the user.

After ensuring the form purpose and context are understood, we can proceed with the help guide.

</thinking>

# Usage Based Subscription Billing Setup Form - Help Guide
## Purpose
The "Usage Based Subscription Billing Setup Form" is used to configure billing settings for a customer account, ensuring that the customer is correctly billed for their usage of a product or service.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "Plan" option from the "Billing Type" field, as this form is designed for usage-based billing.
2. Choose the "Recurring" option from the "Plan Type" field, as this form is for subscription-based billing.
3. Enter the "Usage Plan Price" for the customer's usage-based pricing.
4. Set the "Billing Frequency" to the desired interval for billing (e.g., monthly, quarterly, etc.).
5. Select the "Billing Interval" to the desired date for billing (e.g., the next billing date).
6. Choose the "Payment Frequency" (e.g., monthly, annually, etc.).
7. Select the "Payment Term" (e.g., monthly, annually, etc.).
8. Enter the "Payment Due Date" for the next payment (if applicable).
9. Select the "Payment Gateway" (e.g., Stripe, PayPal, Authorize).
10. Enter "Internal Reference" if required.
11. Select the "Internal Status" of the billing account (e.g., Active, Inactive, Cancelled).
12. Choose the "Account ID" (Primary, Secondary, Tertiary).
13. Enter "Account Number" if required.
14. Select the "Usage Based Calculation" method (e.g., Total, Per-Unit).
15. Select the "Billing Currency" (e.g., USD, EUR, JPY).
16. Set the "Billing Period" (e.g., monthly, quarterly, etc.).
17. Select the "Billing Status" (e.g., Active, Inactive, Cancelled).
18. Select the "Billing Type" (e.g., Plan, Usage, Metered).
19. Enter "Payment Terms" if required.
20. Enter "Internal Reference 1" if required.
21. Select the "Internal Status 1" of the billing account (e.g., Active, Inactive, Cancelled).
22. Enter "Internal Reference 2" if required.

## Field-by-Field Explanation

* **plan_id** (`1`, `number`, required: false): Enter the ID of the plan to be used for billing.
* **billing_type** (`2`, `select_one`, required: true): Select the type of billing (Plan, Usage, Metered).
* **plan_type** (`3`, `select_one`, required: true): Choose the type of plan (One-Off, Subscription, Recurring).
* **usage_plan_price** (`4`, `number`, required: false): Enter the price for the usage-based plan.
* **billing_frequency** (`5`, `number`, required: false): Set the frequency of billing (e.g., monthly, quarterly, etc.).
* **billing_interval** (`6`, `date`, required: false): Enter the interval for billing (e.g., the next billing date).
* **payment_frequency** (`7`, `select_one`, required: true): Select the frequency of payment (Monthly, Annually, Quarterly).
* **payment_term** (`8`, `select_one`, required: true): Choose the payment term (Monthly, Annually, Quarterly).
* **payment_due_date** (`9`, `date`, required: false): Enter the due date for payment.
* **payment_gateway** (`10`, `select_one`, required: true): Select the payment gateway (Stripe, PayPal, Authorize).
* **internal_reference** (`11`, `text`, required: false): Enter any internal reference for the billing account.
* **internal_status** (`12`, `select_one`, required: true): Select the internal status of the billing account (Active, Inactive, Cancelled).
* **account_id** (`13`, `select_one`, required: true): Choose the account ID (Primary, Secondary, Tertiary).
* **account_number** (`14`, `text`, required: false): Enter the account number if required.
* **usage_based_calculation** (`15`, `select_one`, required: true): Select the usage-based calculation method (Total, Per-Unit).
* **usage_based_calculation_1** (`16`, `select_one`, required: true): Select the usage-based calculation method for the first calculation (Total, Per-Unit).
* **usage_based_calculation_2** (`17`, `select_one`, required: true): Select the usage-based calculation method for the second calculation (Total, Per-Unit).
* **billing_currency** (`18`, `select_one`, required: true): Choose the billing currency (USD, EUR, JPY).
* **billing_frequency** (`19`, `number`, required: false): Set the frequency of billing (e.g., monthly, quarterly, etc.).
* **billing_period** (`20`, `select_one`, required: true): Select the billing period (Monthly, Annually, Quarterly).
* **billing_status** (`21`, `select_one`, required: true): Select the billing status (Active, Inactive, Cancelled).
* **billing_type** (`22`, `select_one`, required: true): Choose the billing type (Plan, Usage, Metered).
* **payment_terms** (`23`, `text`, required: false): Enter any payment terms if required.
* **internal_reference_1** (`24`, `text`, required: false): Enter any internal reference 1 if required.
* **internal_status_1** (`25`, `select_one`, required: true): Select the internal status 1 of the billing account (Active, Inactive, Cancelled).
* **internal_reference_2** (`26`, `text`, required: false): Enter any internal reference 2 if required.

## Tips

* Double-check the values entered in each field to ensure they are correct and consistent with the customer's usage.
* Verify that the billing settings are correctly configured for the customer's plan and account.
* If unsure about any field, consult with the relevant personnel or refer to the documentation for further clarification.
