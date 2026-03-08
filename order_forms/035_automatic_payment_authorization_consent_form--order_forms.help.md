<thinking>...</thinking>

# Automatic Payment Authorization Consent Form - Help Guide
## Purpose
This form is designed to collect information from customers for automatic payment authorization. It includes personal and payment details, as well as terms and conditions related to automatic payments.

## How To Complete This Form
To complete this form, please follow these steps:

1. Read the introduction and understand the purpose of the form.
2. Fill in your personal details, including First Name, Last Name, Email Address, Phone Number, and Street Address.
3. Enter your Order Information, including Order Number, Order Date, and Product or Service details.
4. Select the type of automatic payment (One-Time, Recurring, etc.) and specify the Payment Amount.
5. Choose the payment frequency (Weekly, Bi-Weekly, Monthly, etc.).
6. Select the payment method (Credit Card, Debit Card, Bank Account, etc.).
7. Fill in any additional details required for payment (Card Information, Bank Account Information, etc.).
8. Read and understand the terms and conditions related to automatic payments, including cancellation policy, failed payment policy, and data security.
9. Check the box for authorization and cancellation terms, and sign with a digital signature.
10. Submit the form to complete the authorization process.

## Field-by-Field Explanation

* **First Name (id: 3, type: text, required: true)**: This is the customer's first name. Please enter the name as it appears on your identification documents.
* **Last Name (id: 4, type: text, required: true)**: This is the customer's last name. Please enter the name as it appears on your identification documents.
* **Email Address (id: 5, type: email, required: true)**: This is the customer's primary email address. Please enter the email address where you can be reached.
* **Phone Number (id: 6, type: text, required: true)**: This is the customer's contact phone number. Please enter the number where you can be reached.
* **Street Address (id: 7, type: text, required: true)**: This is the customer's street address for billing purposes. Please enter the address as it appears on your identification documents.
* **City (id: 8, type: text, required: true)**: This is the city of the customer's street address.
* **State (id: 9, type: select_one, required: true)**: This is the state of the customer's street address.
* **ZIP Code (id: 10, type: text, required: true)**: This is the customer's 5-digit ZIP code.
* **Customer ID (id: 11, type: text, required: false)**: This is the customer's account number (not required).
* **Order Information (id: 12, type: note, required: false)**: This is a note field for the customer to enter any additional order details.
* **Order Number (id: 13, type: text, required: true)**: This is the customer's order number.
* **Order Date (id: 14, type: date, required: true)**: This is the date the order was placed.
* **Product or Service (id: 15, type: text, required: true)**: This is the product or service ordered.
* **Total Amount (id: 16, type: number, required: true)**: This is the total cost of the order.
* **Payment Schedule (id: 17, type: note, required: false)**: This is a note field for the customer to understand how payments work.
* **Payment Type (id: 18, type: select_one, required: true)**: This is the type of automatic payment (One-Time, Recurring, etc.).
* **Payment Amount (id: 19, type: number, required: true)**: This is the amount to be charged for the payment.
* **Payment Frequency (id: 20, type: select_one, required: true)**: This is how often payments will be made (Weekly, Bi-Weekly, etc.).
* **First Payment Date (id: 21, type: date, required: true)**: This is the date when the first payment will be made.
* **Last Payment Date (id: 22, type: date, required: false)**: This is the date when the last payment will be made (not required).
* **Number of Payments (id: 23, type: number, required: false)**: This is the total number of payments.
* **Payment Method (id: 24, type: select_one, required: true)**: This is the method of payment (Credit Card, Debit Card, etc.).
* **Card Information (id: 25, type: note, required: false)**: This is a note field for customers paying by card to enter their card information.
* **Card Type (id: 26, type: select_one, required: false)**: This is the type of card (Visa, MasterCard, etc.).
* **Card Number (id: 27, type: text, required: false)**: This is the customer's credit card number.
* **Cardholder Name (id: 28, type: text, required: false)**: This is the name on the card.
* **Expiration Month (id: 29, type: select_one, required: false)**: This is the card's expiration month.
* **Expiration Year (id: 30, type: select_one, required: false)**: This is the card's expiration year.
* **CVV (id: 31, type: text, required: false)**: This is the customer's card's security code.
* **Billing ZIP Code (id: 32, type: text, required: false)**: This is the customer's billing ZIP code.
* **Bank Account Information (id: 33, type: note, required: false)**: This is a note field for customers paying by bank to enter their bank account information.
* **Bank Name (id: 34, type: text, required: false)**: This is the customer's bank name.
* **Account Type (id: 35, type: select_one, required: false)**: This is the type of account (Checking, Savings, etc.).
* **Routing Number (id: 36, type: text, required: false)**: This is the customer's 9-digit routing number.
* **Account Number (id: 37, type: text, required: false)**: This is the customer's account number.
* **Authorization Terms (id: 38, type: note, required: false)**: This is a note field for customers to understand terms and conditions.
* **Understand Terms (id: 39, type: select_one, required: true)**: This is a check box for customers to confirm they understand terms and conditions.
* **Authorize Automatic Payments (id: 40, type: select_one, required: true)**: This is a check box for customers to authorize automatic payments.
* **Cancellation Policy (id: 41, type: select_one, required: true)**: This is a check box for customers to understand the cancellation policy.
* **How to Cancel (id: 42, type: select_one, required: false)**: This is the method available for customers to cancel their automatic payments (Online, Phone, etc.).
* **Cancellation Notice Period (id: 43, type: select_one, required: false)**: This is the time period required for customers to cancel their automatic payments.
* **Notification Preferences (id: 44, type: note, required: false)**: This is a note field for customers to select how they want to be notified.
* **Receive Payment Notifications (id: 45, type: select_one, required: true)**: This is a check box for customers to choose whether they want to receive payment notifications.
* **Receipt Delivery (id: 46, type: select_one, required: true)**: This is a check box for customers to choose how they want to receive receipts.
* **Understand Failed Payment Policy (id: 47, type: select_one, required: true)**: This is a check box for customers to understand the failed payment policy.
* **Retry Attempts (id: 48, type: select_one, required: false)**: This is the option for customers to choose how many retry attempts are allowed.
* **Data Security (id: 49, type: select_one, required: true)**: This is a check box for customers to understand data security.
* **Privacy Policy (id: 50, type: select_one, required: true)**: This is a check box for customers to confirm they have read the privacy policy.
* **Additional Authorization (id: 51, type: text, required: false)**: This is a note field for customers to enter any additional authorization information.
* **Customer Signature (id: 52, type: text, required: true)**: This is a field for customers to sign digitally.
* **Date of Signature (id: 53, type: date, required: true)**: This is the date of the digital signature.
* **IP Address (id: 54, type: text, required: false)**: This is the IP address recorded automatically.

## Tips

* Make sure to fill in all required fields to complete the form.
* Review and understand the terms and conditions before authorizing automatic payments.
* Ensure that the customer's contact information is accurate.
* Double-check that the payment method and amount are correct.
* Review and sign the form digitally to complete the authorization process.
