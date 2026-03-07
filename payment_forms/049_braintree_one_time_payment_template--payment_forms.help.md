<thinking>
This form is used to collect information for a one-time payment through Braintree. To avoid duplication, users should not use this form if they have already made a payment using another Braintree template. This form is intended for customers who wish to make a one-time payment. It captures necessary details such as customer contact information, payment method, and authorization details. This form will only be used once the customer has agreed to the payment terms and conditions. Users can save their payment information for future purchases, but this is not required. This form will only be used to create a one-time payment record in the system.
</thinking>

# Braintree One Time Payment Template - Help Guide
## Purpose
This form is designed to collect necessary information for a one-time payment through Braintree.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in all the required fields (marked as "required") with your information.
* Select the payment method and other payment details accordingly.
* Agree to the payment terms and conditions.
* Choose how you would like to receive your receipt.
* Provide any special instructions or notes for this payment.

## Field-by-Field Explanation
* **First Name** (`customer_first_name`, text, required): Enter your first name.
* **Last Name** (`customer_last_name`, text, required): Enter your last name.
* **Email Address** (`customer_email`, email, required): Enter your email address for payment confirmation.
* **Phone Number** (`customer_phone`, text, required): Enter your primary contact number.
* **Address** (`customer_address`, text, required): Enter your complete billing address.
* **City** (`customer_city`, text, required): Enter your city.
* **State** (`customer_state`, text, required): Enter your state or province.
* **ZIP Code** (`customer_zip`, text, required): Enter your ZIP or postal code.
* **Country** (`customer_country`, select_one, required): Select your country.
* **Payment Description** (`payment_description`, text, required): Describe the purpose of this payment.
* **Payment Amount** (`payment_amount`, text, required): Enter the total amount due.
* **Invoice Number** (`invoice_number`, text, optional): Enter a reference number if applicable.
* **Payment Method** (`payment_method`, select_one, required): Select how you would like to pay (e.g., credit card, debit card, PayPal, etc.).
* **Card Type** (`card_type`, select_one, optional): Select the type of card (e.g., Visa, Mastercard, American Express, etc.).
* **Card Number** (`card_number`, text, optional): Enter your card number.
* **Cardholder Name** (`cardholder_name`, text, optional): Enter the name as it appears on the card.
* **Expiry Month** (`card_expiry_month`, select_one, optional): Select the expiry month of the card.
* **Expiry Year** (`card_expiry_year`, select_one, optional): Select the expiry year of the card.
* **CVV** (`card_cvv`, text, optional): Enter the security code.
* **Billing Address** (`billing_address`, text, optional): Enter your billing address if it is different from the above address.
* **Save Payment Information** (`save_payment_info`, select_one, optional): Select whether to save your payment information for future purchases.
* **Payment Authorization** (`payment_authorization`, select_one, required): Agree to authorize this payment.
* **Terms and Conditions** (`terms_accepted`, select_one, required): Agree to the payment terms and conditions.
* **Refund Policy** (`refund_policy`, select_one, required): Understand the refund policy.
* **Receipt Preference** (`receipt_preference`, select_one, required): Select how you would like to receive your receipt (e.g., email, mail, both).
* **Promotional Emails** (`promotional_emails`, select_one, optional): Select whether to receive promotional communications.
* **Special Instructions** (`special_instructions`, text, optional): Enter any notes or instructions for this payment.
* **Customer Signature** (`customer_signature`, text, required): Type your full legal name as a signature.
* **Payment Date** (`payment_date`, date, required): Enter the date of the payment.
* **Is Billing Address the Same** (`billing_address_same`, select_one, optional): Select whether your billing address is the same as the above address.
* **Is the above information correct?** (`payment_authorization`, select_one, required): Confirm that the above information is accurate.

Note: Some fields are optional, but they are still required for specific conditions or scenarios. For example, you may need to enter a card number if you select "Credit card" as the payment method.
