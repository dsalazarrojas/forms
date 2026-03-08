# Catering Services Payment Form - Help Guide
## Purpose
This form is designed to collect payment information for catering services. The details provided will help us process payments accurately and efficiently.

## How To Complete This Form
1. Fill in your contact information: Enter your full name, email address, and phone number in the corresponding fields.
2. Select the payment date and invoice number for the event.
3. Choose the payment type (e.g., deposit, full payment, etc.).
4. Enter the amount you are paying and select the payment method (e.g., credit card, bank transfer, etc.).
5. Agree to the payment terms and refund policy.
6. Choose how you want to receive the receipt.

## Field-by-Field Explanation

* **Payer Name** (`payer_name`, `text`, **required**): Enter your full name.
* **Email Address** (`email`, `email`, **required**): Enter your email address for communication and receipt purposes.
* **Phone Number** (`phone`, `text`, **required**): Enter your contact phone number.
* **Company Name** (`company_name`, `text`, **optional**): Enter your company name (if applicable).
* **Payment Date** (`payment_date`, `date`, **required**): Enter the date of payment.
* **Invoice Number** (`invoice_number`, `text`, **required**): Enter the reference number for the event.
* **Event Name** (`event_name`, `text`, **required**): Enter the name of the event.
* **Event Date** (`event_date`, `date`, **required**): Enter the date of the event.
* **Payment Type** (`payment_type`, `select_one`, **required**): Select the type of payment (e.g., deposit, full payment, etc.).
* **Subtotal** (`subtotal`, `number`, **required**): Enter the amount before fees.
* **Tax** (`tax`, `number`, **optional**): Enter the tax amount (if applicable).
* **Service Charge** (`service_charge`, `number`, **optional**): Enter the service fee (if applicable).
* **Gratuity** (`gratuity`, `number`, **optional**): Enter the tip amount (if applicable).
* **Discounts Applied** (`discounts`, `number`, **optional**): Enter the discount amount (if applicable).
* **Total Amount** (`total_amount`, `number`, **required**): Enter the total amount to pay.
* **Amount Paid** (`amount_paid`, `number`, **required**): Enter the actual payment amount.
* **Payment Method** (`payment_method`, `select_one`, **required**): Select the payment method (e.g., credit card, bank transfer, etc.).
* **Card Type** (`card_type`, `select_one`, **optional**): Select the type of credit card (if applicable).
* **Cardholder Name** (`cardholder_name`, `text`, **optional**): Enter the name on the credit card (if applicable).
* **Billing Address** (`billing_address`, `text`, **optional**): Enter the billing address of the credit card (if applicable).
* **Payment Terms Accepted** (`payment_terms`, `select_one`, **required**): Agree to the payment terms.
* **Refund Policy Accepted** (`refund_policy`, `select_one`, **required**): Agree to the refund policy.
* **Receipt Delivery** (`receipt_delivery`, `select_one`, **required**): Select how you want to receive the receipt.
* **Payment Status** (`payment_status`, `select_one`, **optional**): Select the current payment status (if applicable).
* **Transaction ID** (`transaction_id`, `text`, **optional**): Enter the reference number for the transaction.
* **Additional Comments** (`additional_comments`, `text`, **optional**): Enter any other information.
