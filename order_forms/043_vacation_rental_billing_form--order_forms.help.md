# Vacation Rental Billing Form - Help Guide
## Purpose
This form is used to process the billing information for a vacation rental order.

## How To Complete This Form
1. Fill in the customer's name in the "name" field.
2. Enter the customer's email address in the "email" field.
3. Enter the customer's phone number in the "phone" field.
4. Select the payment method from the "payment_method" field (options: Credit Card, PayPal, Bank Transfer, Cash).
5. Enter any additional payment method details in the "payment_method_other" field (if applicable).
6. Enter the rental details in the "rental_details" field.
7. Enter any order notes in the "order_notes" field (if applicable).
8. Enter the order amount in the "order_amount" field.
9. Enter the total cost in the "total_cost" field.
10. Enter the tax rate in the "tax_rate" field.
11. Enter the discount (if any) in the "discount" field.
12. Select the payment status from the "payment_status" field (options: Paid, Unpaid, Partially Paid, Pending).
13. Enter the payment method payment id and dates in the respective fields.
14. Enter the payment method transaction ids and dates in the respective fields.
15. Enter the order id in the "order_id" field (if applicable).

## Field-by-Field Explanation

* **name** (`text`, **required**): Enter the customer's name.
* **email** (`email`, **required**): Enter the customer's email address.
* **phone** (`text`, **required**): Enter the customer's phone number.
* **payment_method** (`select_multiple`, **required**): Select the payment method from the options provided (Credit Card, PayPal, Bank Transfer, Cash).
* **payment_method_other** (`text`, **optional**): Enter any additional payment method details.
* **rental_details** (`text`, **required**): Enter the rental details.
* **order_notes** (`text`, **optional**): Enter any order notes.
* **order_amount** (`number`, **required**): Enter the order amount.
* **total_cost** (`number`, **required**): Enter the total cost (including tax).
* **tax** (`number`, **required**): Enter the tax rate.
* **discount** (`number`, **optional**): Enter any discount amount.
* **payment_status** (`select_one`, **required**): Select the payment status from the options provided (Paid, Unpaid, Partially Paid, Pending).
* **payment_method_payment_id**, **payment_method_payment_date**, **payment_method_transaction_id**, **payment_method_transaction_date**, **payment_method_transaction_id_2**, **payment_method_transaction_id_4**, **payment_method_transaction_id_5**, **payment_method_transaction_id_6**, **payment_method_transaction_id_3** and **payment_method_transaction_id_4** are all **text**, **date**, **text** fields respectively. These fields are used to capture additional payment details and are not required.
* **order_id** (`text`, **optional**): Enter the order id.

Note: The fields marked as "optional" can be left blank if not applicable.
