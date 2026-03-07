<thinking>
This form is used to request an investment statement, which is a document that provides information about an individual's investments. Before proceeding, please ensure that you have not already submitted this request and that the information you provide is accurate and up-to-date. To complete this form, follow the instructions below.
</thinking>

# Investment Statement Request Form - Help Guide
## Purpose
This form is used to request an investment statement, which is a document that provides information about an individual's investments.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the investment types that apply to you from the dropdown menu.
2. Enter your date of birth in the format MM/DD/YYYY.
3. Provide your street address.
4. Select your country of residence from the dropdown menu.
5. Enter your investment statement.
6. Enter your client name.
7. Enter your contact number.
8. Enter your email address.
9. Enter the date of the investment.
10. Enter the time of the investment.
11. Provide any additional notes about the investment.
12. Select your investment types (optional).
13. Enter the amount of the investment.
14. Enter your bank account number.
15. Enter your bank branch name.
16. Enter your bank SWIFT code.
17. Enter your bank ABA code.
18. Enter your bank routing code.
19. Enter your account number on the bank statement.
20. Enter your bank name.
21. Enter your bank routing number.
22. Enter your client ID.
23. Enter the type of the investment (if not selected in step 12).
24. Enter the amount of the investment (if not entered in step 13).
25. Accept the terms and conditions.

## Field-by-Field Explanation
* **Investment Statement Request Form** (`inputSchema`,  object): A form used to request an investment statement.
* **Select Investment Types** (`investment_statement_request_form`,  select_multiple,  required: false): Select the types of investments you have from the dropdown menu.
	+ Type 1 (`type1`, text,  required: false): This is the first type of investment.
	+ Type 2 (`type2`, text,  required: false): This is the second type of investment.
	+ Type 3 (`type3`, text,  required: false): This is the third type of investment.
* **Date of Birth** (`date_of_birth`,  date,  required: true): Enter your date of birth in the format MM/DD/YYYY.
* **Street Address** (`street_address`,  text,  required: true): Enter your street address.
* **Country of Residence** (`country_of_residence`,  select_one,  required: true): Select your country of residence from the dropdown menu.
* **Investment Statement** (`investment_statement`,  text,  required: true): Enter your investment statement.
* **Client Name** (`client_name`,  text,  required: true): Enter your client name.
* **Contact Number** (`contact_number`,  text,  required: true): Enter your contact number.
* **Email** (`email`,  email,  required: true): Enter your email address.
* **Date** (`date`,  date,  required: true): Enter the date of the investment.
* **Time** (`time`,  time,  required: true): Enter the time of the investment.
* **Note** (`note`,  note,  required: false): Enter any additional notes about the investment.
* **Investment Type** (`investment_type`,  text,  required: true): Enter the type of investment (if not selected in step 12).
* **Investment Amount** (`investment_amount`,  number,  required: true): Enter the amount of the investment.
* **Bank Account Number** (`bank_account_number`,  text,  required: true): Enter your bank account number.
* **Bank Branch** (`bank_branch`,  text,  required: true): Enter your bank branch name.
* **Bank SWIFT** (`bank_swift`,  text,  required: true): Enter your bank SWIFT code.
* **Bank ABA** (`bank_aba`,  text,  required: true): Enter your bank ABA code.
* **Bank Routing** (`bank_routing`,  text,  required: true): Enter your bank routing code.
* **Account Number** (`account_number`,  text,  required: true): Enter your account number on the bank statement.
* **Bank Name** (`bank_name`,  text,  required: true): Enter your bank name.
* **Bank Routing** (`bank_routing`,  text,  required: true): Enter your bank routing number.
* **Client ID** (`client_id`,  text,  required: true): Enter your client ID.
* **Investment Type 2** (`investment_type_2`,  text,  required: true): Enter the type of investment (if not selected in step 12).
* **Investment Amount 2** (`investment_amount_2`,  text,  required: true): Enter the amount of the investment (if not entered in step 13).
* **Terms** (`terms`,  text,  required: true): Accept the terms and conditions.
