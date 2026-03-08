# Purchase Receipt Verification Form - Help Guide
## Purpose
This form is used to verify the details of a purchase made by a customer. It helps to confirm the receipt number, amount paid, payment method, customer name, and address.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter the receipt number in the "Receipt Number" field.
2. Enter the date and time of the purchase in the "Date of Purchase" and "Time of Purchase" fields, respectively.
3. Enter the amount paid in the "Amount Paid" field.
4. Select the payment method used from the "Payment Method" field. Options include Visa, Mastercard, Amex, Discover, and PayPal.
5. Enter the customer's name in the "Customer Name" field.
6. Enter the customer's address in the "Customer Address" field.

## Field-by-Field Explanation
### Receipt Number (Receipt Number)
* **Receipt Number** (`receipt_number`, number, required/optional): Enter the receipt number from the purchase receipt.

### Date of Purchase (Date of Purchase)
* **Date of Purchase** (`date_of_purchase`, date, required/optional): Enter the date of the purchase in the format `YYYY-MM-DD`.

### Time of Purchase (Time of Purchase)
* **Time of Purchase** (`time_of_purchase`, time, required/optional): Enter the time of the purchase in the format `HH:MM AM/PM`.

### Amount Paid (Amount Paid)
* **Amount Paid** (`amount_paid`, number, required/optional): Enter the amount paid in the purchase receipt.

### Payment Method (Payment Method)
* **Payment Method** (`payment_method`, select_one, required): Select the payment method used in the purchase. Options include:
	+ Visa
	+ Mastercard
	+ Amex
	+ Discover
	+ PayPal

### Customer Name (Customer Name)
* **Customer Name** (`customer_name`, text, required/optional): Enter the customer's name.

### Customer Address (Customer Address)
* **Customer Address** (`customer_address`, text, required/optional): Enter the customer's address.

## Tips
* Make sure to enter the receipt number correctly to ensure accurate verification of the purchase.
* Double-check the date and time of purchase to ensure accuracy.
* Select the correct payment method used in the purchase.
* Enter the customer's name and address carefully to ensure correct verification.
