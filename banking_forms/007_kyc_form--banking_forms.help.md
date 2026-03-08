# kyc_form - Help Guide
## Purpose
The Know Your Customer (KYC) form is used to collect personal and account information from customers for verification purposes. This form helps us understand your identity and account details to provide you with better service and ensure regulatory compliance.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name as it appears on your government-issued ID.
2. Provide your account number to help us verify your account information.
3. Select the type of account you hold with us.
4. Enter your street address (optional, but recommended for verification purposes).
5. Enter your email address, which will be used for communication and account updates.
6. Enter your phone number for us to contact you.
7. Enter your date of birth for age verification purposes.
8. Upload a scanned copy of your signature for identification purposes.
9. Enter your ID number (e.g., passport number, ID card number).
10. Select your nationality.
11. Enter the number of your identification document (e.g., passport number).
12. Select the type of ID you possess (e.g., passport, driver's license).
13. Enter the date you opened your account with us.
14. Enter the date you have been a customer with us.
15. Please provide any additional information you would like to share with us (optional).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required): Enter your full name as it appears on your government-issued ID.
* **Account Number** (`account_number`, `number`, required): Enter your account number to help us verify your account information.
* **Account Type** (`account_type`, `select_one`, required): Select the type of account you hold with us.
* **Street Address** (`street_address`, `text`, optional): Enter your street address for verification purposes.
* **Customer Email** (`customer_email`, `email`, required): Enter your email address for communication and account updates.
* **Phone Number** (`customer_phone`, `text`, required): Enter your phone number for us to contact you.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter your date of birth for age verification purposes.
* **Customer Signature** (`customer_signature`, `text`, required): Upload a scanned copy of your signature for identification purposes.
* **ID Number** (`customer_id_number`, `text`, optional): Enter your ID number (e.g., passport number, ID card number).
* **Nationality** (`customer_nationality`, `text`, optional): Select your nationality.
* **ID Document Number** (`customer_document_number`, `text`, optional): Enter the number of your identification document (e.g., passport number).
* **ID Type** (`id_type`, `select_one`, required): Select the type of ID you possess (e.g., passport, driver's license).
* **Account Since** (`customer_since`, `date`, optional): Enter the date you opened your account with us.
* **Account Since** (`account_since`, `date`, optional): Enter the date you have been a customer with us.
* **Additional Information** (`customer_since`, `note`, optional): Please provide any additional information you would like to share with us.
