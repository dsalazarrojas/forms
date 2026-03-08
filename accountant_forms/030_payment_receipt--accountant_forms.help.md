# Payment Receipt - Help Guide
## Purpose
The Payment Receipt form is used to collect and document information about a payment made by a customer. This includes details about the customer, the payment amount, and the payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Customer Name, which is the name of the person making the payment.
2. Enter the Date of the payment, which is the date when the payment was made.
3. Enter the Payment Amount, which is the total amount paid.
4. Enter the Receipt Number, which is a unique identifier for the payment receipt.
5. Enter the Reason for Payment, which explains the purpose of the payment.
6. Enter the Name of Receiver, which is the name of the person or entity receiving the payment.
7. Select the Payment Method, which is the method used to make the payment (e.g., Cheque, Cash, Bank Transfer).
8. Enter the Date of Payment, which is the date when the payment was made (if different from the original date).
9. Enter the Amount Paid, which is the total amount paid (if different from the original payment amount).
10. Select the Payment Type, which indicates the type of payment (e.g., Rent, Service Charge, Other).
11. Select the Payment Status, which indicates whether the payment is paid or outstanding.
12. Enter the Customer ID, which is a unique identifier for the customer.
13. Enter the Payment Note, which is a note about the payment.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required/optional): Enter the name of the person making the payment.
* **Date** (`date`, date, required/optional): Enter the date when the payment was made.
* **Payment Amount** (`payment_amount`, number, required/optional): Enter the total amount paid.
* **Receipt Number** (`receipt_number`, text, required/optional): Enter a unique identifier for the payment receipt.
* **Reason for Payment** (`reason_for_payment`, text, required/optional): Enter a brief description of the payment purpose.
* **Name of Receiver** (`receiver_name`, text, required/optional): Enter the name of the person or entity receiving the payment.
* **Payment Method** (`payment_method`, select_multiple, required/optional): Select the method used to make the payment (e.g., Cheque, Cash, Bank Transfer).
* **Date of Payment** (`date_of_payment`, date, required/optional): Enter the date when the payment was made (if different from the original date).
* **Amount Paid** (`amount_paid`, number, required/optional): Enter the total amount paid (if different from the original payment amount).
* **Payment Type** (`payment_type`, select_one, required/optional): Select the type of payment (e.g., Rent, Service Charge, Other).
* **Payment Status** (`payment_status`, select_one, required/optional): Select whether the payment is paid or outstanding.
* **Customer ID** (`customer_id`, text, required/optional): Enter a unique identifier for the customer.
* **Payment Note** (`payment_note`, note, required/optional): Enter a note about the payment.
