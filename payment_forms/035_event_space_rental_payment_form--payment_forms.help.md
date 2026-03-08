# event_space_rental_payment_form - Help Guide
## Purpose
This form is designed to facilitate the payment process for event space rentals. It allows users to select a payment method, enter the necessary information for that method, and submit the form to complete the payment.

## How To Complete This Form
To complete this form, follow these steps:

1. Select a payment method from the options provided.
2. Enter any necessary information for the selected payment method.
3. Review and fill in any other required fields.
4. Click the "Submit" button to complete the payment process.

## Field-by-Field Explanation

* **Select a Payment Method** (`payment_method`, select_one, required: false): Choose the payment method you wish to use for your event space rental payment.
* **Card Information** (`card_info`, text, required: false): Enter any additional information for your card payment method, if necessary.
* **Card Number** (`card_number`, text, required: false): Enter your card number for the selected payment method.
* **Card Verification Value** (`cvv`, text, required: false): Enter your card verification value (CVV) for the selected payment method.
* **Expiration Date** (`expiration_date`, text, required: false): Enter the expiration date of the card for the selected payment method.
* **Amount Paid** (`amount_paid`, number, required: false): Enter the amount you are paying for the event space rental.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone Number** (`phone`, text, required: false): Enter your phone number.
* **Notes** (`note`, note, required: false): Enter any additional notes or comments about your payment.
* **Submit** (`submit`, text, required: false): Click this button to complete the payment process.
* **Cancel** (`cancel`, text, required: false): If you need to cancel your payment, click this button to return to the previous page.
