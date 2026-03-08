<thinking>...</thinking>

# loan_exit_interview - Help Guide
## Purpose
This form is used to gather information from loan borrowers upon the termination of their loan agreements. The purpose of this form is to collect relevant details about the loan, such as loan details, contact information, and repayment status. This information will be used to assess the effectiveness of the loan process and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the loan details in the "loan_details" field.
2. Provide your contact information in the "contact_info" field.
3. For each loan, indicate whether you were repaying the loan (select "Yes" or "No") or not repaying the loan (select "No") from the "repayment_option" field.
4. Select the loan status, either "Active" or "Inactive", from the "loan_status" field.
5. In the "contact_method" field, enter the method used to contact you.

## Field-by-Field Explanation
* **loan_details** (`loan_details`, text, required): Enter the loan details, including loan amount, interest rate, and loan term.
* **contact_info** (`contact_info`, text, required): Enter your contact information, including your name, address, phone number, and email.
* **repayment_option** (`repayment_option`, select_multiple, required): Indicate whether you were repaying the loan by selecting "Yes" for repaying or "No" for not repaying.
* **loan_status** (`loan_status`, select_one, required): Select the loan status, either "Active" for an active loan or "Inactive" for an inactive loan.
* **contact_method** (`contact_method`, text, required): Enter the method used to contact you.
