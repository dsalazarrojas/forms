# credit_card_checkout_form - Help Guide
## Purpose
The credit_card_checkout_form is a form used for processing credit card information during checkout. It collects card number, card holder's name, expiration date, expiration year, CVV, CVV type, card type, and zip code.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Card Number in the format `XXXX XXXX XXXX XXXX`.
2. Enter the Name on Card.
3. Select the Expiration Date (MM / YY).
4. Select the Expiration Year from the dropdown list.
5. For the CVV, select one of the options provided (e.g., 123, 456).
6. Choose the CVV Type from the dropdown list (visa, mastercard, amex).
7. Choose the Card Type from the dropdown list (visa, mastercard, amex).
8. Enter the Zip code (without any additional characters).

## Field-by-Field Explanation

* **Card Number** (`card_number`, text, required): Enter your credit card number in the format `XXXX XXXX XXXX XXXX`.
* **Name on Card** (`name_on_card`, text, required): Enter the name as it appears on the card.
* **Expiration Date** (`expiration_date`, date, required): Select the expiration date of the credit card (MM / YY).
* **Expiration Year** (`expiration_year`, select_one, required): Select the expiration year of the credit card from the dropdown list.
* **CVV** (`cvv`, select_multiple, required): Choose one of the CVV options provided (e.g., 123, 456).
* **CVV Type** (`cvv_type`, select_one, required): Choose the type of CVV from the dropdown list (visa, mastercard, amex).
* **Card Type** (`card_type`, select_multiple, required): Choose the type of credit card from the dropdown list (visa, mastercard, amex).
* **Zip** (`zip`, number, required): Enter the zip code associated with the credit card.
* **Card Holder** (`card_holder`, text, required): Enter the name of the card holder.
* **CVV Type** (`cvv_type`, select_one, required): Choose the type of CVV from the dropdown list (visa, mastercard, amex).
* **Card Type** (`card_type`, select_multiple, required): Choose the type of credit card from the dropdown list (visa, mastercard, amex).
