# Braintree One Time Payment Template - Help Guide

## Purpose
This form is used to collect customer and payment information for a one-time payment through Braintree.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the customer's first name in the `First Name` field.
2. Enter the customer's last name in the `Last Name` field.
3. Enter the customer's email address in the `Email Address` field.
4. Enter the customer's phone number (optional) in the `Phone Number` field.
5. Enter the payment amount in the `Payment Amount` field.
6. Enter a description of what is being paid for in the `Payment Description` field.
7. Enter the reference invoice number (optional) in the `Invoice Number` field.
8. If applicable, enter a description of the item or service being purchased in the `Item or Service Description` field.
9. Enter the quantity of items being purchased in the `Quantity` field.
10. Enter the unit price of each item in the `Unit Price` field.
11. Enter the customer's street address in the `Street Address` field.
12. Enter the city where the customer resides in the `City` field.
13. Enter the state or province where the customer resides in the `State or Province` field.
14. Enter the customer's postal code in the `ZIP or Postal Code` field.
15. Enter the customer's country of residence in the `Country` field.
16. Finally, confirm the payment by selecting the `I authorize this payment` option.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter the customer's first name.
* **Last Name** (`last_name`, `text`, required): Enter the customer's last name.
* **Email Address** (`email`, `email`, required): Enter the customer's email address for receipt and communication purposes.
* **Phone Number** (`phone`, `text`, optional): Enter the customer's phone number for contact information (not required).
* **Payment Amount** (`payment_amount`, `number`, required): Enter the total amount to be paid in dollars.
* **Payment Description** (`payment_description`, `text`, optional): Describe what is being paid for.
* **Invoice Number** (`invoice_number`, `text`, optional): Enter the reference invoice number.
* **Item or Service Description** (`item_description`, `text`, required): Describe the item or service being purchased.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of items being purchased.
* **Unit Price** (`unit_price`, `number`, required): Enter the price per unit of the item.
* **Street Address** (`street_address`, `text`, required): Enter the customer's full street address.
* **City** (`city`, `text`, required): Enter the city where the customer resides.
* **State or Province** (`state_province`, `text`, required): Enter the state or province where the customer resides.
* **ZIP or Postal Code** (`zip_code`, `text`, required): Enter the customer's postal code.
* **Country** (`country`, `text`, required): Enter the customer's country of residence.
* **I authorize this payment** (`payment_confirmation`, `select_one`, required): Confirm the payment by selecting the "I authorize this payment" option.
