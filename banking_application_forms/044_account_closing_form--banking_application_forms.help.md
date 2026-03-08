# Account Closing Form - Help Guide
## Purpose
This form is designed for account holders to formally close their bank accounts, providing essential details about the account and specifying the preferred method for handling any remaining balance.

## How To Complete This Form
1. Fill in your full legal name as it appears on the account.
2. Enter your Social Security Number.
3. Provide the account number you wish to close.
4. Specify the type of account you wish to close.
5. If applicable, select the branch location that handles your account.
6. Select the reason for closing the account.
7. Choose how you want to receive the remaining balance.
8. If transferring the balance, provide the destination account number and bank name.
9. Decide how you want to handle automatic payments and deposits.
10. Choose how your debit card should be handled.
11. Specify how unused checks should be handled.
12. Confirm if there are any pending transactions on this account.
13. If yes, provide details about pending transactions.
14. Confirm if this account is linked to overdraft protection.
15. Decide how to handle overdraft protection.
16. Choose how you want to receive your final statement.
17. Select your preferred method of contact regarding the closure.
18. (Optional) Provide any additional comments about your account closure.
19. Type your full name to sign this form electronically.

## Field-by-Field Explanation

* **Account Holder Name** (`account_holder_name`, text, required): Your full legal name as it appears on the account.
* **Account Holder SSN** (`account_holder_ssn`, text, required): Your Social Security Number.
* **Account Number** (`account_number`, text, required): The account number you wish to close.
* **Account Type** (`account_type`, select_one, required): Type of account you wish to close. Options: "Checking Account", "Savings Account", "Money Market Account", "Certificate of Deposit", "Credit Card Account", "Loan Account", "Other".
* **Branch Location** (`branch_location`, text, optional): Which branch handles your account (if applicable).
* **Closing Reason** (`closing_reason`, select_one, required): Why are you closing this account? Options: "Moving to another bank", "Consolidating accounts", "No longer needed", "Poor service", "High fees", "Fraud concerns", "Other".
* **Final Balance Handling** (`final_balance_handling`, select_one, required): How would you like to receive the remaining balance? Options: "Check by mail", "Direct deposit to another account", "Cash at branch", "Wire transfer", "Other arrangement".
* **Destination Account Number** (`destination_account_number`, text, optional): If transferring balance, provide the destination account number.
* **Destination Bank Name** (`destination_bank_name`, text, optional): If transferring balance, provide the destination bank name.
* **Automatic Payments Cancel** (`automatic_payments_cancel`, select_one, required): Do you want to cancel all automatic payments and deposits? Options: "Yes, cancel all", "No, I will redirect them myself", "Only specific ones (please specify)".
* **Debit Card Handling** (`debit_card_handling`, select_one, required): How should your debit card be handled? Options: "Cancel immediately", "Keep active until balance transferred", "Return by mail", "Destroy at branch".
* **Checkbooks Handling** (`checkbooks_handling`, select_one, required): How should unused checks be handled? Options: "Cancel and destroy", "Allow to clear before closing", "Return to me", "Other".
* **Pending Transactions** (`pending_transactions`, select_one, required): Are there any pending transactions on this account? Options: "Yes", "No", "Unsure".
* **Pending Transactions Details** (`pending_transactions_details`, text, optional): If yes, please provide details about pending transactions.
* **Overdraft Protection** (`overdraft_protection`, select_one, required): Is this account linked to overdraft protection? Options: "Yes", "No", "Unsure".
* **Overdraft Protection Handling** (`overdraft_protection_handling`, select_one, required): How should overdraft protection be handled? Options: "Transfer to another account", "Cancel protection", "Other arrangement".
* **Final Statement Preference** (`final_statement_preference`, select_one, required): How would you like to receive your final statement? Options: "Paper statement by mail", "Electronic statement", "No statement needed", "View online only".
* **Contact Preference** (`contact_preference`, select_one, required): How would you prefer to be contacted regarding this closure? Options: "Email", "Phone", "Mail", "Text message".
* **Additional Comments** (`additional_comments`, text, optional): Any other information about your account closure.
* **Electronic Signature** (`electronic_signature`, text, required): Type your full name to sign this form electronically.

## Tips

* Please ensure that you fill in all required fields accurately to ensure a smooth account closure process.
* If you're unsure about any field, refer to the provided options or ask your branch representative for assistance.
* This form is designed for account holders who wish to close their accounts; if you're opening a new account, please use the account opening form.
