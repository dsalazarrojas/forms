# Phone Exchange Form - Help Guide
## Purpose
The Phone Exchange Form is used to exchange phone numbers between accounts.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your phone number in the "Phone Number" field.
2. Enter your account ID in the "Account ID" field.
3. Select the type of exchange from the "Exchange Type" dropdown menu (e.g., port, transfer, swap, merge, port transfer, or transfer swap).
4. If you are exchanging with multiple accounts, select the "New Account" field and choose the accounts to exchange with.
5. Confirm the exchange by selecting "Confirm Exchange" to true.
6. Optional: Enter the date and time of the exchange in the "Exchange Date" and "Exchange Time" fields for record-keeping purposes.
7. Enter any relevant notes about the exchange in the "Exchange Note" field.
8. Enter your email address in the "Email" field to receive updates about the exchange.
9. Enter your phone number again in the "Phone" field for verification purposes.
10. Confirm your phone number by selecting "Confirm Phone" to true.

## Field-by-Field Explanation
* **Phone Number** (`phone_number`, text, required): Enter the phone number you want to exchange.
* **Account ID** (`account_id`, text, required): Enter your account ID to identify the account you want to exchange with.
* **Exchange Type** (`exchange_type`, select_one, required): Select the type of exchange (e.g., port, transfer, swap, merge, port transfer, or transfer swap).
* **New Account** (`new_account`, select_multiple, optional): Select the account(s) you want to exchange with (e.g., account1, account2, account3, account4).
* **Confirm Exchange** (`confirm_exchange`, select_one, required): Confirm that you want to exchange the phone number.
* **Exchange Date** (`exchange_date`, date, optional): Enter the date of the exchange for record-keeping purposes.
* **Exchange Time** (`exchange_time`, time, optional): Enter the time of the exchange for record-keeping purposes.
* **Exchange Note** (`exchange_note`, note, optional): Enter any relevant notes about the exchange.
* **Email** (`email`, email, optional): Enter your email address to receive updates about the exchange.
* **Phone** (`phone`, text, optional): Enter your phone number for verification purposes.
* **Confirm Phone** (`confirm_phone`, select_one, required): Confirm your phone number to complete the exchange.
