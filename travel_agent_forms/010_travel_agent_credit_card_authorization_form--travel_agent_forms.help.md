> # travel_agent_credit_card_authorization_form - Help Guide
## Purpose

The travel agent credit card authorization form is used to verify a travel agent's credit card information for travel-related transactions.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your credit card number in the "Credit Card Number" field.
2. Enter the expiration date of your credit card in the "Expiration Date" field.
3. Select your card type from the "Card Type" dropdown menu.
4. Optionally, select authorized personnel from the "Authorized By" dropdown menu, if applicable.
5. Enter the amount of the transaction in the "Amount" field.
6. Enter the travel date in the "Travel Date" field.
7. Describe the purpose of the transaction in the "Purpose" field.

## Field-by-Field Explanation

* **Credit Card Number** (`credit_card_number`, `number`, required): Enter the 16-digit credit card number associated with your travel agent account.
* **Expiration Date** (`expiration_date`, `date`, required): Enter the expiration date of your credit card in the format MM/YY.
* **CVV** (`cvv`, `number`, optional): Enter the 3-digit Card Verification Value (CVV) code found on the back of your credit card.
* **Card Type** (`card_type`, `select_one`, required): Select the type of your credit card from the dropdown menu: Visa, Mastercard, Amex.
* **Authorized By** (`authorized_by`, `select_multiple`, optional): Optionally, select the personnel authorized to use this credit card for travel purposes.
* **Amount** (`amount`, `number`, required): Enter the amount of the transaction.
* **Travel Date** (`travel_date`, `date`, required): Enter the travel date associated with this transaction.
* **Purpose** (`purpose`, `text`, required): Describe the purpose of the transaction, e.g., business trip, leisure travel, etc.

## Tips

* Ensure that the credit card information is accurate and up-to-date.
* Verify that the authorized personnel is correct, if selected.
* Review the amount and travel date to ensure they are correct.
* Describe the purpose of the transaction clearly and concisely.
