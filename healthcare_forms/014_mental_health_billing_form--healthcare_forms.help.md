# mental health billing form - Help Guide
## Purpose
The mental health billing form is a tool for collecting client information and payment details for mental health services.

## How To Complete This Form
1. Fill in the required fields (marked as "required" in the form).
2. Select the correct payment method from the options provided.
3. If applicable, select the payment status.
4. Fill in the payment amount and date accurately.
5. Provide any additional payment method notes, if necessary.

## Field-by-Field Explanation
* **Client Info** (`client_info`, text, required: false): Enter your name and other identifying information.
* **Billing Info** (`billing_info`, text, required: false): Enter your billing address and contact information.
* **Payment Info** (`payment_info`, text, required: false): Enter your payment information (e.g. address, phone number, etc.).
* **Payment Methods** (`payment_methods`, select_multiple, required: false): Select all applicable payment methods (e.g. "Yes" for each method).
* **Billing Status** (`billing_status`, select_one, required: false): Select the current billing status of your account (e.g. "Active" if you're currently paying).
* **Payment Amount** (`payment_amount`, number, required: false): Enter the amount you're paying for the mental health services.
* **Payment Date** (`payment_date`, date, required: false): Enter the date you're paying for the mental health services.
* **Payment Time** (`payment_time`, time, required: false): Enter the time you're paying for the mental health services.
* **Payment Method** (`payment_method`, select_one, required: false): Select the method of payment (e.g. "Bank Draft", "Cheque", "Cash").
* **Payment Method Note** (`payment_method_note`, note, required: false): Enter any additional notes or comments about the payment method.
