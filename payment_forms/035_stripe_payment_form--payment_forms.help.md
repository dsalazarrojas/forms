<thinking>
This form is likely used for online transactions, such as e-commerce payments or donations. The purpose of the form is to collect information necessary for processing payments via different methods, specifically:
* Credit Card
* PayPal
* Bank Transfer
The form is designed to be simple and straightforward, with only a few fields required for payment processing. Each field is designed to collect specific information, which is used to complete the payment transaction.
</thinking>

# Stripe Payment Form - Help Guide
## Purpose
The Stripe Payment Form is used to collect information for online payments via different methods, including credit cards, PayPal, and bank transfers.

## How To Complete This Form
To complete the form, follow these steps:

1. Select a payment method from the dropdown menu on the first page.
2. Enter your card number on the second page.
3. Enter your card's CVV (Card Security Code) on the third page.
4. Enter your card's expiration date and expiration month on the fourth and fifth pages, respectively.

## Field-by-Field Explanation
* **Payment Method** (`stripe_payment_form_page_1`, select_one, optional): Select the payment method you would like to use for your transaction.
* **Card Number** (`stripe_payment_form_page_2`, text, optional): Enter the 16-digit card number of your credit card.
* **CVV** (`stripe_payment_form_page_3`, text, optional): Enter the 3 or 4-digit Card Security Code (CVV) found on your card.
* **Expiration Date** (`stripe_payment_form_page_4`, date, optional): Enter the expiration date of your card in the format `MM/YY`.
* **Expiration Month** (`stripe_payment_form_page_5`, select_one, optional): Select the expiration month of your card.
