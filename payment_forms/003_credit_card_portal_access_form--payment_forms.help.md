<thinking>
This form is intended to help credit card merchants (e.g. online business owners) access their credit card portal account information.
The form's purpose is to collect customer information for credit card payment processing. The form will be used to verify customer identity, validate credit card details, and ensure accurate payment processing.
The form has a specific structure with 9 fields that must be filled out in the following order:
- Customer name
- Email
- Expiration Month
- Expiration Year
- Card Number
- Cvv
- Billing Address
- Zip Code
- Expiration Date

The form requires the following fields to be filled out:
- Customer Name
- Email
- Expiration Month
- Expiration Year
- Card Number
- Cvv
- Billing Address
- Zip Code
- Expiration Date

Each field has a specific label and type, which is explained below:

</thinking>

# credit_card_portal_access_form - Help Guide
## Purpose
This form is designed to help credit card merchants access their credit card portal account information for payment processing.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter the customer's **Customer Name** in the text field provided.
2. Enter the customer's **Email** in the text field provided.
3. Select the **Expiration Month** from the dropdown list.
4. Select the **Expiration Year** from the dropdown list. Note: This field should be set to "No" if the card is not expirable.
5. Enter the 16-digit **Card Number** in the text field.
6. Enter the **Cvv** in the text field.
7. Enter the **Billing Address** in the text field.
8. Enter the **Zip Code** in the text field.
9. Select the **Expiration Date** from the date picker field.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter the customer's full name as it appears on their credit card statement.
* **Email** (`customer_email`, email, required): Enter the customer's email address associated with the credit card account.
* **Expiration Month** (`expirate_month`, select_one, required): Select the month when the card expires.
* **Expiration Year** (`expirate_year`, select_one, required): Select "Yes" if the card has an expiration year or "No" if it doesn't. If it's "No", you can leave this field blank. Otherwise, select the year when the card expires.
* **Card Number** (`card_number`, text, required): Enter the 16-digit credit card number.
* **Cvv** (`cvv`, text, required): Enter the 3-digit credit card verification value.
* **Billing Address** (`billing_address`, text, required): Enter the address associated with the credit card account.
* **Zip Code** (`zip_code`, text, required): Enter the zip code associated with the credit card account.
* **Expiration Date** (`expirate_date`, date, required): Select the date when the card expires.
