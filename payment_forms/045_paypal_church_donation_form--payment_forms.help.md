# paypal_church_donation_form - Help Guide

## Purpose
This form is used to collect information for a donation to a church's fundraising efforts.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first and last name in the "First Name" and "Last Name" fields.
2. Enter your email address in the "Email" field.
3. If you wish to make a donation, enter an amount in the "Amount" field.
4. Enter the date of your donation in the "Date" field.
5. Enter the time of your donation in the "Time" field.
6. Add any additional notes in the "Note" field (optional).
7. Select your preferred payment method from the "Payment Method" field.
8. Click the "Submit" button to send your information for processing.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name in this field.
* **Last Name** (`last_name`, `text`, required): Enter your last name in this field.
* **Email** (`email`, `email`, required): Enter your email address in this format: example@example.com.
* **Amount** (`amount`, `number`, optional): If you wish to make a donation, enter an amount in this field.
* **Date** (`date`, `date`, required): Enter the date of your donation in the format MM/DD/YYYY.
* **Time** (`time`, `time`, required): Enter the time of your donation in the format HH:MM AM/PM.
* **Note** (`note`, `note`, optional): Add any additional notes or comments about your donation in this field.
* **Payment Method** (`pay_pal`, `select_one`, optional): Select your preferred payment method (PayPal or Other).
* **Payment Method** (`pay_cash`, `select_multiple`, optional): Select all applicable payment methods (Cash or Check).
* **Submit** (`submit`, `text`, required): Click this button to send your information for processing.

## Tips
* Make sure to enter accurate and complete information.
* Review your selections before submitting.
* Ensure your "Payment Method" field matches the actual payment method selected.
