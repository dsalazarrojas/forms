# credit_card_receipt_form - Help Guide
## Purpose
This form is designed for merchants to provide credit card information for online transactions, refunds, or other purposes where accurate credit card details are required.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Customer Info section with your name and any other relevant information.
2. Select your payment method from the options provided (Visa, Mastercard, Amex, or Discover).
3. Enter your card number in the Card Number field.
4. Enter your expiration date in the mm/dd format (e.g., 02/2024).
5. Enter your security code for the card in the Security Code field.
6. Enter your full name as the Card Holder Name.
7. Provide your merchant information (Name, Contact, Phone, and E-mail).

## Field-by-Field Explanation
* **Customer Info** (`customer_info`, text, required: false): This section captures your name and any other relevant information as the customer.
* **Payment Method** (`payment_method`, select_one, required: false): Select your payment method from the options provided (Visa, Mastercard, Amex, or Discover).
* **Card Number** (`card_number`, text, required: false): Enter your credit card number for the payment.
* **Expiration Date** (`expiration_date`, date, required: false): Enter your credit card expiration date in the mm/dd format (e.g., 02/2024).
* **Security Code** (`security_code`, text, required: false): Enter your credit card security code for verification.
* **Card Holder Name** (`card_holder_name`, text, required: false): Enter your full name as the card holder.
* **Merchant Info** (`merchant_info`, text, required: false): Provide your merchant information for the transaction.
* **Name** (`merchant_name`, text, required: false): Enter your merchant name.
* **Contact** (`merchant_contact`, text, required: false): Enter your merchant contact information.
* **Phone** (`merchant_phone`, text, required: false): Enter your merchant phone number.
* **E-mail** (`merchant_email`, email, required: false): Enter your merchant email address.
