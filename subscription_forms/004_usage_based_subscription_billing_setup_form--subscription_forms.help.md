# Usage Based Subscription Billing Setup Form - Help Guide
## Purpose
This form is designed to collect setup information for subscription billing plans, enabling accurate and efficient execution of billing processes.

## How To Complete This Form
1. Fill in the plan name in the **Plan Name** field.
2. Select the metering frequency from the dropdown menu in the **Metering Frequency** field.
3. Enter the plan price in the **Plan Price** field.
4. Choose the billing cycle from the dropdown menu in the **Billing Cycle** field.
5. Enter the payment terms in the **Payment Terms** field (date).
6. Select your preferred payment gateway from the dropdown menu in the **Payment Gateway** field.
7. Provide your payment gateway account details in the **Payment Gateway Account** field.
8. Enter billing details in the **Billing Details** field (optional).
9. Write any relevant billing terms in the **Billing Terms** field.
10. Select the internal handoffs you require for this billing setup (e.g. onboarding, billing, support) in the **Internal Handoffs** field.
11. Enter the email address for internal handoffs in the **Internal Handoffs Email** field (optional).
12. Enter the phone number for internal handoffs in the **Internal Handoffs Phone** field (optional).

## Field-by-Field Explanation
* **Plan Name** (`plan_name`, text, required): Enter a descriptive name for your subscription billing plan.
* **Metering Frequency** (`metering_frequency`, select_one, optional): Select how often you want to meter usage (e.g. Billing Period, Meter, Usage).
* **Plan Price** (`plan_price`, number, required): Enter the price for your subscription billing plan.
* **Billing Cycle** (`billing_cycle`, select_multiple, optional): Choose the frequency of billing (e.g. Daily, Weekly, Monthly, Quarterly, Yearly).
* **Payment Terms** (`payment_terms`, date, required): Set the due date for payment.
* **Payment Gateway** (`payment_gateway`, select_one, optional): Select your payment gateway (e.g. Stripe, PayPal, Authorize.Net).
* **Payment Gateway Account** (`payment_gateway_account`, text, optional): Enter your payment gateway account details.
* **Billing Details** (`billing_details`, note, optional): Enter any additional billing details.
* **Billing Terms** (`billing_terms`, text, optional): Enter any billing terms or conditions.
* **Internal Handoffs** (`internal_handoffs`, select_multiple, optional): Select the internal handoffs you require for this billing setup (e.g. onboarding, billing, support).
* **Internal Handoffs Email** (`internal_handoffs_email`, email, optional): Enter the email address for internal handoffs.
* **Internal Handoffs Phone** (`internal_handoffs_phone`, text, optional): Enter the phone number for internal handoffs.

## Tips
* Make sure to fill out all required fields accurately.
* Choose the most suitable metering frequency for your subscription billing plan.
* Be specific when entering payment terms and internal handoffs details.
* Review your form input carefully before submitting to avoid errors.
