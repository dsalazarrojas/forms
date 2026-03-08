<thinking>
This form is designed to collect information about employee expenses, including employee details, expense date, category, and reimbursement details. The form ensures that employees provide accurate and complete information to facilitate the reimbursement process. This form is not intended for personal or entertainment expenses. All fields marked as "required" must be filled in for the form to be considered complete. Please review each field carefully to ensure accurate and complete information.
</thinking>

# Accountable Plan Reimbursement Form - Help Guide
## Purpose
This form is used to collect information about employee expenses to ensure accurate and complete reimbursement.

## How To Complete This Form
1. Ensure all required fields are filled in accurately and completely.
2. Enter the employee's full name, employee ID, department, email address, and manager or supervisor's name.
3. Select the date and expense category related to the expense.
4. Provide a detailed description of the business purpose for the expense.
5. Enter the expense amount and select the method of payment preference.
6. Indicate if an advance was received for this expense and provide the advance amount if applicable.
7. Enter the date of submission.
8. Finally, certify that the expenses were incurred for legitimate business purposes.

## Field-by-Field Explanation
* **Employee Full Name** (`employee_name`, text, required): Enter the employee's full name as it appears on their ID or payroll records.
* **Employee ID** (`employee_id`, text, required): Enter the employee's ID number as used for payroll and system records.
* **Department** (`department`, text, required): Enter the employee's department or team name.
* **Email Address** (`email`, email, required): Enter the employee's email address.
* **Manager or Supervisor Name** (`manager_name`, text, required): Enter the manager or supervisor's name.
* **Date of Expense** (`expense_date`, date, required): Enter the date the expense was incurred.
* **Expense Category** (`expense_category`, select_one, required): Select one of the categories: Travel - Airfare, Travel - Hotel, Travel - Ground transportation, Meals and entertainment, Office supplies, Professional development, Mileage, Other.
* **Business Purpose of Expense** (`business_purpose`, text, required): Describe the business reason for the expense in detail.
* **Expense Amount** (`expense_amount`, number, required): Enter the amount of the expense in dollars.
* **Is a Receipt Attached** (`receipt_attached`, select_one, required): Indicate if a receipt is attached, selecting "True" if a receipt is available, or "No - Lost receipt (explanation required)" if the receipt is not available.
* **Lost Receipt Explanation** (`lost_receipt_explanation`, text, required if receipt_attached is "No - Lost receipt (explanation required)): If a receipt is not attached, provide a brief explanation for the lost receipt.
* **Total Reimbursement Amount Requested** (`total_reimbursement`, number, required): Enter the total amount being requested as reimbursement.
* **Preferred Reimbursement Method** (`payment_method`, select_one, required): Select one of the payment methods: Direct deposit, Company check, Payroll addition.
* **Was an Advance Received for This Expense** (`advance_received`, select_one, required): Indicate if an advance was received, selecting "True" if received, or "False" if not received.
* **Advance Amount Received (if applicable)** (`advance_amount`, number, required if advance_received is "True"): If an advance was received, enter the amount.
* **Date of Submission** (`submission_date`, date, required): Enter the date the form is being submitted.
* **I Certify These Expenses Were Incurred for Legitimate Business Purposes** (`certification`, select_one, required): Indicate that the expenses were incurred for legitimate business purposes, selecting "Yes, I certify" if true, or "Other" if not applicable.
