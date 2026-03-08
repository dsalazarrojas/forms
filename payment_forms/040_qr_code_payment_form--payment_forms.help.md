# qr_code_payment_form - Help Guide
## Purpose
The qr_code_payment_form is used for processing payments from customers using QR codes. It captures information related to the payment, including payment method, customer contact details, and payment status.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if the customer has paid or not.
2. Enter the customer's email address.
3. Enter the customer's phone number.
4. Select the date of the payment.
5. Select the time of the payment.
6. Provide any additional notes about the payment.
7. Enter the total amount of the payment.
8. Choose the current payment status.

## Field-by-Field Explanation
* **Payment method** (`payment_method`, select_one, required: false): Select whether the customer has paid or not.
* **Customer email** (`email`, email, required: false): Enter the customer's email address.
* **Customer phone** (`phone`, text, required: false): Enter the customer's phone number.
* **Date** (`date`, date, required: false): Select the date of the payment.
* **Time** (`time`, time, required: false): Select the time of the payment.
* **Note** (`note`, note, required: false): Provide any additional notes or comments about the payment.
* **Total amount** (`total_amount`, number, required: false): Enter the total amount of the payment.
* **Payment status** (`payment_status`, select_one, required: false): Choose the current payment status of the payment.

## Tips
* Make sure to enter accurate information in each field to ensure correct processing of the payment.
