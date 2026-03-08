# Payment Prioritization Request Form - Help Guide

## Purpose

This form is used for payment prioritization purposes.

## How To Complete This Form

1. Select the date of the payment request using the date field. This will help track payment history.
2. Choose the vendor associated with the payment using the select menu.
3. Enter the total amount due using the numerical field.
4. Indicate the priority level of the payment (High, Medium, or Low) using the select menu.
5. Provide a brief reason for the documentation using the text field.
6. Indicate whether the payment is urgent or not using the select menu.
7. Add any additional notes using the note field.
8. Enter the email address of the associated contact using the email field.

## Field-by-Field Explanation

* **What is the payment request date?** (`payment_payout_request`, date, required/optional): Select the date of the payment request.
* **Vendor** (`payment_vendor`, select_one, required/optional): Choose the vendor associated with the payment.
* **Total amount due** (`payment_amount`, number, required/optional): Enter the total amount due for the payment.
* **Priority level** (`payment_priority`, select_one, required/optional): Select the priority level of the payment (High, Medium, or Low).
* **Document reason** (`payment_documentation`, text, required/optional): Provide a brief reason for the payment documentation.
* **Is this payment urgent?** (`payment_urgent`, select_one, required/optional): Indicate whether the payment is urgent or not.
* **Notes** (`payment_note`, note, required/optional): Add any additional notes related to the payment.
* **Email** (`payment_email`, email, required/optional): Enter the email address of the associated contact.
