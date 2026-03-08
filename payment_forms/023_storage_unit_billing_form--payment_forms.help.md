# Storage Unit Billing Form - Help Guide
## Purpose
The Storage Unit Billing Form is used to process payments for storage units.

## How To Complete This Form
To complete the form, follow these steps:
1. Select the storage unit from the list provided in the "storage_unit_id" field.
2. Enter the customer's ID in the "customer_id" field.
3. Choose the payment method from the "payment_method" field (e.g., Bank Transfer or Online Payment).
4. Enter the payment amount in the "payment_amount" field.
5. Enter the payment date in the "payment_date" field.
6. Enter the payment time in the "payment_time" field (if applicable).
7. Select the payment status (Paid or Unpaid) from the "payment_status" field.
8. Enter any additional notes about the payment in the "notes" field (optional).
9. Enter the customer's email address in the "email" field.
10. Enter the customer's phone number in the "phone" field (optional).

## Field-by-Field Explanation
* **Billing Form** (`billing_form`, number, required): Please select the number corresponding to the storage unit to be billed.
* **Storage Unit ID** (`storage_unit_id`, select_one, required): Select the storage unit for which payment is being made.
* **Customer ID** (`customer_id`, number, required): Enter the customer's ID.
* **Payment Method** (`payment_method`, select_one, optional): Choose how the payment will be made (e.g., Bank Transfer or Online Payment).
* **Payment Amount** (`payment_amount`, number, required): Enter the total payment amount.
* **Payment Date** (`payment_date`, date, required): Enter the date of the payment.
* **Payment Time** (`payment_time`, time, optional): Enter the time of the payment (if applicable).
* **Payment Status** (`payment_status`, select_one, optional): Select the payment status (Paid or Unpaid).
* **Notes** (`notes`, note, optional): Add any additional notes about the payment.
* **Email** (`email`, email, required): Enter the customer's email address.
* **Phone** (`phone`, text, optional): Enter the customer's phone number (optional).
