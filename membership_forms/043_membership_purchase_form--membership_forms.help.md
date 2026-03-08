# Membership Purchase Form - Help Guide
## Purpose
This form is used to collect information from users who are purchasing membership from your organization. It is a private form for tracking and validating membership purchases.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Purchase Date field with the date you are purchasing the membership.
2. Select the Membership Type you wish to purchase from the dropdown menu.
3. Enter your Member Name in the text field.
4. Provide your Email address.
5. Enter your Phone number (if applicable).
6. Indicate your preferred Payment Method by selecting from the dropdown menu.
7. Enter your Card Number.
8. Enter the Expiration Date of your Card.
9. Enter the CVC (Card Verification Value) of your Card.
10. Optionally, if you have any other Member Information, you may write it in the Member Information text field.

## Field-by-Field Explanation

* **Purchase Date (1)** (`purchase_date`, date, required: false): Enter the date you are purchasing the membership.
* **Membership Type (2)** (`member_type`, select_one, required: false): Select the type of membership you wish to purchase.
* **Member Name (3)** (`member_name`, text, required: false): Enter your name as the member.
* **Email (4)** (`member_email`, email, required: false): Enter your email address for communication purposes.
* **Phone (5)** (`member_phone`, text, required: false): If you have a phone number, enter it for further communication.
* **Payment Method (6)** (`payment_method`, select_multiple, required: false): Select your preferred payment method from the dropdown menu.
* **Card Number (7)** (`card_number`, number, required: false): Enter your credit or debit card number for payment.
* **Expiration Date (8)** (`card_expiration`, date, required: false): Enter the expiration date of your card.
* **CVC (9)** (`card_cvc`, number, required: false): Enter the CVC (Card Verification Code) on your card.
* **Member Information (10)** (`member_info`, note, required: false): If you have any additional information, please write it here.
* **Purchase Amount (11)** (`purchase_amount`, number, required: false): Enter the amount you are paying for the membership.
