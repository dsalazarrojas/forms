<thinking>...</thinking>

# Tip Payment Form - Help Guide

## Purpose
This form is designed to help restaurant staff calculate and manage tip payments from customers. It collects relevant information for processing and recording tip payments accurately and efficiently.

## How To Complete This Form

To complete this form, follow these steps:

1. Calculate the total bill amount on the "Total Bill" field.
2. Enter a tip percentage or a fixed tip amount, if any, on the "Tip Percentage" and "Tip Amount" fields.
3. Select or type in the payment method used on the "Payment Method" field. If other payment methods are used, such as "Other", you can specify it on the "Other Payment Method" field.
4. Enter any additional notes or comments on the "Note" field.
5. Enter the customer's email address and phone number on the "Email Address" and "Phone Number" fields.
6. Enter the customer's name on the "Customer Name" field.
7. Review and confirm the calculation on the "Total Bill with Tip" field and submit the form.

## Field-by-Field Explanation

* **Total Bill** (`total_bill`, `number`, required): Enter the total amount of the customer's bill.
* **Tip Percentage** (`tip_percentage`, `number`, optional): If you want to calculate the tip based on a percentage, enter it here. Leave this field blank for fixed tips.
* **Tip Amount** (`tip_amount`, `number`, optional): Enter the tip amount if it's not based on a percentage.
* **Total Bill with Tip** (`total_bill_with_tip`, `number`, required): This field displays the calculated total bill with the tip.
* **Payment Method** (`payment_method`, `select_one`, optional): Select the payment method used, such as "Cash", "Credit Card", or "Debit Card". If other payment methods are used, select "Other" and enter it in the "Other Payment Method" field.
* **Other Payment Method** (`other_payment_method`, `text`, optional): Enter any other payment method used if not listed in the "Payment Method" options.
* **Note** (`note`, `note`, optional): Enter any additional notes or comments about the payment.
* **Email Address** (`email`, `email`, required): Enter the customer's email address.
* **Phone Number** (`phone_number`, `text`, optional): Enter the customer's phone number.
* **Customer Name** (`customer_name`, `text`, required): Enter the customer's name.
* **Customer Email** (`customer_email`, `email`, required): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, `text`, required): Enter the customer's phone number.

## Tips

* Make sure to accurately calculate the total bill with tip to ensure correct payment processing.
* Double-check the payment method and other payment method fields if other payment methods are used.
* Enter the customer's contact information accurately for efficient communication.
* Review the form carefully before submission to ensure all required fields are filled.
