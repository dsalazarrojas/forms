# invoice_payment_proof_request_form - Help Guide

## Purpose
This form is used to request an invoice payment proof from a customer. It captures relevant details about the payment, customer, and proof submission.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment type from the options provided.
2. Enter the payment date in the format `YYYY-MM-DD`.
3. Enter the payment amount.
4. Select the payment method from the options provided.
5. Select the payment status from the options provided.
6. Enter any additional notes about the payment.
7. Enter the customer's email address.
8. Enter the customer's phone number.
9. Enter the order ID.
10. Enter the customer's name.
11. Enter the customer's phone number.
12. Enter the payment proof text description.
13. Select the payment proof type from the options provided.
14. Enter the payment proof date in the format `YYYY-MM-DD`.
15. Enter the payment proof amount.
16. Select the payment proof method from the options provided.
17. Select the payment proof status from the options provided.
18. Enter the customer's signature.
19. Enter the name of the person who uploaded the proof.
20. Enter the date and time when the proof was uploaded.

## Field-by-Field Explanation

* **Select Payment Type** (`payment_type`, select_one, required): Select the payment type from the options provided to indicate whether payment was made.
* **Payment Date** (`payment_date`, date, required): Enter the date of the payment in the format `YYYY-MM-DD`.
* **Payment Amount** (`payment_amount`, number, required): Enter the amount paid.
* **Payment Method** (`payment_method`, select_one, required): Select the method of payment used (e.g., cash, credit card, etc.).
* **Payment Status** (`payment_status`, select_one, required): Select the status of the payment (e.g., active, inactive, etc.).
* **Notes** (`notes`, text, required): Enter any additional notes about the payment.
* **Email** (`email`, email, required): Enter the customer's email address.
* **Phone** (`phone`, text, required): Enter the customer's phone number.
* **Order ID** (`order_id`, text, required): Enter the order ID.
* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Payment Proof** (`payment_proof`, text, required): Enter a brief description of the payment proof.
* **Payment Proof Type** (`payment_proof_type`, select_one, required): Select the type of payment proof (e.g., yes, no, etc.).
* **Payment Proof Date** (`payment_proof_date`, date, required): Enter the date of the payment proof in the format `YYYY-MM-DD`.
* **Payment Proof Amount** (`payment_proof_amount`, number, required): Enter the amount of the payment proof.
* **Payment Proof Method** (`payment_proof_method`, select_one, required): Select the method of payment proof used (e.g., yes, no, etc.).
* **Payment Proof Status** (`payment_proof_status`, select_one, required): Select the status of the payment proof (e.g., active, inactive, etc.).
* **Customer Signature** (`customer_signature`, text, required): Enter the customer's signature.
* **Proof Uploaded By** (`proof_uploaded_by`, text, required): Enter the name of the person who uploaded the proof.
* **Proof Uploaded Date** (`proof_uploaded_date`, date, required): Enter the date when the proof was uploaded.
* **Proof Uploaded Time** (`proof_uploaded_time`, time, required): Enter the time when the proof was uploaded.
* **Uploaded By** (`uploaded_by`, text, required): Enter the name of the person who uploaded the proof.
* **Uploaded Date** (`uploaded_date`, date, required): Enter the date when the proof was uploaded.
* **Uploaded Time** (`uploaded_time`, time, required): Enter the time when the proof was uploaded.
