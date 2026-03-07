<thinking>
This form is used to report instances of unauthorized debits to the bank's fraud department. It is intended to gather information about the suspicious debit activity to aid in the investigation and resolution of the issue.
</thinking>

# Unauthorized Debit Reporting Form - Help Guide
## Purpose
The Unauthorized Debit Reporting Form is a tool for customers to report any instances of unauthorized debits on their accounts. Completing this form helps the bank's fraud department identify and investigate the issue.

## How To Complete This Form
1. Please fill out the form completely and accurately.
2. Enter your email address and phone number for contact information.
3. Provide the details of the unauthorized debit, including the account information and date and time of the suspicious transaction.
4. Select the reason for the report from the options provided.
5. Review and submit the form once complete.

## Field-by-Field Explanation

* **User Information** (`user_info`, text, required: false): Please enter your name and any other identifying information.
* **Report Details** (`report_details`, text, required: false): Briefly describe the issue with the unauthorized debit.
* **Suspicious Debit** (`suspicious_debit`, text, required: false): Enter any additional details about the suspicious transaction.
* **Account Information** (`account_info`, text, required: false): Enter any relevant account information that may aid in the investigation.
* **User Email** (`user_email`, email, required: true): Enter your email address so we can contact you about the status of your report.
* **User Phone** (`user_phone`, text, required: true): Enter your phone number so we can contact you about the status of your report.
* **User Message** (`user_message`, text, required: false): If you have any additional comments or concerns, please enter them here.
* **Account Number** (`account_number`, text, required: true): Enter the account number associated with the unauthorized debit.
* **Bank Routing Number** (`bank_routing_number`, text, required: true): Enter the bank routing number associated with the account.
* **Account Name** (`account_name`, text, required: true): Enter the name of the account holder.
* **Amount** (`amount`, number, required: true): Enter the amount of the unauthorized debit.
* **Suspicious Debit Date** (`suspicious_debit_date`, date, required: true): Enter the date of the unauthorized debit.
* **Suspicious Debit Time** (`suspicious_debit_time`, time, required: true): Enter the time of the unauthorized debit.
* **Reason** (`reason`, text, required: false): Select the reason for the report from the options provided.
* **Select Multiple** (`select_multiple`, select_multiple, required: true): Select all applicable reasons for the report.
* **Select One** (`select_one`, select_one, required: true): Select the primary reason for the report.
* **Date Of Last Debit** (`date_of_last_debit`, date, required: true): Enter the date of the last debit on the account.
* **Time Of Last Debit** (`time_of_last_debit`, time, required: true): Enter the time of the last debit on the account.
* **Last Debit Amount** (`last_debit_amount`, number, required: true): Enter the amount of the last debit on the account.
* **Frequency** (`frequency`, select_one, required: true): Select the frequency of the unauthorized debit.
* **Account Type** (`account_type`, text, required: true): Enter the type of account (e.g. checking, savings, etc.).
* **Account Status** (`account_status`, text, required: true): Enter the status of the account (e.g. active, inactive, closed, etc.).
* **Bank Name** (`bank_name`, text, required: true): Enter the name of the bank.
* **Submit** (`submit_button`, text, required: true): Click submit to complete and send the report.
