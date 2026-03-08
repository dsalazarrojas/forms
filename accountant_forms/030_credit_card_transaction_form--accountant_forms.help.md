<Thinking>
To begin with, this form seems to be a financial transaction form used for credit card transactions, which involves a series of fields to record and document transactions. This form likely belongs to the "accountant_forms" category, and the "Credit Card Transaction Form" title suggests it's specifically designed for credit card-related financial activities. Each field on this form appears to be relevant to accounting and financial processes, and they don't seem to be duplicated. This form's fields cover various financial aspects such as customer, merchant, transaction, card, payment, and tax-related details. Upon analyzing the form's fields, it appears to be a comprehensive tool for documenting and analyzing credit card transactions.
</Thinking>

# Credit Card Transaction Form - Help Guide
## Purpose
The "Credit Card Transaction Form" is used to document credit card-related financial transactions. This form gathers information about the customer, merchant, transaction details, and payment methods to record and analyze financial activities.

## How To Complete This Form
To complete this form correctly, follow these steps:

1. Fill in the customer's name on Page 1.
2. Select the transaction date, merchant ID, and amount.
3. Choose the transaction status (Approved, Declined, or Processed).
4. Select the payment method (Cash, Check, or Credit Card).
5. Choose the payment term (Monthly, Annually, or Yearly).
6. Fill in any additional details in the transaction reference, merchant reference, tax, tip, total, sub-total, and VAT fields.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Transaction Date** (`transaction_date`, date, required): Record the date of the transaction.
* **Merchant ID** (`merchant_id`, number, required): Enter the merchant's ID number.
* **Amount** (`amount`, number, required): Enter the amount of the transaction.
* **Transaction Status** (`transaction_status`, select_one, required): Choose the status of the transaction (Approved, Declined, or Processed).
* **Payment Method** (`payment_method`, select_multiple, required): Select the payment method (Cash, Check, or Credit Card).
* **Payment Term** (`payment_term`, select_one, optional): Choose the payment term (Monthly, Annually, or Yearly).
* **Transaction Note** (`transaction_note`, note, optional): Record any additional notes about the transaction.
* **Customer Note** (`customer_note`, note, optional): Record any additional notes about the customer.
* **Merchant Note** (`merchant_note`, note, optional): Record any additional notes about the merchant.
* **Card Number** (`card_number`, text, optional): Enter the credit card number.
* **Card Type** (`card_type`, select_one, optional): Choose the type of card (Credit, Debit, or Prepaid).
* **Expiration Date** (`exp_date`, date, optional): Enter the expiration date of the card.
* **CVV** (`card_cvc`, text, optional): Enter the Card Verification Value (CVV).
* **CVV Code** (`cvd`, text, optional): Enter the CVV code.
* **Card Verification Code** (`cvc`, text, optional): Enter the card verification code.
* **Tax** (`tax`, number, optional): Record the tax amount.
* **Tip** (`tip`, number, optional): Record the tip amount.
* **Total** (`total`, number, optional): Record the total amount.
* **Sub-Total** (`sub_total`, number, optional): Record the sub-total amount.
* **VAT** (`vat`, number, optional): Record the VAT amount.
* **VAT Total** (`vat_total`, number, optional): Record the VAT total amount.
* **Transaction Reference** (`transaction_reference`, text, optional): Enter a reference for the transaction.
* **Merchant Reference** (`merchant_reference`, text, optional): Enter a reference for the merchant.
* **Card CVC** (`cvd`, text, optional): Enter the CVC (Credit Card Verification Code).
